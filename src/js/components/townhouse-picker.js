// import crmData from '../temp/crm-data.json'
import MicroModal from 'micromodal'

const crmData = window.crmData

const windowPreview = document.querySelector('.townhouse-picker__item-window')

const townhouses = document.querySelectorAll('.townhouse-picker__townhouse')
const townhousesContainer = document.querySelector('.townhouse-picker__list')
const townhousesPinsList = document.querySelector('.townhouse-picker__pins-scroll')
const towwnhousesPins = townhousesPinsList.querySelectorAll('.townhouse-pin')
const townhousesPinsFromContainer = townhousesContainer.querySelectorAll('.townhouse-pin')

let townHousesCoords = []

function updateTownhousesCoords () {
    townHousesCoords = [...townhouses].map((townhouse) => {
        const townhouseRect = townhouse.getBoundingClientRect()
        const townhouseContainerRect = townhousesContainer.getBoundingClientRect()
        const startEndCoords = {
            start: townhouseRect.left - townhouseContainerRect.left,
            end: townhouseRect.right - townhouseContainerRect.left
        }
        return startEndCoords
    })
}

function onDragStart (e) {
    windowPreview.style.transition = 'none'
    const pageX = e.type !== 'touchstart' ? e.pageX : e.touches[0].pageX
    const coords = getCoords(windowPreview)
    const shiftX = pageX - coords.left
    const shiftXRight = pageX - coords.right

    onDragMove(e)

    function onDragMove (e) {
        const pageX = e.type !== 'touchmove' ? e.pageX : e.touches[0].pageX
        const mouseX = pageX - shiftX
        const mouseXWithShiftX = pageX - shiftXRight
        if (mouseX < townHousesCoords[0].start) return
        if (mouseXWithShiftX > townHousesCoords.at(-1).end) return
        windowPreview.style.left = mouseX + 'px'
    }

    function onDragEnd () {
        windowPreview.style.transition = '0.2s'
        windowPreview.addEventListener('transitionend', () => {
            windowPreview.style.transition = 'none'
        })
        checkThreshold()
        document.removeEventListener('mousemove', onDragMove)
        document.removeEventListener('touchmove', onDragMove)
        document.removeEventListener('mouseup', onDragEnd)
        document.removeEventListener('touchend', onDragEnd)
    }

    document.addEventListener('mousemove', onDragMove)
    document.addEventListener('touchmove', onDragMove)
    document.addEventListener('mouseup', onDragEnd)
    document.addEventListener('touchend', onDragEnd)
}

function getCoords (elem) {
    const box = elem.getBoundingClientRect()
    const win = townhousesContainer.getBoundingClientRect()
    return {
        top: box.top - win.top,
        left: box.left - win.left,
        right: box.right - win.left
    }
}

