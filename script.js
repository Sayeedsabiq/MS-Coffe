//toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// const aboutWe = document.querySelector('.about');

// ketika hamburger menu di klik

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
// document.querySelector('#hamburger-menu').onclick = () => {
//     aboutWe.classList.toggle('active');
// };
// menghilangkan hamburger menu dari area yg kita pencet
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active'); // tanda ! dihamburger digunakan agar tidak menimpa
    };
});
//  contains digunakan untuk memer…