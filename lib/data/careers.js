/**
 * Career opportunities at C. Egwu Law Firm
 * Add new job postings to the careersData array
 */

export const careersData = [
    // Example job posting structure (currently empty - no open positions)
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
