'use client';
import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { getRecentArticles } from '@/lib/data/articles';

export const Articles = () => {
  const recentArticles = getRecentArticles(3);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <Badge className="mb-4">Legal Insights</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Articles & Updates
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Stay informed with our expert analysis on Nigerian law and business trends.
            </p>
          </div>
          <Link href="/articles" className="hidden md:block">
            <Button variant="outline">
              View All Articles
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <Link key={article.id} href={`/articles/${article.slug}`}>
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge>{article.category}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(article.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Read More
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/articles">
            <Button variant="outline">
              View All Articles
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
