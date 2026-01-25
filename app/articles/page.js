'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, X } from 'lucide-react';
import { articlesMetadata, getCategories } from '@/lib/data/articles';

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get dynamic categories
  const allCategories = ['all', ...getCategories()];

  // Filter Logic
  const filteredArticles = articlesMetadata.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* --- Header Section --- */}
      <section className="bg-slate-50 pt-32 pb-12 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <span className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-4 block">
            Knowledge & Insights
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-8">
            Legal Perspectives
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-6 md:gap-8 border-b border-slate-200 w-full md:w-auto">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                              pb-4 text-sm font-bold uppercase tracking-widest transition-all relative
                              ${selectedCategory === category
                      ? 'text-slate-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-600'
                      : 'text-slate-400 hover:text-amber-600'}
                          `}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80 mb-2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 sm:text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- Article List --- */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 divide-y divide-slate-100">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Link key={article.id} href={`/articles/${article.slug}`} className="group py-12 block">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  {/* Meta Data */}
                  <div className="md:col-span-2">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
                      {article.category}
                    </span>
                    <span className="text-sm text-slate-400 font-serif italic">
                      {new Date(article.publishDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <div className="md:col-span-7">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-slate-500 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="md:col-span-3 flex md:justify-end">
                    <span className="inline-flex items-center text-sm font-bold text-slate-900 uppercase tracking-widest group-hover:gap-4 transition-all gap-2">
                      Read Article <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="py-20 text-center">
              <p className="text-xl text-slate-400 font-serif italic">
                No articles found matching "{searchQuery}".
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-4 text-amber-600 font-bold uppercase tracking-widest text-sm hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* --- Newsletter Section --- */}
      <section className="bg-slate-950 text-white py-20 mt-12">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">Subscribe to our newsletter</h3>
            <p className="text-slate-400">Get the latest legal updates delivered to your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input type="email" placeholder="Email Address" className="bg-slate-900 border-none px-6 py-4 w-full md:w-80 text-white focus:outline-none focus:ring-1 focus:ring-amber-600 placeholder-slate-600" />
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors">
              Join
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}