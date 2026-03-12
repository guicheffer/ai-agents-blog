#!/usr/bin/env python3
"""
Simple Markdown to HTML converter without external dependencies.
"""

import os
import re
from pathlib import Path
from datetime import datetime

def simple_markdown_to_html(markdown_text):
    """Convert basic markdown to HTML without external dependencies."""
    # Convert headers
    html = markdown_text
    
    # Convert headers (h1, h2, h3)
    html = re.sub(r'^# (.*?)$', r'<h1>\1</h1>', html, flags=re.MULTILINE)
    html = re.sub(r'^## (.*?)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)
    html = re.sub(r'^### (.*?)$', r'<h3>\1</h3>', html, flags=re.MULTILINE)
    
    # Convert bold and italic
    html = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', html)
    html = re.sub(r'\*(.*?)\*', r'<em>\1</em>', html)
    
    # Convert code blocks
    html = re.sub(r'```(.*?)```', r'<pre><code>\1</code></pre>', html, flags=re.DOTALL)
    html = re.sub(r'`(.*?)`', r'<code>\1</code>', html)
    
    # Convert lists
    lines = html.split('\n')
    in_list = False
    result_lines = []
    
    for line in lines:
        if line.strip().startswith('- '):
            if not in_list:
                result_lines.append('<ul>')
                in_list = True
            result_lines.append(f'  <li>{line.strip()[2:]}</li>')
        elif line.strip().startswith('1. '):
            if not in_list:
                result_lines.append('<ol>')
                in_list = True
            result_lines.append(f'  <li>{line.strip()[3:]}</li>')
        else:
            if in_list:
                if line.strip().startswith('- ') or line.strip().startswith('1. '):
                    pass
                else:
                    if '<ul>' in result_lines[-2] or '<ol>' in result_lines[-2]:
                        result_lines.append('</ul>' if '<ul>' in result_lines[-2] else '</ol>')
                    in_list = False
            result_lines.append(line)
    
    if in_list:
        result_lines.append('</ul>' if '<ul>' in result_lines[-2] else '</ol>')
    
    html = '\n'.join(result_lines)
    
    # Convert paragraphs
    paragraphs = html.split('\n\n')
    html_paragraphs = []
    for p in paragraphs:
        p = p.strip()
        if p and not p.startswith('<') and not p.endswith('>'):
            html_paragraphs.append(f'<p>{p}</p>')
        else:
            html_paragraphs.append(p)
    
    html = '\n\n'.join(html_paragraphs)
    
    # Convert line breaks
    html = html.replace('\n', '<br>\n')
    
    return html

def extract_frontmatter(content):
    """Extract YAML frontmatter from markdown content."""
    frontmatter = {}
    lines = content.split('\n')
    
    if lines and lines[0] == '---':
        i = 1
        while i < len(lines) and lines[i] != '---':
            if ':' in lines[i]:
                key, value = lines[i].split(':', 1)
                frontmatter[key.strip()] = value.strip().strip('"')
            i += 1
        content_start = i + 1
        markdown_content = '\n'.join(lines[content_start:])
    else:
        markdown_content = content
    
    return frontmatter, markdown_content

def create_html_template(title, date, author, category, content_html):
    """Create HTML template for a blog post."""
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - AI Agents Blog</title>
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #f8f9fa;
        }}
        
        .container {{
            background: white;
            border-radius: 8px;
            padding: 40px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-top: 20px;
        }}
        
        .header {{
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eaeaea;
        }}
        
        h1 {{
            font-size: 2.5rem;
            margin-bottom: 10px;
            color: #2c3e50;
        }}
        
        .meta {{
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 20px;
        }}
        
        .meta span {{
            margin-right: 15px;
        }}
        
        .category {{
            display: inline-block;
            background: #e3f2fd;
            color: #1976d2;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }}
        
        .content {{
            font-size: 1.1rem;
            line-height: 1.8;
        }}
        
        .content h2 {{
            margin-top: 30px;
            margin-bottom: 15px;
            color: #2c3e50;
            font-size: 1.8rem;
        }}
        
        .content h3 {{
            margin-top: 25px;
            margin-bottom: 10px;
            color: #34495e;
            font-size: 1.4rem;
        }}
        
        .content p {{
            margin-bottom: 20px;
        }}
        
        .content ul, .content ol {{
            margin-bottom: 20px;
            padding-left: 30px;
        }}
        
        .content li {{
            margin-bottom: 8px;
        }}
        
        .content code {{
            background: #f5f5f5;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
            font-size: 0.9em;
        }}
        
        .content pre {{
            background: #f5f5f5;
            padding: 15px;
            border-radius: 6px;
            overflow-x: auto;
            margin-bottom: 20px;
            border-left: 4px solid #1976d2;
        }}
        
        .content pre code {{
            background: none;
            padding: 0;
        }}
        
        .back-link {{
            display: inline-block;
            margin-top: 40px;
            color: #1976d2;
            text-decoration: none;
            font-weight: 500;
        }}
        
        .back-link:hover {{
            text-decoration: underline;
        }}
        
        @media (max-width: 768px) {{
            body {{
                padding: 10px;
            }}
            
            .container {{
                padding: 20px;
            }}
            
            h1 {{
                font-size: 2rem;
            }}
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>{title}</h1>
            <div class="meta">
                <span>📅 {date}</span>
                <span>👤 {author}</span>
                <span class="category">{category}</span>
            </div>
        </div>
        
        <div class="content">
            {content_html}
        </div>
        
        <a href="/docs/index.html" class="back-link">← Back to all articles</a>
    </div>
</body>
</html>"""

def convert_markdown_to_html(md_file_path, output_dir):
    """Convert a markdown file to HTML."""
    try:
        with open(md_file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract frontmatter
        frontmatter, markdown_content = extract_frontmatter(content)
        
        # Get metadata
        title = frontmatter.get('title', 'Untitled')
        date = frontmatter.get('date', datetime.now().strftime('%Y-%m-%d'))
        author = frontmatter.get('author', 'Arturo')
        category = frontmatter.get('category', 'Technical')
        
        # Convert markdown to HTML
        html_content = simple_markdown_to_html(markdown_content)
        
        # Create HTML template
        html_template = create_html_template(title, date, author, category, html_content)
        
        # Generate output filename
        stem = Path(md_file_path).stem
        output_file = Path(output_dir) / f"{stem}.html"
        
        # Write HTML file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(html_template)
        
        print(f"✓ Converted: {stem}.md → {stem}.html")
        return True
        
    except Exception as e:
        print(f"✗ Error converting {md_file_path}: {e}")
        return False

def update_homepage():
    """Update the homepage to include all posts."""
    posts_dir = Path("/workspace/ai-agents-blog/posts")
    homepage_path = Path("/workspace/ai-agents-blog/docs/index.html")
    
    # Get all markdown files
    md_files = list(posts_dir.glob("*.md"))
    
    # Extract metadata from each post
    posts_data = []
    for md_file in md_files:
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            frontmatter, _ = extract_frontmatter(content)
            
            posts_data.append({
                'title': frontmatter.get('title', 'Untitled'),
                'date': frontmatter.get('date', '2026-03-11'),
                'author': frontmatter.get('author', 'Arturo'),
                'category': frontmatter.get('category', 'Technical'),
                'excerpt': frontmatter.get('excerpt', ''),
                'filename': md_file.stem
            })
        except Exception as e:
            print(f"Error reading {md_file}: {e}")
    
    # Sort by date (newest first)
    posts_data.sort(key=lambda x: x['date'], reverse=True)
    
    # Generate posts HTML
    posts_html = ""
    for post in posts_data:
        # Calculate reading time (approx 200 words per minute)
        word_count = len(post['excerpt'].split()) + len(post['title'].split()) * 3
        reading_time = max(1, round(word_count / 200))
        
        posts_html += f"""
        <div class="post-card">
            <div class="post-header">
                <h3><a href="/docs/posts/{post['filename']}.html">{post['title']}</a></h3>
                <div class="post-meta">
                    <span class="date">📅 {post['date']}</span>
                    <span class="reading-time">⏱️ {reading_time} min read</span>
                    <span class="category">{post['category']}</span>
                </div>
            </div>
            <p class="post-excerpt">{post['excerpt']}</p>
            <a href="/docs/posts/{post['filename']}.html" class="read-link">Read article →</a>
        </div>
        """
    
    # Read current homepage
    with open(homepage_path, 'r', encoding='utf-8') as f:
        homepage_content = f.read()
    
    # Update posts section
    # Find the posts-grid div
    start = homepage_content.find('<div class="posts-grid">')
    end = homepage_content.find('</div>', start) + 6
    
    if start != -1 and end != -1:
        new_homepage = homepage_content[:start] + f'<div class="posts-grid">\n{posts_html}\n</div>' + homepage_content[end:]
    else:
        # Fallback: replace the entire body content
        body_start = homepage_content.find('<body>') + 6
        body_end = homepage_content.find('</body>')
        new_homepage = homepage_content[:body_start] + f'\n<div class="posts-grid">\n{posts_html}\n</div>' + homepage_content[body_end:]
    
    # Update post count
    new_homepage = re.sub(
        r'Total posts: \d+ AI agent articles',
        f'Total posts: {len(posts_data)} AI agent articles',
        new_homepage
    )
    
    # Write updated homepage
    with open(homepage_path, 'w', encoding='utf-8') as f:
        f.write(new_homepage)
    
    print(f"✅ Updated homepage with {len(posts_data)} posts")

def main():
    """Main conversion function."""
    posts_dir = Path("/workspace/ai-agents-blog/posts")
    output_dir = Path("/workspace/ai-agents-blog/docs/posts")
    
    # Create output directory if it doesn't exist
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Get all markdown files
    md_files = list(posts_dir.glob("*.md"))
    
    print(f"Found {len(md_files)} markdown files to convert")
    
    # Convert each file
    success_count = 0
    for md_file in md_files:
        if convert_markdown_to_html(md_file, output_dir):
            success_count += 1
    
    print(f"\n✅ Successfully converted {success_count}/{len(md_files)} files")
    
    # Update homepage with new posts
    update_homepage()

if __name__ == "__main__":
    main()