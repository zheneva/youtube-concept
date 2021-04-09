const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20, 
    breakpoints:{
        1900:{
            slidesPerView: 5
        },
        1600:{
            slidesPerView: 6
        },
        1300:{
            slidesPerView: 4
        },
        1100:{
            slidesPerView: 3
        },
        768:{
            slidesPerView: 2
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next',
        prevEl: '.channel-button-prev',
        
    },
});



const recomenedSwiper = new Swiper('.recomened-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints:{
        1600:{
            slidesPerView: 3
        },
        1100:{
            slidesPerView: 2
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.recomened-button-next',
        prevEl: '.recomened-button-prev',
        
    },
});

const recomenedChannelSwiper = new Swiper('.recomended-channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints:{
        1900:{
            slidesPerView: 5
        },
        1600:{
            slidesPerView: 6
        },
        1300:{
            slidesPerView: 4
        },
        1100:{
            slidesPerView: 3
        },
        768:{
            slidesPerView: 2
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.recomended-channel-button-next',
        prevEl: '.recomended-channel-button-prev',
        
    },
});

const searchBtn = document.querySelector('.mobile-search');
const mobilesearch = document.querySelector('.input_group');

console.log(searchBtn)
console.log(mobilesearch)

searchBtn.addEventListener('click', () =>{
    mobilesearch.classList.toggle('is-open');
});


if (document.documentElement.scrollWidth <= 640) {
    swiper.destroy();
    recomenedChannelSwiper.destroy();
    recomenedSwiper.destroy();
}