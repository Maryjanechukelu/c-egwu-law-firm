import React from 'react';
import { getPracticeAreaBySlug, getRelatedPracticeAreas, practiceAreas } from '@/lib/data/practiceAreas';
import PracticeAreaClient from './PracticeAreaClient';

// 1. Generate Static Params (Runs at build time)
export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

// 2. The Server Page Component
export default async function Page({ params }) {
  // Await params in Next.js 15/16
  const { slug } = await params;

  // Fetch data on the server
  const practiceArea = getPracticeAreaBySlug(slug);

  if (!practiceArea) return null;

  const relatedPractices = getRelatedPracticeAreas(practiceArea.slug, practiceArea.relatedPractices);

  // Pass data to the Client Component
  return <PracticeAreaClient practiceArea={practiceArea} relatedPractices={relatedPractices} />;
}