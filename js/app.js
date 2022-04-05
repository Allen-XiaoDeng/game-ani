
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