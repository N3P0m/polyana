import './components/gallery'
import './components/popup-info'
import './components/form'

import { register } from 'swiper/element/bundle'
import { EffectFade } from 'swiper/modules'

register()
const swiperContainer = document.querySelector('swiper-container')
const swiperControls = document.querySelectorAll('.swiper-preview-control')

const swiperOptions = {
    modules: [EffectFade],
    // effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
}

Object.assign(swiperContainer, swiperOptions)

swiperContainer.initialize()

swiperControls.forEach(control => control.addEventListener('click', (e) => {
    console.log(e.currentTarget.dataset.slide)
    swiperContainer.swiper.slideTo(e.currentTarget.dataset.slide)
    // swiperContainer.swiper.slideNext()
}))
