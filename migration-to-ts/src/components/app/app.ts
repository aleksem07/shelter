import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsItem } from '../../types/index';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sources = document.querySelector('.sources');
        if (sources instanceof HTMLElement) {
            sources.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data: { articles?: NewsItem[] } | null | undefined) =>
                    this.view.drawNews(data)
                )
            );
        }
        this.controller.getSources((data: { sources?: NewsItem['source'][] } | null | undefined) =>
            this.view.drawSources(data)
        );
    }
}

export default App;
