import { getImage } from "../helpers/getImage";
import logo from '../../img/logo.png';

export const headerQuiz = () => {

    const wrapper = document.body.querySelector('.wrapper');
    const header = document.createElement('header');
    wrapper.append(header);

    header.className = 'header header-quiz';
    
    header.innerHTML = `<div class="container header-quiz__container">
                            <div class="header-quiz__top">
                                <figure class="logo header-quiz__logo"></figure>
                                <div class="score header-quiz__score">Score:&nbsp;0</div>
                            </div>
                            <ul class="list header-quiz__list">
                                <li class="item header-quiz__item active">разминка</li>
                                <li class="item header-quiz__item">воробьиные</li>
                                <li class="item header-quiz__item">лесные&nbsp;птицы</li>
                                <li class="item header-quiz__item">певчие&nbsp;птицы</li>
                                <li class="item header-quiz__item">хищные&nbsp;птицы</li>
                                <li class="item header-quiz__item">морские&nbsp;птицы</li>
                            </ul> 
                        </div>`;

    const target = header.querySelector('.logo');

    getImage(logo, 'logo', target);
}