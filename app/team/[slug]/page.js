import React from 'react';
import { getTeamMemberBySlug, teamMembers } from '@/lib/data/team';
import TeamMemberClient from './TeamMemberClient';

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) return null;

  return <TeamMemberClient member={member} />;
}