# Careers System Documentation

The careers system follows the same pattern as the articles system, with job data managed separately from the page components for easy updates.

## File Structure

```
lib/data/
  └── careers.js          # Job postings data and helper functions

app/careers/
  ├── page.js             # Main careers listing page
  └── [id]/
      └── page.js         # Individual job detail page
```

## How to Add a New Job Opening

1. Open `lib/data/careers.js`
2. Add a new job object to the `careersData` array following this structure:

```javascript
export const careersData = [
    {
        id: 'associate-lawyer-2024',              // Unique identifier (use lowercase-with-dashes)
        title: 'Associate Lawyer',                // Job title
        department: 'Corporate Law',              // Department (e.g., Corporate Law, Litigation, Tax Law)
        location: 'Lagos, Nigeria',               // Job location
        type: 'Full-time',                        // Employment type (Full-time, Part-time, Contract)
        experience: '2-4 years',                  // Required experience level
        postedDate: '2024-01-15',                 // Date posted (YYYY-MM-DD format)
        description: 'We are seeking a talented associate lawyer with expertise in corporate transactions...',
        
        responsibilities: [
            'Draft and review commercial contracts',
            'Provide legal advice to clients on corporate matters',
            'Conduct legal research and due diligence',
            'Represent clients in negotiations'
        ],
        
        qualifications: [
            'LLB and BL from recognized institutions',
            '2-4 years of experience in corporate law',
            'Excellent communication and analytical skills',
            'Proficiency in legal research tools'
        ],
        
        benefits: [
            'Competitive salary and performance bonuses',
            'Professional development and training opportunities',
            'Health insurance coverage',
            'Flexible work arrangements'
        ],
        
        applicationEmail: 'careers@cegwulawfirm.com'  // Where applications should be sent
    },
    // Add more jobs here...
];
```

## Job Object Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the job |
| `title` | string | Yes | Job title |
| `department` | string | Yes | Department/practice area |
| `location` | string | Yes | Job location |
| `type` | string | Yes | Employment type |
| `experience` | string | Yes | Required experience level |
| `postedDate` | string | Yes | Date posted (YYYY-MM-DD) |
| `description` | string | Yes | Brief job description |
| `responsibilities` | array | Optional | List of key responsibilities |
| `qualifications` | array | Optional | List of qualifications/requirements |
| `benefits` | array | Optional | List of benefits offered |
| `applicationEmail` | string | Yes | Email for receiving applications |

## Removing a Job Opening

Simply remove the job object from the `careersData` array in `lib/data/careers.js`.

## Available Helper Functions

- `getAvailablePositions()` - Returns all job postings
- `getJobById(id)` - Returns a specific job by ID
- `getJobsByDepartment(department)` - Returns jobs filtered by department
- `getDepartments()` - Returns all unique departments
- `hasOpenPositions()` - Returns true if there are any open positions

## Testing Your Changes

After adding or removing jobs:
1. Save the `careers.js` file
2. Visit `/careers` to see the updated listings
3. Click on individual jobs to view their detail pages

## Example: Adding Multiple Jobs

```javascript
export const careersData = [
    {
        id: 'senior-associate-litigation',
        title: 'Senior Associate - Litigation',
        department: 'Dispute Resolution',
        location: 'Lagos, Nigeria',
        type: 'Full-time',
        experience: '5+ years',
        postedDate: '2024-02-01',
        description: 'Seeking an experienced litigation lawyer...',
        responsibilities: [...],
        qualifications: [...],
        benefits: [...],
        applicationEmail: 'careers@cegwulawfirm.com'
    },
    {
        id: 'legal-intern-2024',
        title: 'Legal Intern',
        department: 'Corporate Law',
        location: 'Lagos, Nigeria',
        type: 'Internship',
        experience: 'Fresh graduate',
        postedDate: '2024-02-15',
        description: 'Internship opportunity for recent law graduates...',
        responsibilities: [...],
        qualifications: [...],
        benefits: [...],
        applicationEmail: 'careers@cegwulawfirm.com'
    }
];
```

## Notes

- When `careersData` is empty (no open positions), the page automatically shows a "No Open Positions" message
- Jobs are displayed in the order they appear in the array
- Department filters are automatically generated from the jobs in the array
- All dates should use YYYY-MM-DD format for consistency
- Keep job IDs unique and descriptive (lowercase with dashes)