function checkThreshold () {
    const townhousesContainerRect = townhousesContainer.getBoundingClientRect()
    const windowPreviewRect = windowPreview.getBoundingClientRect()
    const coordsStart = windowPreviewRect.left - townhousesContainerRect.left
    const coordsEnd = windowPreviewRect.right - townhousesContainerRect.left
    const elementFromStart = document.elementFromPoint(windowPreviewRect.left - 1, windowPreviewRect.top + 30)
    const elementFromEnd = document.elementFromPoint(windowPreviewRect.right + 1, windowPreviewRect.top + 30)
    const elementFromStartRect = elementFromStart.getBoundingClientRect()
    const elementFromEndRect = elementFromEnd.getBoundingClientRect()
    const coordsForStartElement = {
        start: elementFromStartRect.left - townhousesContainerRect.left,
        end: elementFromStartRect.right - townhousesContainerRect.left
    }
    const coordsForEndElement = {
        start: elementFromEndRect.left - townhousesContainerRect.left,
        end: elementFromEndRect.right - townhousesContainerRect.left
    }
    const thresholdForStartElement = 1 - ((coordsStart - coordsForStartElement.start) / (coordsForStartElement.end - coordsForStartElement.start))
    const thresholdForEndElement = ((coordsEnd - coordsForEndElement.start) / (coordsForEndElement.end - coordsForEndElement.start))

    let indexOfStartElement = [...townhouses].findIndex(element => element === elementFromStart)
    indexOfStartElement = indexOfStartElement !== -1 ? indexOfStartElement : 0
    const indexOfEndElement = [...townhouses].findIndex(element => element === elementFromEnd)
    if (indexOfEndElement - indexOfStartElement !== getVisibleItems().visibleItems && !townHousesCoords[indexOfStartElement + getVisibleItems().visibleItems - 1]) {
        const newWidth = townHousesCoords.at(-1).end - townHousesCoords[townHousesCoords.length - getVisibleItems().visibleItems].start
        const leftSide = townHousesCoords[townHousesCoords.length - getVisibleItems().visibleItems].start
        windowPreview.style.width = newWidth + 'px'
        windowPreview.style.left = leftSide + 'px'
        scrollToTheRightElement(townHousesCoords.length - getVisibleItems().visibleItems)
    }
    if (indexOfEndElement - indexOfStartElement !== getVisibleItems().visibleItems && townHousesCoords[indexOfStartElement + getVisibleItems().visibleItems - 1]) {
        if (thresholdForStartElement > thresholdForEndElement) {
            const newWidth = townHousesCoords[indexOfStartElement + getVisibleItems().visibleItems - 1].end - townHousesCoords[indexOfStartElement].start
            const leftSide = townHousesCoords[indexOfStartElement].start
            windowPreview.style.width = newWidth + 'px'
            windowPreview.style.left = leftSide + 'px'
            scrollToTheRightElement(indexOfStartElement)
        }

        if (thresholdForStartElement < thresholdForEndElement) {
            if (!townHousesCoords[indexOfStartElement + 1 + getVisibleItems().visibleItems - 1]) {
                const newWidth = townHousesCoords.at(-1).end - townHousesCoords[townHousesCoords.length - getVisibleItems().visibleItems].start
                const leftSide = townHousesCoords[townHousesCoords.length - getVisibleItems().visibleItems].start
                windowPreview.style.width = newWidth + 'px'
                windowPreview.style.left = leftSide + 'px'

                scrollToTheRightElement(townHousesCoords.length - getVisibleItems().visibleItems)
            } else {
                const newWidth = townHousesCoords[indexOfStartElement + 1 + getVisibleItems().visibleItems - 1].end - townHousesCoords[indexOfStartElement + 1].start
                const leftSide = townHousesCoords[indexOfStartElement + 1].start
                windowPreview.style.width = newWidth + 'px'
                windowPreview.style.left = leftSide + 'px'

                scrollToTheRightElement(indexOfStartElement + 1)
            }
        }
    }
    if (indexOfEndElement - indexOfStartElement === getVisibleItems().visibleItems) {
        if (thresholdForStartElement > thresholdForEndElement) {
            windowPreview.style.left = townHousesCoords[indexOfStartElement].start + 'px'
            windowPreview.style.width = (townHousesCoords[indexOfStartElement + getVisibleItems().visibleItems - 1].end - townHousesCoords[indexOfStartElement].start) + 'px'
            scrollToTheRightElement(indexOfStartElement)
        }
        if (thresholdForStartElement < thresholdForEndElement) {
            windowPreview.style.left = townHousesCoords[indexOfStartElement + 1].start + 'px'
            windowPreview.style.width = (townHousesCoords[indexOfStartElement + 1 + getVisibleItems().visibleItems - 1].end - townHousesCoords[indexOfStartElement + 1].start) + 'px'
            scrollToTheRightElement(indexOfStartElement + 1)
        }
    }
}

function initWidthForWindowPreview (elementPerView) {
    const leftSide = townHousesCoords[0].start
    const width = townHousesCoords[elementPerView - 1].end - townHousesCoords[0].start
    windowPreview.style.left = leftSide + 'px'
    windowPreview.style.width = width + 'px'
}

function scrollToTheRightElement (indexOfElement) {
    const elementsContainer = document.querySelector('.townhouse-picker__pins-scroll')
    const elements = elementsContainer.querySelectorAll('.townhouse-pin')
    const scrollLeft = elements[indexOfElement].offsetLeft - elementsContainer.offsetLeft
    elementsContainer.scrollLeft = scrollLeft
}

function getVisibleItems () {
    const elementsContainer = document.querySelector('.townhouse-picker__pins-scroll')
    const elementsContainerList = elementsContainer.querySelector('.townhouse-picker__pin-list')

    const elements = elementsContainer.querySelectorAll('.townhouse-pin')
    const elementsContainerWidth = elementsContainer.offsetWidth > elementsContainerList.offsetWidth ? elementsContainerList.offsetWidth : elementsContainer.offsetWidth
    const visibleItems = Math.floor(elementsContainerWidth / elements[0].offsetWidth)
    const maxItems = elements.length
    return { visibleItems, maxItems }
}

