import './news.css';
import { NewsItem } from '../../../types/index';

class News {
    draw(data: NewsItem[]) {
        const news = data.length >= 10 ? data.filter((_item, idx: number) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');
        if (newsItemTemp instanceof HTMLTemplateElement) {
            news.forEach((item, idx: number) => {
                const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
                if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');
                const metaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
                metaPhoto.style.backgroundImage = `url(${item.urlToImage || ''})`;
                const metaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
                metaAuthor.textContent = item.author || item.source.name;
                const metaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
                metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                const metaDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
                metaDescriptionTitle.textContent = item.title;
                const metaDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLElement;
                metaDescriptionSource.textContent = item.source.name;
                const metaDescriptionContent = newsClone.querySelector('.news__description-content') as HTMLElement;
                metaDescriptionContent.textContent = item.description;
                const readMoreLink = newsClone.querySelector('.news__read-more a') as HTMLAnchorElement;
                readMoreLink.setAttribute('href', item.url);
                fragment.append(newsClone);
            });
        }

        const newsContainer = document.querySelector('.news') as HTMLElement;
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
