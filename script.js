function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".data-scroll-container"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".data-scroll-container", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".data-scroll-container").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

function progressCounter() {
    const progressCount = document.querySelector("#progress h5")
    let count = 0;

    const counter = setInterval(function () {
        count++;
        if (count === 100) {
            clearInterval(counter)
        }
        progressCount.textContent = count
    }, 30)
}

function preloaderAnimations() {
    gsap.from(".line h1", {
        y: 150,
        stagger: .25,
        duration: .5,
        delay: .3,
    })

    gsap.from("#progress", {
        opacity: 0,
        duration: .8,
        delay: .6,
    })

    gsap.from("#wait-message p", {
        opacity: 0,
        duration: .4,
        delay: 1.2,
    })

    gsap.to("#line1 #progress", {
        opacity: 0,
        duration: .5,
        delay: 3.2,
    })

    gsap.to("#line1 h1", {
        opacity: 0,
        duration: .9,
        delay: 3.2,
    })

    gsap.to("#line3 h1 span", {
        opacity: 0,
        duration: .9,
        delay: 3.2,
    })

    gsap.to("#wait-message p", {
        opacity: 0,
        duration: .9,
        delay: 3.2,
    })

    gsap.to("#line2 h1", {
        opacity: 0,
        duration: .8,
        delay: 3.4,
    })

    gsap.to("#line3 h1", {
        opacity: 0,
        duration: .8,
        delay: 3.4,
    })

    gsap.to("#preloader", {
        y: -1600,
        duration: 1.45,
        delay: 4.5,
    })

    gsap.to("#preloader", {
        display: "none",
        delay: 4.65
    })

    gsap.from(".hero-text h1", {
        y: 150,
        duration: .6,
        stagger: .25,
        delay: 4.35,
    })

    gsap.to(".hero-text", {
        overflow: "visible",
        delay: 5.7
    })
}

function cursor() {
    document.documentElement.style.cursor = "none" // Removes default cursor

    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            x: dets.clientX,
            y: dets.clientY,
            ease: "expo.out"
        })
    })

    cursorAnimation()
}

function cursorAnimation() {
    function scaleCursorOnHover(elem) {
        const elements = document.querySelectorAll(elem)
        elements.forEach(element => {
            element.addEventListener("mousemove", function () {
                // console.debug("hovered cursor")
                gsap.to("#cursor", {
                    scale: 1.4,
                    duration: .3,
                    ease: "sine"
                })
            })

            element.addEventListener("mouseleave", function () {
                gsap.to("#cursor", {
                    scale: 1,
                    duration: .3,
                    ease: "sine"
                })
            })
        });
    }

    scaleCursorOnHover("#menu")
    scaleCursorOnHover("#nav-part2 h4")
}

function magnetEffect() {
    Shery.makeMagnet("#menu", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: .4,
    });

    Shery.makeMagnet("#nav-part2 h4", {
        ease: "sine",
        duration: .3,
    });
}

function textSwipeEffect(textContainer, swipeOffsetY, swipeDuration, hoverElementSelector = null) {
    let frames = document.querySelectorAll(textContainer)

    frames.forEach(function (frame, index) {

        let hoverElement = hoverElementSelector ? document.querySelectorAll(hoverElementSelector)[index] : frame

        hoverElement.addEventListener("mousemove", function () {
            gsap.to(frame.children, {
                y: swipeOffsetY,
                duration: swipeDuration,
            })
        })

        hoverElement.addEventListener("mouseleave", function () {
            gsap.to(frame.children, {
                y: 0,
                duration: swipeDuration,
            })
        })
    })
}

function gooeyEffect() {
    Shery.imageEffect(".project-image", {
        style: 6,
        gooey: true,
        config: { "noiseDetail": { "value": 9.16, "range": [0, 100] }, "distortionAmount": { "value": 3.74, "range": [0, 10] }, "scale": { "value": 59.54, "range": [0, 100] }, "speed": { "value": 0.51, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7272749691738595 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.53, "range": [0, 10] }, "metaball": { "value": 0.47, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.34, "range": [0, 2] }, "noise_scale": { "value": 11.45, "range": [0, 100] } }
    });
}

locoScroll()
cursor()
progressCounter()
preloaderAnimations()
magnetEffect()
textSwipeEffect(".frame", "-1.6vw", 0.55)
textSwipeEffect(".header-frame", "-2.1vw", 0.45, ".project-item")
gooeyEffect()