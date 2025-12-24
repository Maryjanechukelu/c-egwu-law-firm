/**
 * Dynamically import article content by ID
 * This keeps each article in its own file
 */
export const getArticleContent = async (articleId) => {
    try {
        // Dynamic import based on article ID
        const module = await import(`./${articleId}.js`);
        return module.content;
    } catch (error) {
        console.error(`Failed to load content for article: ${articleId}`, error);
        return null;
    }
};

// For SSR/Static generation, you can also export all at once
export const loadAllContent = async () => {
    const contentMap = {};

    const articleIds = [
        'ndpr-compliance-2024',
        'corporate-governance-startups',
        'employment-contracts-guide',
        'tech-contracts-guide',
        'ip-protection-guide',
        'workplace-investigations-guide'
    ];

    await Promise.all(
        articleIds.map(async (id) => {
            const module = await import(`./${id}.js`);
            contentMap[id] = module.content;
        })
    );

    return contentMap;
};