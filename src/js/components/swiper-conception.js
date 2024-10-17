import { register } from 'swiper/element/bundle'
import { EffectFade } from 'swiper/modules'
/**
 *=========
 * Swiper
 *=========
 */

register()

const swiperConception = document.querySelector('.swiper-conception')
const conceptionSwitcher = document.querySelector('.conception-switcher')
// переключатель вида с генплана на вклакди
const swiperControls = conceptionSwitcher.querySelectorAll('.swiper-preview-control')

const swiperOptions = {
    modules: [EffectFade],
    effect: 'fade',
    allowTouchMove: false,
    fadeEffect: {
        crossFade: true
    }
}

Object.assign(swiperConception, swiperOptions)

swiperControls.forEach(control => control.addEventListener('click', (e) => {
    swiperConception.swiper.slideTo(e.currentTarget.dataset.slide)
}))

swiperConception.initialize()
