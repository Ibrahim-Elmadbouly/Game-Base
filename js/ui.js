import {getGames} from './homedata.js';
const gamesSection = document.querySelector('.games-section');
export function closeGameDetails(){
    document.getElementById('closeGameDetails').addEventListener('click', function () {
    const section = document.querySelector('.game-details-section');
    section.style = 'display: none;';
    gamesSection.style = 'display: block;';
});
}

export function getActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    let activeLink = '';
    navLinks.forEach(link => {
        if (link.classList.contains('active')) {
            activeLink = link.getAttribute('data-genre');
        }
    });
    return activeLink;
}

export function changeActiveNavLink() {
    document.addEventListener('DOMContentLoaded', function () {
        const navLinks = document.querySelectorAll('.nav-link');
        if (navLinks.length > 0) {
            navLinks[0].classList.add('active');
            getGames(navLinks[0].getAttribute('data-genre'));
        }
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navLinks.forEach(nav => nav.classList.remove('active'));
                
                this.classList.add('active');
                console.log(`Active genre: ${this.getAttribute('data-genre')}`);
                

                getGames(this.getAttribute('data-genre'));
            });
        });
    });
}

changeActiveNavLink();