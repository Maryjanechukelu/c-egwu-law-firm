/**
 * Career opportunities at C. Egwu Law Firm
 * Add new job postings to the careersData array
 */

export const careersData = [
  // TEMPORARY: Build placeholder - DO NOT REMOVE until adding first real job
  // This is filtered out on the careers listing page
  {
    id: "_build_placeholder",
    title: "_placeholder",
    department: "_internal",
    location: "_internal",
    type: "_internal",
    experience: "_internal",
    postedDate: "2024-01-01",
    description: "Internal placeholder for build purposes only",
    responsibilities: [],
    qualifications: [],
    benefits: [],
    applicationEmail: "egwuchidinma6@gmail.com",
    _isPlaceholder: true, // Flag to identify and filter this out
  },

  // When adding real jobs, replace the placeholder above with:
  // {
  //     id: 'associate-lawyer-2024',
  //     title: 'Associate Lawyer',
  //     department: 'Corporate Law',
  //     location: 'Lagos, Nigeria',
  //     type: 'Full-time',
  //     experience: '2-4 years',
  //     postedDate: '2024-01-15',
  //     description: 'We are seeking a talented associate lawyer...',
  //     responsibilities: [
  //         'Draft and review commercial contracts',
  //         'Provide legal advice to clients',
  //         'Conduct legal research'
  //     ],
  //     qualifications: [
  //         'LLB and BL from recognized institutions',
  //         '2-4 years of experience in corporate law',
  //         'Excellent communication skills'
  //     ],
  //     benefits: [
  //         'Competitive salary',
  //         'Professional development opportunities',
  //         'Health insurance'
  //     ],
  //     applicationEmail: 'careers@cegwulawfirm.com'
  // }
];

/**
 * Get all available job positions (excluding internal placeholders)
 */
export const getAvailablePositions = () => {
  return careersData.filter((job) => !job._isPlaceholder);
};

/**
 * Get job by ID
 */
export const getJobById = (id) => {
  return careersData.find((job) => job.id === id);
};

/**
 * Get jobs by department (excluding internal placeholders)
 */
export const getJobsByDepartment = (department) => {
  return careersData.filter(
    (job) => !job._isPlaceholder && job.department === department,
  );
};

/**
 * Get all unique departments (excluding internal placeholders)
 */
export const getDepartments = () => {
  const realJobs = careersData.filter((job) => !job._isPlaceholder);
  return [...new Set(realJobs.map((job) => job.department))];
};

/**
 * Check if there are any open positions (excluding internal placeholders)
 */
export const hasOpenPositions = () => {
  return careersData.some((job) => !job._isPlaceholder);
};
