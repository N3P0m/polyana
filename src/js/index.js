import './components/form'
import './components/advantages-swiper'
import './components/y-map'
import './components'
const navigation = document.querySelector('.site-navigation')
const navigationLinks = navigation.querySelectorAll('.site-navigation-item > .link')

function navigationLinkHandler (e) {
    e.preventDefault()
    const targetId = this.getAttribute('href').substring(2)
    window.location.hash = targetId
    const targetElement = document.getElementById(targetId)
    const offset = targetElement.offsetTop - 92

    window.scrollTo({
        top: offset,
        behavior: 'smooth' // Плавный скролл к новой позиции
    })
}

function initScrollToAnchor () {
    const targetId = window.location.hash.substring(1)

    if (targetId && window.location.pathname === '/') {
        const targetElement = document.getElementById(targetId)
        const offset = targetElement.offsetTop - 92

        window.scrollTo({
            top: offset,
            behavior: 'smooth' // Плавный скролл к новой позиции
        })
    }
}

initScrollToAnchor()

navigationLinks.forEach(link => link.addEventListener('click', navigationLinkHandler))
