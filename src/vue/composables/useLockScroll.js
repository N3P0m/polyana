function getScrollBarWidth () {
    const item = document.createElement('div')

    item.style.position = 'absolute'
    item.style.top = '-9999px'
    item.style.width = '50px'
    item.style.height = '50px'
    item.style.overflow = 'scroll'
    item.style.visibility = 'hidden'

    document.body.appendChild(item)
    const scrollBarWidth = item.offsetWidth - item.clientWidth
    document.body.removeChild(item)

    return scrollBarWidth
}

function toggleScrollBarVisible (state = true, selector = null) {
    let bodyStyle = document.body.style
    if (selector) {
        bodyStyle = document.querySelector(selector).style
    }
    if (state) {
        bodyStyle.overflow = 'hidden'
        bodyStyle.paddingRight = `${getScrollBarWidth()}px`
    } else {
        bodyStyle.paddingRight = '0'
        bodyStyle.overflow = 'visible'
    }
}

export function useLockScroll (state) {
    toggleScrollBarVisible(state)
}
