import Swiper from 'swiper'

import { Navigation, Manipulation, Pagination } from 'swiper/modules'
import MicroModal from 'micromodal'

// Ход строительства

const swiperProgressContainer = document.querySelector('[data-swiper="swiperProgress"]')
const swiperProgressMoreContainer = document.querySelector('[data-swiper="swiperProgressMore"]')
const swiperProgressSlides = swiperProgressContainer.querySelectorAll('.swiper-slide')
const swiperProgressMoreSlides = swiperProgressMoreContainer.querySelectorAll('.swiper-slide')

const swiperProgress = new Swiper(swiperProgressContainer, {
    modules: [Navigation, Manipulation],
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.progress-swiper-btn--prev',
        prevEl: '.progress-swiper-btn--next'
    },
    breakpoints: {
        991: {
            slidesPerView: 3
        },
        575: {
            slidesPerView: 2
        }
    },
    init: false
})

const swiperProgressMore = new Swiper(swiperProgressMoreContainer, {
    modules: [Navigation, Pagination, Manipulation],
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.opt-next',
        prevEl: '.progress-more-swiper-btn--prev'
    },
    pagination: {
        el: '.swiper-progress-pagination',
        bulletClass: 'swiper-progress-pagination__bullet',
        bulletActiveClass: 'swiper-progress-pagination__bullet--active',
        clickable: true
    },
    init: false

})

// const selectProgress = new NiceSelect(document.getElementById("#selectProgress"));
const yearsTabs = document.querySelector('.progress-switcher')
const currentYear = yearsTabs.querySelector('input[checked]')

yearsTabs.addEventListener('input', (e) => {
    changeProgressYear(e.target.value)
})

// console.log('selectProgress', selectProgress)
// const selectProgress = document.getElementById('selectProgress')
// const select2Progress = new NiceSelect(selectProgress)
const modalCloseBtn = document.querySelector('#modal-2 [data-modal-close]')

swiperProgress.on('init', () => {
    changeProgressYear(currentYear.value)
})

function delay (time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

async function changeProgressYear (year) {
    swiperProgress.slides.forEach(slide => {
        slide.style.transition = '0.3s ease-out'
        slide.style.opacity = '0'
    }
    )
    await delay(300)
    swiperProgress.removeAllSlides()
    swiperProgressSlides.forEach(async slide => {
        if (slide.dataset.progressValue === year) {
            swiperProgress.appendSlide(slide)
        }
    })
    for (let i = 0; i < swiperProgress.slides.length; i++) {
        await delay(30)
        swiperProgress.slides[i].style.opacity = '1'
    }
}

function changeProgressMore (mark) {
    swiperProgressMore.removeAllSlides()
    swiperProgressMoreSlides.forEach(slide => {
        if (slide.dataset.progressMore === mark) {
            swiperProgressMore.appendSlide(slide)
        }
    })
}

swiperProgress.init()
swiperProgressMore.init()

swiperProgressSlides.forEach(slide => {
    slide.addEventListener('click', (e) => {
        MicroModal.show('modal-2')
        document.body.style.overflow = 'hidden'
        const currentTarget = e.currentTarget
        setTimeout(() => {
            changeProgressMore(currentTarget.dataset.progressMore)
        }, 10)

        // swiperProgressMore.init()
    })
})

modalCloseBtn.addEventListener('click', () => {
    document.body.style.overflow = 'auto'
    MicroModal.close('modal-2')
})
