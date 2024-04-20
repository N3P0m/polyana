// import crmDataTowns from '@/js/temp/towns-pick.json'

const genplan = document.querySelector('.genplan')
const genplanHouse = genplan.querySelectorAll('.genplan__house')
const doodle = genplan.querySelector('.genplan__doodle')
const houseActiveClass = 'genplan__house-mask--active'
const doodleActiveClass = 'genplan__doodle--active'

const crmData = window.crmData

// console.log(crmData)

function houseHoverHandler (e) {
    const target = e.target
    const mask = genplan.querySelector(`[data-house-mask="${target.dataset.house}"]`)
    const { width: widthHouse, x, y } = target.getBoundingClientRect()
    const { x: xGenplan, y: yGenplan } = genplan.getBoundingClientRect()

    // console.log(getFree(crmData[+target.dataset.house]))
    if (e.type === 'mouseover') {
        // console.log(e.type)
        mask.classList.add(houseActiveClass)
        doodle.classList.add(doodleActiveClass)
        doodle.querySelector('[data-doodle-house]').innerText = target.dataset.house
        doodle.querySelector('[data-doodle-value]').innerHTML = getFree(crmData[+target.dataset.house]).text
    }
    if (e.type === 'mouseout') {
        mask.classList.remove(houseActiveClass)
        // console.log(e.type)
        doodle.classList.remove(doodleActiveClass)
    }
    doodle.style.top = y - yGenplan - doodle.getBoundingClientRect().height + 'px'
    doodle.style.left = x - xGenplan + (widthHouse / 2) - (doodle.getBoundingClientRect().width / 2) + 'px'
}

function getFree (korpus) {
    let free = 0
    let txt = ''
    let txtString = ''
    korpus.forEach(item => {
        if (item.state === 1) {
            free++
        }
    })

    if (free === 0) {
        txt = 'Нет в продаже'
    } else {
        txt = 'Свободно<br>' + free + ' ' + numDecline(free, ['таунхаус', 'таунхауса', 'таунхаусов'])
        txtString = free + ' ' + numDecline(free, ['таунхаус', 'таунхауса', 'таунхаусов'])
    }

    return { text: txt, isFree: free, txtString }
}

function numDecline (number, titles) {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)]]
}

genplanHouse.forEach(genplan => {
    genplan.addEventListener('mouseover', houseHoverHandler)
    genplan.addEventListener('click', (e) => (window.location = window.location.origin + '/pick-house?id=' + e.target.dataset.house))
})
genplanHouse.forEach(genplan => genplan.addEventListener('mouseout', houseHoverHandler))
