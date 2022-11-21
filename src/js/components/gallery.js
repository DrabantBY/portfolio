import birdsData from '../birdsData';
import { addGalleryItem } from '../helpers/addGalleyItem';

export const gallery = () => {
    document.body.querySelector('.wrapper').classList.add('gallery');

    const main  = document.body.querySelector('main');
    main.innerHTML = '<div class="main__container container"></div>';

    birdsData.forEach(birds => {
        birds.forEach(bird => {
            const galleryItem = addGalleryItem(bird);
            main.firstElementChild.append(galleryItem);
        })
    })
}