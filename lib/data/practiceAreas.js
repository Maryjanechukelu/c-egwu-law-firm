export const practiceAreas = [
  {
    id: 'corporate-law',
    slug: 'corporate-law',
    title: 'Corporate Law', 
    shortDescription: 'Supporting businesses through every stage of their lifecycle, from establishment to expansion.',
    icon: 'Briefcase',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    fullDescription: `Our Corporate Law practice supports businesses through every stage of their lifecycle, from 
establishment to expansion. We provide company secretarial services, corporate governance 
support, nominee directorship and nominee shareholding services, as well as registered 
business address services for regulatory compliance. Our team advises on private equity 
transactions, acquisitions, restructurings, business formation, tax, regulatory filings, and 
general corporate advisory. We help clients stay compliant, manage risk, and make informed 
decisions that support long-term stability and growth. `,
  },
  {
    id: 'technology-media-law',
    slug: 'technology-media-law',
    title: 'Technology & Media Law',
    shortDescription: 'Advising tech companies, digital platforms, and creatives on the legal complexities of the digital economy.',
    icon: 'Cpu',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    fullDescription: `We advise technology companies, digital platforms, creatives, production houses, agencies, 
and media businesses on the legal issues shaping today’s digital economy. Our work covers 
content rights, licensing, advertising and marketing compliance, platform agreements, data
related concerns, collaborations, brand partnerships, and technology contracts. Whether 
dealing with fast-moving regulatory environments or negotiating commercial arrangements, 
we provide practical guidance that allows clients to innovate and scale safely.`,
  },
  {
    id: 'intellectual-property',
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    shortDescription: 'Protecting creative and commercial assets through strategic IP management.',
    icon: 'Scale',
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    fullDescription: `Our Intellectual Property practice protects the creative and commercial assets that define our 
clients’ brands. We handle the registration of trademarks, patents, and copyrights; manage 
watch-list monitoring; and file oppositions as well as responses to oppositions. Beyond 
registration, we provide advisory on licensing, portfolio management, brand protection 
strategy, and enforcement. We help businesses and creatives secure their IP and defend it in 
competitive markets.`,
  },
  {
    id: 'employment-labour-law',
    slug: 'employment-labour-law',
    title: 'Employment & Labour Law',
    shortDescription: 'Strategic employment law advisory for progressive workplaces.',
    icon: 'Users',
    heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    fullDescription: `We advise employers and individuals on all aspects of labour and workplace relations. Our 
services include drafting and reviewing employment contracts, HR policies, consultancy 
agreements, and compliance documentation. We assist clients with disciplinary processes, 
workplace investigations, termination and exit management, employee rights, regulatory 
compliance, and dispute avoidance. Our approach is practical, clear, and aligned with current 
Nigerian labour standards.`,
  },
  {
    id: 'private-wealth',
    slug: 'private-wealth',
    title: 'Private Wealth',
    shortDescription: 'Discreet legal support for high-net-worth individuals and families.',
    icon: 'ShieldCheck',
    heroImage: 'https://images.unsplash.com/photo-1554224311-beee4f651465?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    fullDescription: `Our Private Wealth practice provides discreet and practical legal support to individuals, 
families, and high-net-worth clients. We advise on family law matters, marital agreements, 
custody issues, and divorce proceedings. We also prepare wills, trusts, powers of attorney, and 
estate planning structures that safeguard assets and ensure seamless succession. In addition, 
we guide clients on personal tax obligations and structuring. Our goal is to protect wealth, 
preserve family interests, and provide clarity during sensitive transitions.`,
  },
  
];

export const getPracticeAreaBySlug = (slug) => {
  return practiceAreas.find(area => area.slug === slug);
};

export const getRelatedPracticeAreas = (currentSlug, relatedSlugs) => {
  if (!relatedSlugs || !Array.isArray(relatedSlugs)) {
    return [];
  }
  return practiceAreas.filter(area => relatedSlugs.includes(area.slug));
};