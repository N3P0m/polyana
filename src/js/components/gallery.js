import Swiper from 'swiper'
import 'swiper/css'

const galleryContainer = document.getElementById('swiperGallery')

// eslint-disable-next-line no-new
new Swiper(galleryContainer, {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween: 69
})
