import News from './news/news';
import Sources from './sources/sources';
import { NewsItem } from '../../types/index';

export class AppView {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: { articles?: NewsItem[] } | null | undefined) {
        const values: NewsItem[] = data?.articles || [];
        this.news.draw(values);
    }

    drawSources(data: { sources?: NewsItem['source'][] } | null | undefined) {
        const values: NewsItem['source'][] = data?.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;
