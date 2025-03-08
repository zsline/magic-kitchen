
import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination } from 'swiper';

flsFunctions.isWebp();

// const swiper = new Swiper();

const header = document.querySelector('.header-page');
const headerHeight = header.offsetHeight;
const main = document.querySelector('.main');

if(header){
    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;
        if(scrollDistance >= 600 + headerHeight){
            header.classList.add('header--fixed');
            main.style.marginTop = `${headerHeight}px`;
        } else {
            header.classList.remove('header--fixed');
            main.style.marginTop = 0 + `px`;
        }         
    })
}



