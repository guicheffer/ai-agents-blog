#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Directory containing markdown posts
const postsDir = path.join(__dirname, 'posts');
const outputFile = path.join(__dirname, 'posts.md');

// Get all markdown files
const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'));

// Parse each file and extract metadata
const posts = files.map(file => {
  const filePath = path.join(postsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const { data, excerpt } = matter(content, { excerpt: true });
  
  return {
    file,
    slug: file.replace('.md', ''),
    title: data.title || file.replace('.md', '').replace(/-/g, ' '),
    date: data.date || new Date().toISOString().split('T')[0],
    category: data.category || 'AI Agents',
    tags: data.tags || [],
    excerpt: excerpt || data.description || '',
    content: content.substring(0, 500) + '...' // First 500 chars
  };
});

// Sort by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Generate markdown content
let markdown = `# AI Agent Posts Index\n\n`;
markdown += `*Generated automatically from ${posts.length} markdown files in /posts directory*\n\n`;
markdown += `Last updated: ${new Date().toISOString()}\n\n`;
markdown += `## All Posts (${posts.length} articles)\n\n`;

posts.forEach((post, index) => {
  markdown += `### ${index + 1}. ${post.title}\n`;
  markdown += `- **File:** \`${post.file}\`\n`;
  markdown += `- **Date:** ${post.date}\n`;
  markdown += `- **Category:** ${post.category}\n`;
  if (post.tags.length > 0) {
    markdown += `- **Tags:** ${post.tags.join(', ')}\n`;
  }
  markdown += `- **Excerpt:** ${post.excerpt.trim().substring(0, 200)}...\n`;
  markdown += `- **Link:** [Read full article](/posts/${post.slug}.html)\n\n`;
});

// Write to file
fs.writeFileSync(outputFile, markdown);
console.log(`✅ Generated ${outputFile} with ${posts.length} posts`);

// Also generate a JSON index for potential API use
const jsonIndex = {
  generated: new Date().toISOString(),
  count: posts.length,
  posts: posts.map(post => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    category: post.category,
    tags: post.tags,
    excerpt: post.excerpt.trim().substring(0, 200)
  }))
};

fs.writeFileSync(
  path.join(__dirname, 'posts-index.json'),
  JSON.stringify(jsonIndex, null, 2)
);
console.log(`✅ Generated posts-index.json`);