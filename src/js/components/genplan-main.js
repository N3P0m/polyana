const genplan = document.querySelector('.genplan')
const genplanHouse = genplan.querySelectorAll('.genplan__house')
const houseActiveClass = 'genplan__house-mask--active'
// const doodleActiveClass = 'genplan__doodle--active'

const genplanLinks = {
    1: '/house',
    2: '/pick-house',
    3: '/apartment'
}

function houseHoverHandler (e) {
    const target = e.target
    const mask = genplan.querySelector(`[data-house-mask="${target.dataset.house}"]`)
    // const doodle = genplan.querySelector(`[data-doodle-house="${target.dataset.house}"]`)

    if (e.type === 'mouseover') {
        // console.log(e.type)
        mask.classList.add(houseActiveClass)
        // doodle.classList.add(doodleActiveClass)
    }
    if (e.type === 'mouseout') {
        mask.classList.remove(houseActiveClass)
        // console.log(e.type)
        // doodle.classList.remove(doodleActiveClass)
    }
}

genplanHouse.forEach(genplan => {
    genplan.addEventListener('mouseover', houseHoverHandler)
    genplan.addEventListener('click', (e) => {
        window.location = window.location.origin + genplanLinks[e.target.dataset.house]
    })
})
genplanHouse.forEach(genplan => genplan.addEventListener('mouseout', houseHoverHandler))
