"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { getRecentArticles } from "@/lib/data/articles";
import PdfArticleModal from "./PdfArticleModal";

export const Articles = () => {
  const recentArticles = getRecentArticles(3);
  const [modalArticle, setModalArticle] = useState(null);

  if (!recentArticles || recentArticles.length === 0) return null;

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-amber-700 font-bold tracking-widest text-sm uppercase mb-2 block">
              Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Latest Legal Perspectives
            </h2>
          </div>
          <Link href="/articles">
            <Button
              variant="link"
              className="text-slate-900 hover:text-amber-700 p-0 text-lg font-semibold"
            >
              View Archive <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="flex flex-col">
          {recentArticles.map((article) => {
            const rowContent = (
              <div className="py-8 border-b border-slate-200 group-hover:bg-slate-50 transition-colors duration-300">
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-2">
                    <span className="text-sm font-semibold text-slate-400 group-hover:text-amber-600 transition-colors">
                      {new Date(article.publishDate).toLocaleDateString(
                        "en-US",
                        { month: "long", year: "numeric" },
                      )}
                    </span>
                  </div>

                  <div className="md:col-span-7">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors flex items-center gap-2">
                      {article.title}
                      {article.isPdf && (
                        <FileText
                          size={16}
                          className="text-amber-600 shrink-0"
                        />
                      )}
                    </h3>
                    <p className="text-slate-500 line-clamp-2 md:line-clamp-1">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="md:col-span-3 flex md:justify-end items-center gap-4">
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 border border-slate-200 px-3 py-1">
                      {article.category}
                    </span>
                    <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-amber-600 transform group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </div>
            );

            return article.isPdf ? (
              <button
                key={article.id}
                onClick={() => setModalArticle(article)}
                className="group text-left w-full"
              >
                {rowContent}
              </button>
            ) : (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="group"
              >
                {rowContent}
              </Link>
            );
          })}
        </div>
      </div>

      <PdfArticleModal
        article={modalArticle}
        open={!!modalArticle}
        onOpenChange={(open) => !open && setModalArticle(null)}
      />
    </section>
  );
};
