type NewsItem = {
    urlToImage?: string;
    author?: string;
    title: string;
    publishedAt: string;
    description: string;
    url: string;
    source: {
        name: string;
        id: number;
    };
};

type AppView = {
    news: string;
};

export { NewsItem, AppView };
