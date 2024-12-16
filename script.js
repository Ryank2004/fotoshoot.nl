    function menuBtnFunction(menuBtn) {
    const navBar = document.querySelector(".nav_bar")
    const menu =document.querySelector('.menu')

    navBar.classList.toggle('active');
    menu.classList.toggle('show');
    menuBtn.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", (event) => {
    
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // Scroll-trigger animaties voor containers
    const containers = gsap.utils.toArray('.info_container');
    containers.forEach(container => {
        gsap.to(container, { 
            x: 600,
            scrollTrigger: {
                trigger: container,
                start: 'top center',
                end: '50% center',
                scrub: true,
                markers: true,
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


ScrollTrigger.normalizeScroll(true); // enable

// Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

