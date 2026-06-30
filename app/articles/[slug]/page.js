import React from "react";
import { redirect } from "next/navigation";
import {
  getArticleBySlug,
  getFullArticle,
  articlesMetadata,
} from "@/lib/data/articles";
import { authors } from "@/lib/data/articles/authors";
import ArticleClient from "./ArticleClient";

export async function generateStaticParams() {
  return articlesMetadata.map((article) => ({
    slug: article.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const metadata = getArticleBySlug(slug);
  if (!metadata) return null;

  // PDF-mode articles don't have markdown content — send them back to the archive
  if (metadata.isPdf) {
    redirect("/articles");
  }

  const article = await getFullArticle(slug);
  const author = authors[metadata.authorSlug];

  return (
    <ArticleClient article={article} metadata={metadata} author={author} />
  );
}
