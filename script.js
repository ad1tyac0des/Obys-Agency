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
        duration: 1,
        delay: 4.3,
    })

    gsap.to("#preloader", {
        display: "none",
        delay: 4.4
    })
}

function cursor(){
    document.documentElement.style.cursor = "none" // Removes default cursor

    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            x: dets.clientX,
            y: dets.clientY,
            transform: `translate(-50%, -50%)`,
            ease: "expo.out"
        })
    })
}

cursor()
progressCounter()
preloaderAnimations()

Shery.makeMagnet("#menu", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .4,
});

Shery.makeMagnet("#nav-part2 h4", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .4,
});