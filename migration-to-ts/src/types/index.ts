type NewsItem = {
    urlToImage?: string;
    author?: string;
    title: string;
    publishedAt: string;
    description: string;
    url: string;
    source: {
        name: string;
    };
};

export { NewsItem };
