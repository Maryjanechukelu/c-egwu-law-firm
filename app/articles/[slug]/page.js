'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter, Facebook, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getArticleBySlug, getRelatedArticles } from '@/lib/data/articles';

export default function ArticleDetailPage() {
    const params = useParams();
    const article = getArticleBySlug(params.slug);

    if (!article) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                    <Link href="/articles">
                        <Button>Back to Articles</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const relatedArticles = getRelatedArticles(article.slug, article.relatedArticles, 3);
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    const handleShare = (platform) => {
        const urls = {
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        };

        if (urls[platform]) {
            window.open(urls[platform], '_blank', 'width=600,height=400');
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Article Header */}
            <section className="relative pt-24 pb-12 bg-linear-to-br from-primary/10 via-background to-primary/5">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
                            <ArrowLeft size={20} />
                            Back to Articles
                        </Link>

                        <div classname="mb-6 flex flex-col items-center gap-4">
                            <Badge className="mb-4">{article.category}</Badge>

                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                {article.title}
                            </h1>
                        </div>

                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            {article.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 pb-8 border-b">
                            <Link href={`/team/${article.authorSlug}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    {article.authorImg ? (
                                        <img
                                            src={article.authorImg}
                                            alt={article.author}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    ) : (
                                        article.author.split(' ').map(n => n[0]).join('')
                                    )}
                                </div>
                                <div>
                                    <p className="font-semibold">{article.author}</p>
                                    <p className="text-sm text-muted-foreground">Author</p>
                                </div>
                            </Link>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span>{new Date(article.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} />
                                    <span>{article.readTime}</span>
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
                                src={article.featuredImage}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <article className="prose prose-lg max-w-none">
                            {article.content.split('\n\n').map((paragraph, idx) => {
                                // Handle headings
                                if (paragraph.startsWith('# ')) {
                                    return <h1 key={idx} className="text-4xl font-bold mt-12 mb-6">{paragraph.replace('# ', '')}</h1>;
                                }
                                if (paragraph.startsWith('## ')) {
                                    return <h2 key={idx} className="text-3xl font-bold mt-10 mb-4">{paragraph.replace('## ', '')}</h2>;
                                }
                                if (paragraph.startsWith('### ')) {
                                    return <h3 key={idx} className="text-2xl font-bold mt-8 mb-3">{paragraph.replace('### ', '')}</h3>;
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

                                // Regular paragraphs
                                if (paragraph.trim()) {
                                    return <p key={idx} className="text-muted-foreground leading-relaxed mb-6">{paragraph}</p>;
                                }

                                return null;
                            })}
                        </article>

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t">
                            <h4 className="text-sm font-semibold mb-4">Tags:</h4>
                            <div className="flex flex-wrap gap-2">
                                {article.tags.map((tag, idx) => (
                                    <Badge key={idx} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Author Bio */}
            <section className="py-12 bg-slate-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-8">
                            <h3 className="text-2xl font-bold mb-6">About the Author</h3>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl shrink-0">
                                    {article.authorImg ? (
                                        <img
                                            src={article.authorImg}
                                            alt={article.author}
                                            className="w-24 h-24 rounded-full object-cover"
                                        />
                                    ) : (
                                        article.author.split(' ').map(n => n[0]).join('')
                                    )}
                                </div>
                                <div className="grow">
                                    <h4 className="text-xl font-bold mb-2">{article.author}</h4>
                                    <p className="text-muted-foreground mb-4">
                                        {article.author} is a legal expert at C. Egwu Law Firm, specializing in {article.category.toLowerCase()} and providing strategic counsel to businesses and individuals.
                                    </p>
                                    <Link href={`/team/${article.authorSlug}`}>
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
                                                        <span>{new Date(relatedArticle.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
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
                    <Button size="lg" variant="secondary">
                        Schedule a Consultation
                    </Button>
                </div>
            </section>
        </div>
    );
}