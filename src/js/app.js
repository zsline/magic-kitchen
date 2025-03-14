
import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination } from 'swiper';

flsFunctions.isWebp();

// const swiper = new Swiper();

const header = document.querySelector('.header-page');
const headerMain = document.querySelector('.header');
const headerOpen = document.querySelector('.header__btn');
const headerClose = document.querySelector('.header__close');
const main = document.querySelector('.main');
const body = document.querySelector('body');

if(header){
const headerHeight = header.offsetHeight;
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

// Header Mobile ==============

headerOpen.addEventListener('click', () => {
    headerMain.classList.add('open');
})
headerClose.addEventListener('click', () => {
    headerMain.classList.remove('open');
})

// ===========================



