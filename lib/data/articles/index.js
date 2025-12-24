import { articlesMetadata } from './metadata.js';
import { authors } from './authors.js';
import { getArticleContent } from './content/index.js';

/**
 * Get article metadata by slug
 */
export const getArticleBySlug = (slug) => {
  return articlesMetadata.find(article => article.slug === slug);
};

/**
 * Get full article with author info and content (ASYNC)
 */
export const getFullArticle = async (slug) => {
  const metadata = getArticleBySlug(slug);
  if (!metadata) return null;

  const content = await getArticleContent(metadata.id);
  const author = authors[metadata.authorSlug];

  return {
    ...metadata,
    author,
    content
  };
};

/**
 * Get articles by category
 */
export const getArticlesByCategory = (category) => {
  return articlesMetadata.filter(article => article.category === category);
};

/**
 * Get recent articles
 */
export const getRecentArticles = (limit = 3) => {
  return [...articlesMetadata]
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, limit);
};

/**
 * Get related articles with full metadata
 */
export const getRelatedArticles = (currentSlug, limit = 3) => {
  const current = getArticleBySlug(currentSlug);
  if (!current || !current.relatedArticles) return [];

  return articlesMetadata
    .filter(article => current.relatedArticles.includes(article.slug))
    .slice(0, limit);
};

/**
 * Get articles by tag
 */
export const getArticlesByTag = (tag) => {
  return articlesMetadata.filter(article =>
    article.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
};

/**
 * Get all unique categories
 */
export const getCategories = () => {
  return [...new Set(articlesMetadata.map(article => article.category))];
};

/**
 * Get all unique tags
 */
export const getTags = () => {
  const tags = articlesMetadata.flatMap(article => article.tags);
  return [...new Set(tags)];
};

/**
 * Search articles by title, excerpt, or tags
 */
export const searchArticles = (query) => {
  const lowerQuery = query.toLowerCase();
  return articlesMetadata.filter(article =>
    article.title.toLowerCase().includes(lowerQuery) ||
    article.excerpt.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

// Export metadata for direct access
export { articlesMetadata } from './metadata.js';