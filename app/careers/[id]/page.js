import React from "react";
import { notFound } from "next/navigation";
import { careersData } from "@/lib/data/careers";
import { getJobById } from "@/lib/data/careers";
import JobDetailClient from "./JobDetailClient";

// Force static generation
export const dynamic = "error";
export const dynamicParams = false;

export function generateStaticParams() {
  return careersData.map((job) => ({
    id: job.id,
  }));
}

export default async function Page({ params }) {
  const { id } = await params;

  const job = getJobById(id);

  // Return 404 if job not found or is internal placeholder
  if (!job || job._isPlaceholder) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}
