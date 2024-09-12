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


progressCounter()
preloaderAnimations()