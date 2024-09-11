gsap.from(".line h1", {
    y: 150,
    stagger: .25,
    duration: .5,
    delay: .3,
})

function progressCounter() {
    const progressCount = document.querySelector("#progress h5")
    let count = 0;

    const counter = setInterval(function () {
        count++;
        if (count === 100) {
            clearInterval(counter)
        }
        progressCount.textContent = count
    }, 25)
}

progressCounter()