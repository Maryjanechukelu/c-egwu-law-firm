'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Calendar, Clock, ChevronRight, Search, Filter, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { articlesMetadata, getCategories } from '@/lib/data/articles';
import { authors } from '@/lib/data/articles/authors';

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Get categories from the new helper function
  const allCategories = ['all', ...getCategories()];

  // Filter articles
  const filteredArticles = articlesMetadata.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Featured article (most recent)
  const featuredArticle = articlesMetadata[0];
  const featuredAuthor = featuredArticle ? authors[featuredArticle.authorSlug] : null;

  // Fallback UI when no articles exist at all
  if (!articlesMetadata || articlesMetadata.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <section className="relative pt-20 pb-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-slate-100 flex items-center justify-center">
                <FileText size={48} className="text-slate-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                No Articles Available
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're working on creating insightful legal content for you. Please check back soon.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/">
                  <Button variant="outline">Go Home</Button>
                </Link>
                <Link href="/contact">
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-6 md:pt-10 pb-5 md:pb-8 bg-linear-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4">Legal Insights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Articles & Insights
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Expert analysis and practical guidance on Nigerian law, business regulations, and emerging legal trends.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-8">
              <Badge className="mb-2">Featured Article</Badge>
              <h2 className="text-2xl font-bold">Latest Insights</h2>
            </div>

            <Card
              onClick={() => router.push(`/articles/${featuredArticle.slug}`)}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-[16/10] lg:aspect-auto bg-slate-100">
                  <img
                    src={featuredArticle.featuredImage}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="text-base">{featuredArticle.category}</Badge>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{new Date(featuredArticle.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  {featuredAuthor && (
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-2">Written by</p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/team/${featuredArticle.authorSlug}`);
                        }}
                        className="font-semibold hover:text-primary transition-colors text-left"
                      >
                        {featuredAuthor.name}
                      </button>
                    </div>
                  )}

                  <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                    Read Full Article
                    <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-8 bg-slate-50 sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter size={20} className="text-muted-foreground flex-shrink-0" />
              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category === 'all' ? 'All Articles' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-200 flex items-center justify-center">
                <Search size={40} className="text-slate-400" />
              </div>
              <p className="text-xl text-muted-foreground mb-4">
                No articles found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-muted-foreground">
                  Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
                  {selectedCategory !== 'all' && ` in ${selectedCategory}`}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => {
                  const author = authors[article.authorSlug];

                  return (
                    <Card
                      key={article.id}
                      onClick={() => router.push(`/articles/${article.slug}`)}
                      className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                    >
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

                      <div className="p-6 flex flex-col h-[calc(100%-theme(spacing.56))]">
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

                        <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                          {article.excerpt}
                        </p>

                        <div className="pt-4 border-t">
                          {author && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/team/${article.authorSlug}`);
                              }}
                              className="text-sm font-medium hover:text-primary transition-colors text-left"
                            >
                              By {author.name}
                            </button>
                          )}
                        </div>

                        <div className="flex items-center text-primary font-semibold mt-4 group-hover:gap-2 transition-all">
                          Read More
                          <ChevronRight className="group-hover:translate-x-1 transition-transform" size={16} />
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Informed
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Subscribe to our newsletter for the latest legal insights and updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-slate-900"
                required
              />
              <Button type="submit" size="lg" variant="secondary">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-slate-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}