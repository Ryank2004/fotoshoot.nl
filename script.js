    function menuBtnFunction(menuBtn) {
    const navBar = document.querySelector(".nav_bar")
    const menu =document.querySelector('.menu')

    navBar.classList.toggle('active');
    menu.classList.toggle('show');
    menuBtn.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", (event) => {
    
    gsap.registerPlugin(ScrollTrigger, TextPlugin);


    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis();

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);

    // Scroll-trigger animaties voor containers
    const containers = gsap.utils.toArray('.info_container');
    containers.forEach(container => {
        gsap.to(container, { 
            x: 600,
            scrollTrigger: {
                trigger: container,
                start: '-30% center',
                end: '50% center',
                scrub: 0.8,
                // markers: true,
            }
        });
    });

    // Splits de hero_title in lijnen
    const myTitle = new SplitType('.hero_title', { types: 'lines' });
    const myText = new SplitType('.hero_text', {types: 'lines'});

    // Voeg wrappers toe rond elke lijn
    myTitle.lines.forEach(line => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('line_wrapper_title');
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
    });

    myText.lines.forEach(line => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('line_wrapper_text');
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
    });

    // Animeer lijnen met GSAP
    gsap.fromTo(
        '.line',
        { y: 115 }, // Beginpositie
        { 
            y: 0, // Eindpositie
            stagger: 0.1, // Beetje vertraging tussen regels
            delay: 0.1, // Wacht even voordat de animatie start
            duration: 0.1, // Duur van de animatie
            ease: 'power3.out' // Soepele animatie
        }
    );
});