function delay (time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

async function pinHandler (e) {
    const target = e.target.closest('[data-townhouse-number]')

    if (windowPreview.classList.contains('townhouse-picker__item-window--visible')) {
        windowPreview.style.transition = '0.2s'
        const targetTownhouseCord = townHousesCoords[target.dataset.townhouseNumber - 1]
        const windowPreviewRect = windowPreview.getBoundingClientRect()
        const windowPreviewLeft = windowPreviewRect.left - townhousesContainer.offsetLeft
        const windowPreviewRight = windowPreviewRect.right - townhousesContainer.offsetLeft

        if ((targetTownhouseCord.start > windowPreviewRight || targetTownhouseCord.start < windowPreviewLeft) ||
            (targetTownhouseCord.end > windowPreviewRight || targetTownhouseCord.end < windowPreviewLeft)) {
            if (targetTownhouseCord.end >= windowPreviewRight) {
                const deltaWidth = targetTownhouseCord.end > windowPreviewRight
                    ? targetTownhouseCord.end - windowPreviewRight
                    : windowPreviewRight - targetTownhouseCord.end

                const newWindowPreviewLeft = windowPreviewLeft + deltaWidth - 4
                windowPreview.style.left = newWindowPreviewLeft + 'px'
                await delay(200)
                checkThreshold()
            }
            if (targetTownhouseCord.start < windowPreviewLeft) {
                windowPreview.style.left = targetTownhouseCord.start + 4 + 'px'
                await delay(200)
                checkThreshold()
                windowPreview.addEventListener('transitionend', () => {
                    windowPreview.style.transition = 'none'
                })
            }
        }
    }
    towwnhousesPins.forEach(pin => {
        pin.classList.remove('townhouse-pin--active')
        if (target.dataset.townhouseNumber === pin.dataset.townhouseNumber) {
            pin.classList.add('townhouse-pin--active')
        }
    })
    townhousesPinsFromContainer.forEach(pin => {
        pin.classList.remove('townhouse-pin--active')
        if (target.dataset.townhouseNumber === pin.dataset.townhouseNumber) {
            pin.classList.add('townhouse-pin--active')
        }
    })
    target.classList.add('townhouse-pin--active')
    townhouses.forEach(townhouse => {
        townhouse.classList.remove('townhouse-picker__townhouse--active')
        if (townhouse.dataset.townhouseNumber === target.dataset.townhouseNumber) {
            townhouse.classList.add('townhouse-picker__townhouse--active')
        }
    })
    updateTownhouseInfo(target.dataset.townhouseNumber)
}
const townhouseInfoContainer = document.querySelector('.choosing-townhouse-info')
const townhouseInfoContainerPopup = document.querySelector('.choosing-townhouse-popup__specs')

const townhouseInfoElements = {
    parent: townhouseInfoContainer,
    minimapImg: townhouseInfoContainer.querySelector('.choosing-townhouse-info__minimap > img'),
    planImg: document.querySelectorAll('[data-img="planImg"]'),
    sq: townhouseInfoContainer.querySelector('#sq'),
    floor: townhouseInfoContainer.querySelector('#floors'),
    cost: townhouseInfoContainer.querySelector('#cost'),
    number: townhouseInfoContainer.querySelector('#townhouseNumber'),
    pdf: townhouseInfoContainer.querySelector('#pdf')
}

const townhouseInfoElementsPopup = {
    parent: townhouseInfoContainerPopup,
    sq: townhouseInfoContainerPopup.querySelector('#sq'),
    floor: townhouseInfoContainerPopup.querySelector('#floors'),
    cost: townhouseInfoContainerPopup.querySelector('#cost'),
    number: townhouseInfoContainerPopup.querySelector('#townhouseNumber')
}

async function updateTownhouseInfo (id) {
    const townhouseTarget = crmData.find(townhouses => townhouses.number === id)

    // eslint-disable-next-line no-unused-vars
    const townhouseInfo = {
        ...townhouseTarget,
        planImg: townhouseTarget.images[0].images[0].file_url,
        minimapImg: townhouseTarget.images[0].images[1].file_url
    }

    // обновление картинок
    townhouseInfoElements.minimapImg.closest('.choosing-townhouse-info__minimap').classList.remove('choosing-townhouse-info__minimap--loading', 'choosing-townhouse-info__minimap--load', 'choosing-townhouse-info__minimap--load-error')
    townhouseInfoElements.minimapImg.closest('.choosing-townhouse-info__minimap').classList.add('choosing-townhouse-info__minimap--loading')
    loadImage(townhouseInfo.minimapImg)
        .then((response) => {
            townhouseInfoElements.minimapImg.src = townhouseInfo.minimapImg
            townhouseInfoElements.minimapImg.closest('.choosing-townhouse-info__minimap').classList.remove('choosing-townhouse-info__minimap--loading')
            townhouseInfoElements.minimapImg.closest('.choosing-townhouse-info__minimap').classList.add('choosing-townhouse-info__minimap--load')
        })
        .catch(() => {
            townhouseInfoElements.minimapImg.closest('.choosing-townhouse-info__minimap').classList.remove('choosing-townhouse-info__minimap--loading')
            townhouseInfoElements.minimapImg.closest('.choosing-townhouse-info__minimap').classList.add('choosing-townhouse-info__minimap--load-error')
        })
    townhouseInfoElements.planImg.forEach(planImg => {
        planImg.closest('.choosing-townhouse-info__house-preview').classList.remove('choosing-townhouse-info__house-preview--loading', 'choosing-townhouse-info__house-preview--load', 'choosing-townhouse-info__house-preview--load-error')
        planImg.closest('.choosing-townhouse-info__house-preview').classList.add('choosing-townhouse-info__house-preview--loading')
    })
    loadImage(townhouseInfo.planImg)
        .then((response) => {
            townhouseInfoElements.planImg.forEach(planImg => {
                planImg.src = townhouseInfo.planImg
                planImg.closest('.choosing-townhouse-info__house-preview').classList.remove('choosing-townhouse-info__house-preview--loading')
                planImg.closest('.choosing-townhouse-info__house-preview').classList.add('choosing-townhouse-info__house-preview--load')
            })
        })
        .catch(() => {
            townhouseInfoElements.planImg.forEach(planImg => {
                planImg.closest('.choosing-townhouse-info__house-preview').classList.remove('choosing-townhouse-info__house-preview--loading')
                planImg.closest('.choosing-townhouse-info__house-preview').classList.add('choosing-townhouse-info__house-preview--load-error')
            })
        })

    townhouseInfoElements.number.innerText = townhouseInfo.number
    townhouseInfoElements.cost.innerText = townhouseInfo.cost_str
    townhouseInfoElements.sq.innerText = townhouseInfo.sq
    townhouseInfoElements.pdf.href = '/pdf?id=' + townhouseInfo.id

    townhouseInfoElementsPopup.number.innerText = townhouseInfo.number
    townhouseInfoElementsPopup.cost.innerText = townhouseInfo.cost_str
    townhouseInfoElementsPopup.sq.innerText = townhouseInfo.sq

    const messageInput = document.getElementById('message')
    const message = `Дом ${townhouseInfo.korpus}, таунхаус ${townhouseInfo.number}, площадь ${townhouseInfo.sq}, цена ${townhouseInfo.cost_str}`
    messageInput.value = message
}

function loadImage (src) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = resolve
        img.onerror = reject
        img.src = src
    })
}

