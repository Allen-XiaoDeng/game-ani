gsap.registerPlugin(ScrollTrigger);

gsap.to(".logo", {
    y: 60,
    skewX: "-25deg",
    duration: 2,
});

gsap.to(".nav", {
    x: -120,
    duration: 2,
});

gsap.from(".date", {
    y: 120,
    opacity: 0,
    duration: 2,
});

gsap.from(".release", {
    x: 120,
    opacity: 0,
    duration: 2,
});
//第一个游戏角色
gsap.to(".first", {
    rotateX: "45deg",
    skewX: "-25deg",
    transformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: '.first',
        start: 'top 25%',
        end: 'top top',
        //markers: true,
        scrub: true,
    },
});
gsap.to(".one img", {
    x: -30,
    scale: 1.2,
    transformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: '.first',
        start: 'top 25%',
        end: 'top top',
        //markers: true,
        scrub: true,
    },
});
gsap.from(".one .time", {
    x: -50,
    opacity: 0,
    transformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: '.first',
        start: 'top 25%',
        end: 'top top',
        //markers: true,
        scrub: true,
    },
});
gsap.from(".one .des", {
    x: -100,
    y: -100,
    transformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: '.first',
        start: 'top 25%',
        end: 'top top',
        //markers: true,
        scrub: true,
    },
});
gsap.to(".one .btn", {
    opacity: 0,
    y: -50,
    transformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: '.first',
        start: 'top 25%',
        end: 'top top',
        //markers: true,
        scrub: true,
    },
});
//第二个游戏角色
gsap.to(".sec", {
    rotateX: "45deg",
    skewX: "-25deg",
    transformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: '.sec',
        start: 'top 40%',
        end: 'top 15%',
        //markers: true,
        scrub: true,
    },
});
gsap.to(".two img", {
    x: -30,
    scale: 1.2,
    transformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: '.sec',
        start: 'top 40%',
        end: 'top 15%',
        //markers: true,
        scrub: true,
    },
});
gsap.from(".two .time", {
    x: -50,
    opacity: 0,
    transformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: '.sec',
        start: 'top 40%',
        end: 'top 15%',
        //markers: true,
        scrub: true,
    },
});
gsap.from(".two .des", {
    x: -100,
    y: -100,
    transformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: '.sec',
        start: 'top 40%',
        end: 'top 15%',
        //markers: true,
        scrub: true,
    },
});
gsap.to(".two .btn", {
    opacity: 0,
    y: -50,
    transformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: '.sec',
        start: 'top 40%',
        end: 'top 15%',
        //markers: true,
        scrub: true,
    },
});

//第三个游戏角色
gsap.to(".third", {
    rotateX: "45deg",
    skewX: "-25deg",
    transformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: '.third',
        start: 'top 50%',
        end: 'top 25%',
        //markers: true,
        scrub: true,
    },
});
gsap.to(".three img", {
    x: -30,
    scale: 1.2,
    transformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: '.third',
        start: 'top 50%',
        end: 'top 25%',
        //markers: true,
        scrub: true,
    },
});
gsap.from(".three .time", {
    x: -50,
    opacity: 0,
    transformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: '.third',
        start: 'top 50%',
        end: 'top 25%',
        //markers: true,
        scrub: true,
    },
});
gsap.from(".three .des", {
    x: -100,
    y: -100,
    transformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: '.third',
        start: 'top 50%',
        end: 'top 25%',
        //markers: true,
        scrub: true,
    },
});
gsap.to(".three .btn", {
    opacity: 0,
    y: -50,
    transformOrigin: "bottom",
    duration: 2,
    scrollTrigger: {
        trigger: '.third',
        start: 'top 50%',
        end: 'top 25%',
        //markers: true,
        scrub: true,
    },
});