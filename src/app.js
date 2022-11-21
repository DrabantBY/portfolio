import { bodyQuiz } from "./js/components/bodyQuiz";
import { gallery } from "./js/components/gallery";
import { removeActiveFromItem } from './js/helpers/removeActiveFromItem';
import { addGreetingMain } from "./js/helpers/addGreetingMain";

const app = () => {

    const linkMain = document.getElementById('main');
    const linkGallery = document.getElementById('gallery');
    const linkGreeting = document.getElementById('greeting');
    const toggleLeafs = document.getElementById('toggle');

    linkGreeting.onclick = () => {
        removeActiveFromItem();
        document.body.querySelector('.wrapper').classList.remove('gallery');
        linkGreeting.parentElement.classList.add('active');
        addGreetingMain();
    }

    linkMain.onclick = () => {
        document.body.querySelector('.wrapper').classList.remove('gallery');
        bodyQuiz();
    }

    linkGallery.onclick = () => {
        removeActiveFromItem();
        linkGallery.parentElement.classList.add('active');
        gallery();
    }

    toggleLeafs.onchange = () => {
        document.body.querySelector('.leafs').classList.toggle('disabled');
        localStorage.setItem('toggle', JSON.stringify(toggleLeafs.checked));
    }

    document.addEventListener("DOMContentLoaded", () => {

        const isToggle = localStorage.getItem('toggle');
        
        if(isToggle) {

            toggleLeafs.checked = JSON.parse(isToggle);

            if(JSON.parse(isToggle)) {

                document.body.querySelector('.leafs').classList.remove('disabled');
            } else {

                document.body.querySelector('.leafs').classList.add('disabled');
            } 
        } 
    });
}

export default app;