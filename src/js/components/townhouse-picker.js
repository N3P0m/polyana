const windowPreview = document.querySelector('.townhouse-picker__item-window')

const townhouses = document.querySelectorAll('.townhouse-picker__townhouse')
const townhousesContainer = document.querySelector('.townhouse-picker__list')
const townhousesPinsList = document.querySelector('.townhouse-picker__pin-list')
const towwnhousesPins = townhousesPinsList.querySelectorAll('.townhouse-pin')

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
    console.log('test')
    windowPreview.style.transition = 'none'
    const pageX = e.type !== 'touchstart' ? e.pageX : e.touches[0].pageX
    const coords = getCoords(windowPreview)
    const shiftX = pageX - coords.left
    const shiftXRight = pageX - coords.right

    const windowPreviewRect = windowPreview.getBoundingClientRect()

    onDragMove(e)
    function onDragMove (e) {
        console.log(e.type)
        const pageX = e.type !== 'touchmove' ? e.pageX : e.touches[0].pageX
        const mouseX = pageX - shiftX
        const mouseXWithShiftX = pageX - shiftXRight
        if (mouseX < townHousesCoords[0].start) return
        if (mouseXWithShiftX > townHousesCoords.at(-1).end) return
        windowPreview.style.left = mouseX + 'px'
    }

    console.log(windowPreviewRect.left)

    function onDragEnd () {
        console.log(windowPreviewRect.left)
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
    if (indexOfEndElement - indexOfStartElement !== getVisibleItems() && !townHousesCoords[indexOfStartElement + getVisibleItems() - 1]) {
        const newWidth = townHousesCoords.at(-1).end - townHousesCoords[townHousesCoords.length - getVisibleItems()].start
        const leftSide = townHousesCoords[townHousesCoords.length - getVisibleItems()].start
        windowPreview.style.width = newWidth + 'px'
        windowPreview.style.left = leftSide + 'px'
        scrollToTheRightElement(townHousesCoords.length - getVisibleItems())
    }
    if (indexOfEndElement - indexOfStartElement !== getVisibleItems() && townHousesCoords[indexOfStartElement + getVisibleItems() - 1]) {
        if (thresholdForStartElement > thresholdForEndElement) {
            const newWidth = townHousesCoords[indexOfStartElement + getVisibleItems() - 1].end - townHousesCoords[indexOfStartElement].start
            const leftSide = townHousesCoords[indexOfStartElement].start
            windowPreview.style.width = newWidth + 'px'
            windowPreview.style.left = leftSide + 'px'
            scrollToTheRightElement(indexOfStartElement)
        }

        if (thresholdForStartElement < thresholdForEndElement) {
            if (!townHousesCoords[indexOfStartElement + 1 + getVisibleItems() - 1]) {
                const newWidth = townHousesCoords.at(-1).end - townHousesCoords[townHousesCoords.length - getVisibleItems()].start
                const leftSide = townHousesCoords[townHousesCoords.length - getVisibleItems()].start
                windowPreview.style.width = newWidth + 'px'
                windowPreview.style.left = leftSide + 'px'

                scrollToTheRightElement(townHousesCoords.length - getVisibleItems())
            } else {
                const newWidth = townHousesCoords[indexOfStartElement + 1 + getVisibleItems() - 1].end - townHousesCoords[indexOfStartElement + 1].start
                const leftSide = townHousesCoords[indexOfStartElement + 1].start
                windowPreview.style.width = newWidth + 'px'
                windowPreview.style.left = leftSide + 'px'

                scrollToTheRightElement(indexOfStartElement + 1)
            }
        }
    }
    if (indexOfEndElement - indexOfStartElement === getVisibleItems()) {
        if (thresholdForStartElement > thresholdForEndElement) {
            windowPreview.style.left = townHousesCoords[indexOfStartElement].start + 'px'
            windowPreview.style.width = (townHousesCoords[indexOfStartElement + getVisibleItems() - 1].end - townHousesCoords[indexOfStartElement].start) + 'px'
            scrollToTheRightElement(indexOfStartElement)
        }
        if (thresholdForStartElement < thresholdForEndElement) {
            windowPreview.style.left = townHousesCoords[indexOfStartElement + 1].start + 'px'
            windowPreview.style.width = (townHousesCoords[indexOfStartElement + 1 + getVisibleItems() - 1].end - townHousesCoords[indexOfStartElement + 1].start) + 'px'
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
    const elementsContainer = document.querySelector('.townhouse-picker__pin-list')
    const elements = elementsContainer.querySelectorAll('.townhouse-pin')
    const scrollLeft = elements[indexOfElement].offsetLeft - elementsContainer.offsetLeft
    elementsContainer.scrollLeft = scrollLeft
}

function getVisibleItems () {
    const elementsContainer = document.querySelector('.townhouse-picker__pin-list')
    const elements = elementsContainer.querySelectorAll('.townhouse-pin')
    const elementsContainerWidth = elementsContainer.offsetWidth
    const visibleItems = Math.floor(elementsContainerWidth / elements[0].offsetWidth)
    return visibleItems
}

function pinHandler (e) {
    const target = e.target.closest('.townhouse-pin')
    console.log(target)
    const targetTownhouseCord = townHousesCoords[target.dataset.townhouseNumber - 1]
    const windowPreviewRect = windowPreview.getBoundingClientRect()
    const windowPreviewLeft = windowPreviewRect.left - townhousesContainer.offsetLeft
    const windowPreviewRight = windowPreviewRect.right - townhousesContainer.offsetLeft

    console.log('координаты дома', targetTownhouseCord)
    console.log('координаты окна (лево, право)', windowPreviewLeft, windowPreviewRight)

    // if ((targetTownhouseCord.start > windowPreviewRight || targetTownhouseCord.start < windowPreviewLeft) ||
    //     (targetTownhouseCord.end > windowPreviewRight || targetTownhouseCord.end < windowPreviewLeft)
    // ) {
    if ((targetTownhouseCord.start <= windowPreviewRight && targetTownhouseCord.start >= windowPreviewLeft) &&
        (targetTownhouseCord.end <= windowPreviewRight && targetTownhouseCord.end >= windowPreviewLeft)
    ) {
        console.log('в окне')
    } else {
        console.log('ne в окне')
    }
    towwnhousesPins.forEach(pin => {
        pin.classList.remove('townhouse-pin--active')
    })
    target.classList.add('townhouse-pin--active')
    townhouses.forEach(townhouse => {
        townhouse.classList.remove('townhouse-picker__townhouse--active')
        if (townhouse.dataset.townhouseNumber === target.dataset.townhouseNumber) {
            townhouse.classList.add('townhouse-picker__townhouse--active')
        }
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
    const offsetWidth = townhousesPinsList.offsetWidth

    if (scrollWidth > offsetWidth) {
        windowPreview.classList.add('townhouse-picker__item-window--visible')
    } else {
        windowPreview.classList.remove('townhouse-picker__item-window--visible')
    }

    console.log(scrollWidth, offsetWidth)
}

function update () {
    updateTownhousesCoords()
    initWidthForWindowPreview(getVisibleItems())
    checkScrollAreaOfPinList()
}

update()

const throttleUpdate = throttle(update, 600)
window.addEventListener('resize', () => {
    throttleUpdate()
})

// Listeners
towwnhousesPins.forEach(pin => pin.addEventListener('click', pinHandler))
windowPreview.addEventListener('mousedown', onDragStart)
windowPreview.addEventListener('touchstart', onDragStart)
