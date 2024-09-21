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