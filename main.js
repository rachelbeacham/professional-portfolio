const tl = gsap.timeline({defaults: {ease: "power1.out"}})

tl.to('.text', {y: "0%", duration: 1, delay: .25})
tl.to(".intro", { y: "-100%", duration: 1, delay: 1.5 }, "-=1");
tl.fromTo(".heading", { opacity: 0 }, { opacity: 1, duration: 2, stagger: .75 });
tl.fromTo("i", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");
