'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Share2, Linkedin, Twitter, Facebook, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ArticleClient({ article, metadata, author }) {
  if (!metadata) return null;

   const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(metadata.title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Article Header */}
      <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
            <Link href="/articles" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-600 mb-8 transition-colors text-xs font-bold uppercase tracking-widest">
              <ArrowLeft size={14} /> Back to Journal
            </Link>
            
            <div className="mb-6 flex justify-center gap-4 text-sm font-bold uppercase tracking-widest text-amber-600">
                <span>{metadata.category}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              {metadata.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-slate-500 text-sm border-t border-slate-200 pt-8 inline-block mx-auto">
                <span className="flex items-center gap-2"><Calendar size={14}/> {new Date(metadata.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="flex items-center gap-2"><Clock size={14}/> {metadata.readTime}</span>
            </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="w-full h-[400px] md:h-[600px] bg-slate-200 relative">
          <img
            src={metadata.featuredImage}
            alt={metadata.title}
            className="w-full h-full object-cover"
          />
      </div>

      {/* Content Column */}
      <article className="container mx-auto px-4 md:px-8 max-w-3xl py-20">
         {/* Author Byline */}
         {author && (
            <div className="flex items-center gap-4 mb-12 pb-8 border-b border-slate-100">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img src={author.image} alt={author.name} className="w-full h-full object-cover"/>
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wide">By {author.name}</p>
                    <p className="text-xs text-slate-500">Legal Author</p>
                </div>
            </div>
         )}

         {/* Text Content */}
         <div className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:font-bold prose-p:font-light prose-p:leading-8 max-w-none">
            {article && article.content ? (
                article.content.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('## ')) return <h2 key={idx} className="text-3xl text-slate-900 mt-12 mb-6">{paragraph.replace('## ', '')}</h2>;
                    if (paragraph.startsWith('- ')) return <ul key={idx} className="list-disc pl-5 space-y-2 mb-6 text-slate-600">{paragraph.split('\n').map((item, i) => <li key={i}>{item.replace('- ', '')}</li>)}</ul>;
                    return <p key={idx} className="mb-6 text-slate-700">{paragraph.replace(/\*\*/g, '')}</p>;
                })
            ) : null}
         </div>

         {/* Share Footer */}
         <div className="mt-20 pt-10 border-t border-slate-200 flex justify-between items-center">
            <h4 className="font-serif font-bold text-slate-900">Share this article</h4>
            <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-500 hover:text-amber-600"onClick={() => handleShare('twitter')}><Twitter size={16}/></Button>
                <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-500 hover:text-amber-600"onClick={() => handleShare('linkedin')}><Linkedin size={16}/></Button>
                <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-500 hover:text-amber-600"onClick={() => handleShare('facebook')}><Facebook size={16}/></Button>
            </div>
         </div>
      </article>
    </div>
  );
}