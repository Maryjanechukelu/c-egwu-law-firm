export const teamMembers = [
  {
    id: 'chidinma-egwu',
    slug: 'chidinma-egwu',
    name: 'Chidinma Egwu',
    role: 'Principal Counsel & Managing Partner',
    credentials: 'LL.M, B.L, LL.B',
    image: '/chidimma.png',
    shortBio: 'Advises businesses on corporate governance, M&A, IP, and tech law. Her practice spans technology, media, real estate, and professional services.',
    fullBio: `Chidinma Egwu is the Principal Counsel and Managing Partner of C. Egwu Law Firm. She brings extensive experience advising businesses across multiple sectors, with particular expertise in corporate law, technology transactions, and intellectual property.

Prior to founding the firm, Chidinma worked with leading Nigerian and international law firms, advising on complex corporate transactions, regulatory compliance, and commercial agreements. Her practice focuses on delivering commercially aware legal solutions that align with clients' business objectives.

Chidinma is currently pursuing her Master of Laws (LL.M) to deepen her expertise in international commercial law. She is known for her strategic thinking, attention to detail, and commitment to client service excellence.`,
    practiceAreas: [
      'Corporate & Commercial Law',
      'Technology & Media Law',
      'Intellectual Property',
      'Tax Law',
      'Mergers & Acquisitions',
      'Private Equity'
    ],
    education: [
      {
        degree: 'Master of Laws (LL.M)',
        institution: 'In View',
        year: 'Expected 2025'
      },
      {
        degree: 'Bachelor of Laws (LL.B)',
        institution: 'Nigerian University',
        year: '2018'
      },
      {
        degree: 'Barrister at Law (B.L)',
        institution: 'Nigerian Law School',
        year: '2019'
      }
    ],
    admissions: [
      'Supreme Court of Nigeria',
      'Nigerian Bar Association'
    ],
    languages: ['English', 'Igbo'],
    publications: [
      {
        title: 'Navigating NDPR Compliance for Nigerian Tech Startups',
        publication: 'Nigerian Law Review',
        year: '2023'
      },
      {
        title: 'Corporate Governance in Nigerian Private Companies',
        publication: 'Business Law Journal',
        year: '2022'
      }
    ],
    notable: [
      'Advised on Series A funding rounds exceeding $20M',
      'Managed 50+ corporate transactions',
      'Secured trademark protection for 30+ Nigerian brands'
    ],
    email: 'c.egwu@cegwulawfirm.com',
    linkedin: 'https://linkedin.com/in/chidinmaegwu',
    phone: '+234 XXX XXX XXXX'
  },
  {
    id: 'kingsley-ekwesianya',
    slug: 'kingsley-ekwesianya',
    name: 'Kingsley Chukwujekwu Ekwesianya',
    role: 'Counsel',
    credentials: 'B.L, LL.B (Hons)',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortBio: 'Versatile dispute resolution professional. Known for meticulous case preparation and clear advocacy in civil, commercial, and criminal litigation.',
    fullBio: `Kingsley Chukwujekwu Ekwesianya is a Counsel at C. Egwu Law Firm, specializing in dispute resolution and employment law. He brings a strategic and meticulous approach to litigation, consistently achieving favorable outcomes for clients in complex legal matters.

Kingsley has extensive experience representing clients before Nigerian courts at all levels, as well as in arbitration proceedings. His practice encompasses commercial disputes, employment litigation, real estate matters, and criminal defense.

Known for his thorough case preparation and persuasive advocacy, Kingsley has built a reputation for excellence in dispute resolution. He is committed to protecting clients' interests while seeking efficient and cost-effective solutions.`,
    practiceAreas: [
      'Commercial Litigation',
      'Employment & Labour Law',
      'Real Estate Disputes',
      'Contract Disputes',
      'Criminal Defense',
      'Arbitration'
    ],
    education: [
      {
        degree: 'Bachelor of Laws (LL.B) Honours',
        institution: 'Nigerian University',
        year: '2017'
      },
      {
        degree: 'Barrister at Law (B.L)',
        institution: 'Nigerian Law School',
        year: '2018'
      }
    ],
    admissions: [
      'Supreme Court of Nigeria',
      'Nigerian Bar Association'
    ],
    languages: ['English', 'Igbo'],
    publications: [
      {
        title: 'Employment Termination in Nigeria: Legal Framework and Best Practices',
        publication: 'Labour Law Digest',
        year: '2023'
      }
    ],
    notable: [
      'Successfully defended 30+ employment tribunal cases',
      'Achieved 85% success rate in commercial litigation',
      'Recovered over ₦100M in debt collection matters'
    ],
    email: 'k.ekwesianya@cegwulawfirm.com',
    linkedin: 'https://linkedin.com/in/kingsleyekwesianya',
    phone: '+234 XXX XXX XXXX'
  }
];

export const getTeamMemberBySlug = (slug) => {
  return teamMembers.find(member => member.slug === slug);
};