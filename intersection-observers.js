const faders = document.querySelectorAll('.fader')
const easeFaders = document.querySelectorAll('.ease-fader')
console.log(faders)

const sectionOptions = { }

const sectionObserver = new IntersectionObserver(function(
    entries, sectionObserver
    ) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('translated')
            } else {
                entry.target.classList.remove('translated')
            }
        })

}, sectionOptions)

faders.forEach(fader => {
    sectionObserver.observe(fader)
})

easeFaders.forEach(easeFader => {
    sectionObserver.observe(easeFader)
})