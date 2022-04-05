gsap.registerPlugin(ScrollTrigger); // register the plugin

gsap.to("#logo", {
    y: 60,
    skewX: "-25deg",
    duration: 2,
});

gsap.to(".nav", {
    x: -120,
    duration: 2,
})
gsap.from(".date", {
    y: 120,
    opacity: 0,
    duration: 2,
})
gsap.from(".release", {
    x: 120,
    opacity: 0,
    duration: 2,
})
gsap.to(".first", {
    rotateX: "45deg",
    skewX: '-25deg',
    TransformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: ".first",
        start: "top 25%",
        end: "top top",
        markers: true,
        scrub: true,
    }
})
