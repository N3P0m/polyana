import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

const galleryContainer = document.getElementById('swiperGallery')

// eslint-disable-next-line no-new
new Swiper(galleryContainer, {
    modules: [Navigation],
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.gallery-navigation__btn--next',
        prevEl: '.gallery-navigation__btn--prev'
    },
    breakpoints: {
        767: {
            spaceBetween: 70
        },
        1920: {
            spaceBetween: 100
        }
    }
})

const optionsFancybox = {
    Toolbar: {
        display: {
            left: [],
            middle: [],
            right: ['close']
        }
    }
}

Fancybox.bind('[data-fancybox="gallery"]', optionsFancybox)
