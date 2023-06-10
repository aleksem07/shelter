import './sources.css';

class Sources {
    draw(data: { name: string; id: number }[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        if (sourceItemTemp) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
                const sourceItemName = sourceClone.querySelector('.source__item-name');
                const sourceItem = sourceClone.querySelector('.source__item');

                if (sourceItemName) {
                    sourceItemName.textContent = item.name;
                }

                if (sourceItem) {
                    sourceItem.setAttribute('data-source-id', item.id.toString());
                }
                fragment.append(sourceClone);
            });
        }

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;
