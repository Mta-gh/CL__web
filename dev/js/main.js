// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';

function init() {
    // let tl = gsap.timeline();
    window.scrollTo(0, 0);
    
    barba.init({
        sync: true,
        transitions: [{
            name: 'general-transition',
            async leave(data) {
                window.scrollTo(0, 0);
                console.log('leave');
                
            },
            enter(data) {
                window.scrollTo(0, 0);
                updateTheme(data.next.container);
                initBindingSwipers();
                
                gsap.from('main', {
                    opacity: 0,
                    duration: .333,
                    filter: 'blur(6px)'
                })
                console.log('enter')
                
            },
            async afterEnter(data) {
            },
            async once(data) {
                gsap.from('.nav__macro', {
                    y: -66,
                    opacity: 0,
                    delay: .3,
                    duration: .333,
                })
                initBindingSwipers();
                console.log('once')
            },
        }
    ]
});

function updateTheme(container) {
    const colour = container.dataset.colour;
    document.querySelector('html').setAttribute('data-theme', colour)
}
}
init()


function initBindingSwipers() {
    let swipers = document.querySelectorAll('.swiper__binding');
    swipers.forEach(swiper => {
        console.log(swiper); 

        initSwipers(swiper);
    });
}

function initSwipers(i) {
    const swiper = new Swiper(i, {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

function initSwipers(i) {
    const swiperOne = new Swiper('.swiper__left', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiperTwo = new Swiper('.swiper__right', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    swiperOne.controller.control = swiperTwo;
    swiperTwo.controller.control = swiperOne;   
}