/**
 * Career opportunities at C. Egwu Law Firm
 * Add new job postings to the careersData array
 */

export const careersData = [
    // Placeholder to allow build to pass - Remove this when adding real jobs
    // This won't show on the careers page due to hasOpenPositions() logic
    // {
    //     id: 'placeholder',
    //     title: 'No Positions Available',
    //     department: 'General',
    //     location: 'N/A',
    //     type: 'N/A',
    //     experience: 'N/A',
    //     postedDate: '2024-01-01',
    //     description: 'No positions currently available.',
    //     responsibilities: [],
    //     qualifications: [],
    //     benefits: [],
    //     applicationEmail: 'egwuchidinma6@gmail.com'
    // }

    // Example job posting structure:
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
 * Get all available job positions
 */
export const getAvailablePositions = () => {
    return careersData;
};

/**
 * Get job by ID
 */
export const getJobById = (id) => {
    return careersData.find(job => job.id === id);
};

/**
 * Get jobs by department
 */
export const getJobsByDepartment = (department) => {
    return careersData.filter(job => job.department === department);
};

/**
 * Get all unique departments
 */
export const getDepartments = () => {
    return [...new Set(careersData.map(job => job.department))];
};

/**
 * Check if there are any open positions
 */
export const hasOpenPositions = () => {
    return careersData.length > 0;
};
