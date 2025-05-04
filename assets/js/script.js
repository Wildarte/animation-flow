const btn_mobile_nav = document.querySelector('.btn_mobile_nav');
const dash_left = document.querySelector('.dash_left');
const over_nav = document.querySelector('.over_nav');

btn_mobile_nav.addEventListener('click', () => {
    dash_left.classList.add('open_nav');
    over_nav.classList.add('open_over_nav');
})

over_nav.addEventListener('click', () => {
    over_nav.classList.remove('open_over_nav');
    dash_left.classList.remove('open_nav');
})