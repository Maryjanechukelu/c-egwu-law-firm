export const testimonials = [
  {
    id: 1,
    name: 'Adebayo Okonkwo',
    role: 'CEO',
    company: 'TechHub Nigeria',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'C. Egwu Law Firm provided exceptional support during our Series A funding round. Their commercial awareness and attention to detail helped us close the deal smoothly and establish strong governance structures for future growth.',
    rating: 5,
    category: 'Corporate Law'
  },
  {
    id: 2,
    name: 'Chiamaka Nwosu',
    role: 'Founder',
    company: 'Zara Fashion House',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'Working with Chidinma on our trademark portfolio was transformative. She helped us secure protection across multiple jurisdictions and developed a comprehensive brand protection strategy that has been invaluable as we expand internationally.',
    rating: 5,
    category: 'Intellectual Property'
  },
  {
    id: 3,
    name: 'David Okafor',
    role: 'Managing Director',
    company: 'DataFlow Systems',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'The firm guided us through complex NDPR compliance requirements with clarity and practical solutions. Their expertise in technology law is evident, and they made a potentially overwhelming process manageable and efficient.',
    rating: 5,
    category: 'Technology Law'
  },
  {
    id: 4,
    name: 'Funmilayo Adeleke',
    role: 'HR Director',
    company: 'Apex Financial Services',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'Kingsley handled a complex employment dispute for us with professionalism and strategic thinking. His meticulous preparation and clear advocacy resulted in a favorable outcome that protected our company\'s interests and reputation.',
    rating: 5,
    category: 'Employment Law'
  },
  {
    id: 5,
    name: 'Ibrahim Mohammed',
    role: 'Entrepreneur',
    company: 'GreenTech Innovations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'As a first-time founder, I needed someone who could explain complex legal concepts in plain terms. C. Egwu Law Firm did exactly that while setting up our company structure and shareholder agreements. Highly recommend for startups!',
    rating: 5,
    category: 'Corporate Law'
  },
  {
    id: 6,
    name: 'Ngozi Eze',
    role: 'Creative Director',
    company: 'Artisan Media Collective',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'The team helped us negotiate brand partnership agreements that protected our creative freedom while securing excellent commercial terms. Their understanding of the creative industry sets them apart from other law firms we\'ve worked with.',
    rating: 5,
    category: 'Technology & Media'
  },
  {
    id: 7,
    name: 'Oluwaseun Balogun',
    role: 'CFO',
    company: 'Heritage Investment Group',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'We engaged the firm for estate planning and wealth structuring services. The discrete, personalized approach and comprehensive solutions gave us confidence that our family\'s interests are well protected for future generations.',
    rating: 5,
    category: 'Private Wealth'
  },
  {
    id: 8,
    name: 'Blessing Onyekachi',
    role: 'Operations Manager',
    company: 'RetailHub Nigeria',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'The firm completely overhauled our HR policies and employment contracts. The new frameworks have significantly reduced workplace disputes and improved our overall HR operations. Their practical, business-focused approach made all the difference.',
    rating: 5,
    category: 'Employment Law'
  },
  {
    id: 9,
    name: 'Chinedu Obi',
    role: 'Founder & CEO',
    company: 'PayFlex Solutions',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'Navigating fintech regulations in Nigeria is challenging. C. Egwu Law Firm provided clear, actionable advice that helped us achieve regulatory compliance while maintaining our competitive edge. True partners in our growth journey.',
    rating: 5,
    category: 'Technology Law'
  },
  {
    id: 10,
    name: 'Amara Chukwuma',
    role: 'Director',
    company: 'Elegance Beauty Brand',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    content: 'From trademark registration to licensing agreements, the firm has been instrumental in building and protecting our brand. Their proactive approach to IP protection has saved us from potential costly disputes.',
    rating: 5,
    category: 'Intellectual Property'
  }
];

export const getTestimonialsByCategory = (category) => {
  if (!category) return testimonials;
  return testimonials.filter(testimonial => testimonial.category === category);
};

export const getFeaturedTestimonials = (limit = 6) => {
  return testimonials.slice(0, limit);
};