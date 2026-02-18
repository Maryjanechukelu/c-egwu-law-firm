export const testimonials = [
  {
    id: 1,
    name: 'Agunwa Agros',
    company: 'Agunwa Agros',
    image: '/agunwa.jpg',
    content: 'C. Egwu Law Firm handled our company incorporation with an exceptional level of attention to detail. Every requirement was carefully reviewed, the process was properly structured, and we were kept informed at each stage. The experience was efficient, professional and completely stress-free.',
  },
  {
    id: 2,
    name: 'Witty Company Limited',
    company: 'Witty Company Limited',
    image: '/witty.jpg',
    content: 'C. Egwu Law Firm provided business-oriented legal support on various transactions including our restructuring, company incorporation, trademark registrations and multiple real estate transactions. The team demonstrated excellent turnaround time, practical commercial advice and strong collaboration with our internal team.We particularly valued the firm’s professionalism, clear communication and the synergy throughout the engagement.',
  },
  {
    id: 3,
    name: 'Blessed Bembem Steel',
    company: 'Blessed Bembem Steel',
    image: '/bembem.jpg',
    content: 'C. Egwu Law Firm has supported our business from incorporation through several real estate transactions and multiple regulatory filings.The quality of service was consistently high, and the team delivered clear, well- structured and dependable legal support at every stage.We were particularly impressed by the firm’s professionalism,responsiveness to our enquiries and the overall standard of legal work provided.',
  },
  {
    id: 4,
    name: 'Rosella',
    company: 'Rosella',
    image: '/rosella.jpg',
    content: 'C. Egwu Law Firm advised us on a debt restructuring transaction and demonstrated a very high level of professionalism throughout the engagement. The advice was clear, well- structured and commercially practical, and the team handled the process with diligence and strong attention to detail. We were confident in the quality of guidance received at every stage.',
  },
  {
    id: 5,
    name: 'The Fee Institute',
    company: 'The Fee Institute',
    image: '/fee.jpg',
    content: 'C. Egwu Law Firm advised us on the incorporation of our company limited by guarantee and guided us through the entire regulatory process with clarity and professionalism.The team simplified what would ordinarily be a complex structure and ensured all compliance requirements were properly addressed. We valued the firm’s responsiveness, sound judgment and the overall quality of support provided throughout the engagement.',
  },
];

export const getTestimonialsByCategory = (category) => {
  if (!category) return testimonials;
  return testimonials.filter(testimonial => testimonial.category === category);
};

export const getFeaturedTestimonials = (limit = 6) => {
  return testimonials.slice(0, limit);
};