// townhousesContainer.ondragstart = function () {
//     return false
// }
function throttle (func, ms) {
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

function checkScrollAreaOfPinList () {
    const scrollWidth = townhousesPinsList.scrollWidth
    const offsetWidhtOfPinList = townhousesPinsList.querySelector('.townhouse-picker__pin-list').offsetWidth
    const offsetWidth = townhousesPinsList.offsetWidth < offsetWidhtOfPinList ? offsetWidhtOfPinList : townhousesPinsList.offsetWidth
    const { visibleItems, maxItems } = getVisibleItems()

    if (scrollWidth > offsetWidth && maxItems > visibleItems) {
        townhousesPinsList.classList.add('townhouse-picker__pins-scroll--visible')
        townhousesPinsFromContainer.forEach(pin => pin.classList.add('townhouse-pin--hidden'))
        windowPreview.classList.add('townhouse-picker__item-window--visible')
        // checkScrollAreaOfPinList()
    } else {
        townhousesPinsList.classList.remove('townhouse-picker__pins-scroll--visible')
        townhousesPinsFromContainer.forEach(pin => pin.classList.remove('townhouse-pin--hidden'))
        windowPreview.classList.remove('townhouse-picker__item-window--visible')
        // checkScrollAreaOfPinList
    }
}

function update () {
    checkScrollAreaOfPinList()
    updateTownhousesCoords()
    initWidthForWindowPreview(getVisibleItems().visibleItems)
}

update()

const throttleUpdate = throttle(update, 800)
window.addEventListener('resize', () => {
    throttleUpdate()
})

// Listeners
towwnhousesPins.forEach(pin => {
    if (!pin.disabled) {
        pin.addEventListener('click', pinHandler)
    }
})
townhousesPinsFromContainer.forEach(pin => {
    if (!pin.disabled) {
        pin.addEventListener('click', pinHandler)
    }
})
townhouses.forEach(townhouse => {
    if (!townhouse.classList.contains('townhouse-picker__townhouse--sale')) {
        townhouse.addEventListener('click', pinHandler)
    }
}
)
const activePinAtTheFirstInit = [...towwnhousesPins].find(pin => !pin.disabled)
activePinAtTheFirstInit && activePinAtTheFirstInit.click()
windowPreview.addEventListener('mousedown', onDragStart)
windowPreview.addEventListener('touchstart', onDragStart)

MicroModal.init({
    onShow: () => {
        if (!window.swipers) return
        Object.values(window.swipers).forEach(swiper => {
            if (swiper.place === 'popup') swiper.attachEvents()
        })
    },
    openClass: 'is-open',
    disableScroll: !0,
    disableFocus: !1,
    awaitOpenAnimation: !0,
    awaitCloseAnimation: !0
}
)
