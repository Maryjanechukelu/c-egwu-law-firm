export const teamMembers = [
  {
    id: 'chidinma-egwu',
    slug: 'chidinma-egwu',
    name: 'Chidinma Egwu',
    role: 'Principal Counsel & Managing Partner',
    credentials: 'LL.M, B.L, LL.B',
    image: '/chidimma.png',
    shortBio: 'Advises businesses on corporate governance, M&A, IP, and tech law. Her practice spans technology, media, real estate, and professional services.',
    fullBio: `Chidinma Egwu is the Principal Counsel at C. Egwu Law Firm. She advises businesses and 
              individuals on corporate governance, private equity and M&A, intellectual property, dispute 
              resolution, technology & media law, employment, tax, and private wealth matters. Her 
              practice spans key sectors including technology, media, transportation, real estate, consumer 
              goods, entertainment, and professional services. 
              Chidinma combines technical legal skill with commercial judgment to help growth-stage and 
              established organisations structure transactions, manage regulatory risk, protect assets, and 
              resolve complex disputes. She advises both local and international clients and delivers 
              practical, commercially oriented legal solutions tailored to each client’s objectives.`,
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
        institution: 'University of East London',
        year: '2025'
      },
      {
        degree: 'Bachelor of Laws (LL.B)',
        institution: 'Anambra State University',
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
    phone: '+234 707 167 4471'
  },
  {
    id: 'kingsley-ekwesianya',
    slug: 'kingsley-ekwesianya',
    name: 'Kingsley Chukwujekwu Ekwesianya',
    role: 'Counsel',
    credentials: 'B.L, LL.B (Hons)',
    image: '/kingsley.jpg',
    shortBio: 'Versatile dispute resolution professional. Known for meticulous case preparation and clear advocacy in civil, commercial, and criminal litigation.',
    fullBio: `Kingsley Chukwujekwu Ekwesianya is a versatile dispute resolution and commercial law 
              professional with a strong track record of delivering practical, strategic, and result-driven 
              legal solutions. His work cuts across civil and commercial litigation, criminal defence, labour 
              and industrial relations, real estate disputes, intellectual property protection, and general 
              corporate advisory. 
              Kingsley is known for his meticulous case preparation, clear advocacy, and ability to navigate 
              complex legal and procedural issues with confidence. He has represented clients at various 
              levels of trial courts and tribunals, advised businesses on compliance and risk exposure, and 
              supported commercial transactions through due diligence, contract review, and regulatory 
              engagement. 
              His practice also extends to emerging sectors such as maritime, medical, and entertainment 
              law reflecting his commitment to continuous learning and his ability to adapt to specialised 
              areas of modern legal practice.`,
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
        institution: 'Chuwkwuemeka Odumegwu Ojukwu University',
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
    email: 'kingsley.ekwesianya@cegwulawfirm.com',
    linkedin: 'https://linkedin.com/in/kingsleyekwesianya',
    phone: '+234 XXX XXX XXXX'
  }
];

export const getTeamMemberBySlug = (slug) => {
  return teamMembers.find(member => member.slug === slug);
};