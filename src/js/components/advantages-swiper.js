import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/scss/effect-fade'
import { EffectFade } from 'swiper/modules'

const advantagesSwiperContainer = document.getElementById('advantagesSwiper')
const advantagesSwiperBtns = document.querySelectorAll('.slider-btn[data-slide]')

const advantagesSwiper = new Swiper(advantagesSwiperContainer, {
    modules: [EffectFade],
    speed: 300,
    effect: 'fade',
    allowTouchMove: true,
    fadeEffect: {
        crossFade: true
    }
})

function switchSlide (btn) {
    return function (event) {
        advantagesSwiperBtns.forEach(btn => btn.classList.remove('active'))
        advantagesSwiper.slideTo(btn.dataset.slide - 1)
        btn.classList.add('active')
    }
}

advantagesSwiperBtns.forEach(btn => btn.addEventListener('click', switchSlide(btn)))
