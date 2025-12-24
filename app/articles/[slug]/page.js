// app/articles/[slug]/page.jsx - ASYNC CONTENT LOADING
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter, 
  Facebook, ChevronRight, Loader2, AlertCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getArticleBySlug, getFullArticle, getRelatedArticles } from '@/lib/data/articles';
import { authors } from '@/lib/data/articles/authors';

export default function ArticleDetailPage() {
  const params = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get metadata immediately (synchronous)
  const metadata = getArticleBySlug(params.slug);
  const author = metadata ? authors[metadata.authorSlug] : null;
  const relatedArticles = metadata ? getRelatedArticles(metadata.slug, 3) : [];

  // Load full content (asynchronous)
  useEffect(() => {
    if (!metadata) {
      setLoading(false);
      return;
    }

    const loadArticle = async () => {
      try {
        setLoading(true);
        const fullArticle = await getFullArticle(params.slug);
        setArticle(fullArticle);
        setError(null);
      } catch (err) {
        console.error('Error loading article:', err);
        setError('Failed to load article content. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [params.slug, metadata]);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform) => {
    if (!metadata) return;
    
    const urls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(metadata.title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  // Article not found
  if (!loading && !metadata) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-100 flex items-center justify-center">
            <AlertCircle size={40} className="text-slate-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or may have been moved.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/articles">
              <Button variant="outline">Browse Articles</Button>
            </Link>
            <Link href="/">
              <Button>Go Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
            <AlertCircle size={40} className="text-red-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Failed to Load Article</h1>
          <p className="text-muted-foreground mb-8">{error}</p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" onClick={() => window.location.reload()}>
              Try Again
            </Button>
            <Link href="/articles">
              <Button>Browse Articles</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Article Header - Show immediately with metadata */}
      <section className="relative pt-5 md:pt-24 pb-8 md:pb-12 bg-linear-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/articles" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Articles
            </Link>

            <div className="mb-6">
              <Badge className="mb-4">{metadata.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {metadata.title}
              </h1>
            </div>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {metadata.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 pb-8 border-b">
              {author && (
                <Link 
                  href={`/team/${metadata.authorSlug}`} 
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold overflow-hidden">
                    {author.image ? (
                      <img
                        src={author.image}
                        alt={author.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      author.name.split(' ').map(n => n[0]).join('')
                    )}
                  </div>
                  <div>
                    <p className="font-semibold">{author.name}</p>
                    <p className="text-sm text-muted-foreground">Author</p>
                  </div>
                </Link>
              )}

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>
                    {new Date(metadata.publishDate).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{metadata.readTime}</span>
                </div>
              </div>

              <div className="ml-auto flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Share:</span>
                <Button variant="outline" size="icon" onClick={() => handleShare('twitter')}>
                  <Twitter size={16} />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleShare('linkedin')}>
                  <Linkedin size={16} />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleShare('facebook')}>
                  <Facebook size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={metadata.featuredImage}
                alt={metadata.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content - Show loading state */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Loading article content...</p>
                </div>
              </div>
            ) : article && article.content ? (
              <>
                <article className="prose prose-lg max-w-none">
                  {article.content.split('\n\n').map((paragraph, idx) => {
                    // Handle headings
                    if (paragraph.startsWith('# ')) {
                      return (
                        <h1 key={idx} className="text-4xl font-bold mt-12 mb-6">
                          {paragraph.replace('# ', '')}
                        </h1>
                      );
                    }
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 key={idx} className="text-3xl font-bold mt-10 mb-4">
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={idx} className="text-2xl font-bold mt-8 mb-3">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    }

                    // Handle lists
                    if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                      const items = paragraph.split('\n').filter(item => item.trim());
                      return (
                        <ul key={idx} className="list-disc list-inside space-y-2 my-6">
                          {items.map((item, i) => (
                            <li key={i} className="text-muted-foreground leading-relaxed">
                              {item.replace(/^[*-]\s/, '')}
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    // Handle numbered lists
                    if (/^\d+\./.test(paragraph)) {
                      const items = paragraph.split('\n').filter(item => item.trim());
                      return (
                        <ol key={idx} className="list-decimal list-inside space-y-2 my-6">
                          {items.map((item, i) => (
                            <li key={i} className="text-muted-foreground leading-relaxed">
                              {item.replace(/^\d+\.\s/, '')}
                            </li>
                          ))}
                        </ol>
                      );
                    }

                    // Regular paragraphs with bold text support
                    if (paragraph.trim()) {
                      const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                      return (
                        <p key={idx} className="text-muted-foreground leading-relaxed mb-6">
                          {parts.map((part, i) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return <strong key={i}>{part.slice(2, -2)}</strong>;
                            }
                            return part;
                          })}
                        </p>
                      );
                    }

                    return null;
                  })}
                </article>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <h4 className="text-sm font-semibold mb-4">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {metadata.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <p className="text-muted-foreground text-center py-10">Content not available.</p>
            )}
          </div>
        </div>
      </section>

      {/* Author Bio */}
      {author && (
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">About the Author</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl shrink-0 overflow-hidden">
                    {author.image ? (
                      <img
                        src={author.image}
                        alt={author.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    ) : (
                      author.name.split(' ').map(n => n[0]).join('')
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{author.name}</h4>
                    <p className="text-muted-foreground mb-4">
                      {author.bio}
                    </p>
                    {author.expertise && author.expertise.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">Expertise:</p>
                        <div className="flex flex-wrap gap-2">
                          {author.expertise.map((exp, idx) => (
                            <Badge key={idx} variant="secondary">{exp}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    <Link href={`/team/${metadata.authorSlug}`}>
                      <Button variant="outline">
                        View Full Profile
                        <ChevronRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Link key={relatedArticle.id} href={`/articles/${relatedArticle.slug}`}>
                    <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                      <div className="aspect-video relative overflow-hidden bg-slate-100">
                        <img
                          src={relatedArticle.featuredImage}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge>{relatedArticle.category}</Badge>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>
                              {new Date(relatedArticle.publishDate).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{relatedArticle.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedArticle.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {relatedArticle.excerpt}
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
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Legal Advice?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our team is ready to provide expert guidance tailored to your specific needs.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}