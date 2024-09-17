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

function textSwipeEffect() {
    let frames = document.querySelectorAll(".frame")

    frames.forEach(function (frame) {
        frame.addEventListener("mousemove", function () {
            gsap.to(frame.children, {
                y: "-1.6vw",
                duration: .55,
            })
        })

        frame.addEventListener("mouseleave", function () {
            gsap.to(frame.children, {
                y: 0,
                duration: .55,
            })
        })

    })
}

locoScroll()
cursor()
progressCounter()
preloaderAnimations()
magnetEffect()
textSwipeEffect()