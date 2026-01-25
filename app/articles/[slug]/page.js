import React from 'react';
import { getArticleBySlug, getFullArticle, articlesMetadata } from '@/lib/data/articles';
import { authors } from '@/lib/data/articles/authors';
import ArticleClient from './ArticleClient';

export async function generateStaticParams() {
  return articlesMetadata.map((article) => ({
    slug: article.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const metadata = getArticleBySlug(slug);
  if (!metadata) return null;

  // We fetch the full content here on the server!
  const article = await getFullArticle(slug);
  const author = authors[metadata.authorSlug];

  return <ArticleClient article={article} metadata={metadata} author={author} />;
}