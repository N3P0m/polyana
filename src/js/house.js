// import './components/townhouse-picker'
// import './components/tabs'
import './components/gallery'
import './components/popup-info'
import './components/form'

import { register } from 'swiper/element/bundle'

const swiperEl = document.querySelector('swiper-container')
// register Swiper custom elements
register()

const houseColors = document.getElementById('house-colors')
const colorsInputs = houseColors.querySelectorAll('[name="houseColor"]')
const houseColor = document.getElementById('house-color')

function getHouseColor () {
    return [...colorsInputs].find(input => input.checked).value
}

function changeHouseColor (e) {
    houseColor.value = e.currentTarget.value
    // console.log(swiperEl.swiper)
    if (swiperEl && swiperEl.swiper.slides.length === 2) {
        e.currentTarget.value === 'dark' ? swiperEl.swiper.slideTo(1) : swiperEl.swiper.slideTo(0)
    }
}

houseColor.value = getHouseColor()

colorsInputs.forEach(input => input.addEventListener('change', changeHouseColor))

// const test = document.querySelector('.townhouse-pin')
// const testContainer = document.querySelector('.townhouse-picker__pin-list')

// window.addEventListener('dblclick', () => {
//     testContainer.scrollLeft = 0
// })
