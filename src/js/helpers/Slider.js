class Slider {
    constructor (slider) {
        this.slider = slider
        this.sliderContainer = slider.querySelector('.slider__container')
        this.sliderElements = slider.querySelectorAll('.slider__item')
        this.sliderCounter = 0
        this.minWidth = 280
        this.sliderActiveElement = slider.querySelector('.slider__item--active')
        this.initSlider()
        this.slideWidth = null
        this.currentPosition = 0
    }

    throttle (func, ms) {
        let isThrottled = false
        let savedArgs
        let savedThis

        function wrapper () {
            if (isThrottled) { // (2)
                savedArgs = arguments
                savedThis = this
                return
            }

            func.apply(this, arguments) // (1)

            isThrottled = true

            setTimeout(function () {
                isThrottled = false // (3)
                if (savedArgs) {
                    wrapper.apply(savedThis, savedArgs)
                    savedArgs = savedThis = null
                }
            }, ms)
        }

        return wrapper
    }

    initSlider () {
        const activeElement = this.sliderElements[this.sliderCounter]
        activeElement && activeElement.classList.add('slider__item--active')
        this.sliderActiveElement = activeElement
        this.setSizes()
        this.setSizes()

        this.resizeHandler()
    }

    getHeight (element) {
        return element.getBoundingClientRect().height
    }

    getWidth (element) {
        return element.getBoundingClientRect().width
    }

    getNextPosition (width) {
        this.currentPosition = this.currentPosition + width
        return this.currentPosition
    }

    setHeight (element, height) {
        element.style.height = height + 'px'
    }

    setMinWidth (element, width) {
        element.style.minWidth = width + 'px'
    }

    setSizes () {
        const containerWidth = this.getWidth(this.sliderContainer)
        const containerHeight = this.getHeight(this.sliderActiveElement)
        this.setHeight(this.slider, containerHeight)
        this.setMinWidth(this.sliderActiveElement, containerWidth)
    }

    resizeHandler () {
        const responseToChangeSize = this.throttle(this.setSizes.bind(this), 100)
        window.addEventListener('resize', responseToChangeSize)
    }

    // setSliderPosition(number) {
    //     const slideWidth = this.getWidth(this.sliderActiveElement)
    //     this.currentPosition = slideWidth * number
    //     const position = -this.currentPosition + 'px'
    //     this.sliderContainer.style.transform = `translateX(${position} )`
    // }

    async setSliderPosition (number) {
        if (this.sliderActiveElement) {
            const res = await this.animationHide(this.sliderActiveElement)
                .then((element) => {
                    this.sliderCounter = number - 1
                    const width = -this.getWidth(element)
                    const position = (width * this.sliderCounter) + 'px'
                    this.sliderContainer.style.transform = `translateX(${position} )`
                    element.classList.remove('slider__item--active')
                    this.initSlider()
                    this.animationHeight(this.sliderContainer)

                    return this.sliderActiveElement
                })
                .then((element) => {
                    this.animationShow(element)
                    return 'done'
                })
            return res
        }
    }

    nextSlide () {
        if (this.sliderElements.length - 1 === this.sliderCounter) {
            return
        }
        if (this.sliderActiveElement) {
            this.animationHide(this.sliderActiveElement)
                .then((element) => {
                    const width = -this.getWidth(element)
                    const position = this.getNextPosition(width) + 'px'
                    this.sliderContainer.style.transform = `translateX(${position} )`
                    element.classList.remove('slider__item--active')
                    this.sliderCounter += 1
                    this.initSlider()
                    this.animationHeight(this.sliderContainer)

                    return this.sliderActiveElement
                })
                .then((element) => {
                    this.animationShow(element)
                })
        }
    }

    animationHide (element) {
        return new Promise((resolve) => {
            element.classList.add('fade-out')
            element.addEventListener('animationend', () => {
                resolve(element)
                element.classList.remove('fade-out')
            }, { once: true })
        })
    }

    animationShow (element) {
        return new Promise((resolve) => {
            element.classList.add('fade-in')
            element.addEventListener('animationend', () => {
                resolve(element)
                element.classList.remove('fade-in')
            }, { once: true })
        })
    }

    animationHeight (container) {
        return new Promise((resolve) => {
            container.style.height = this.getHeight(this.sliderActiveElement) + 'px'
            container.addEventListener('transitionend', (e) => {
                if (e.target === container) {
                    resolve(container)
                }
            }, { once: true })
        })
    }
}

export { Slider }
