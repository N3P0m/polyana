function toggleBtnLoader (btn, tagClass) {
    let originalHeight
    let originalWidth
    const clientHeight = window.getComputedStyle(btn).getPropertyValue('height')
    const clientWidth = window.getComputedStyle(btn).getPropertyValue('width')
    if (!btn.dataset.originalContent) {
        btn.dataset.originalContent = btn.innerHTML
    }
    // лоадер виден
    if (btn.dataset.loaderVisible) {
        btn.classList.remove(tagClass)
        btn.style.height = originalHeight
        btn.style.width = originalWidth
        btn.disabled = false
        btn.innerHTML = btn.dataset.originalContent
        delete btn.dataset.loaderVisible
    } else { // лоадера нет
        // нужно переделать на класс в будущем
        btn.disabled = true
        if (!btn.style.height || btn.style.height === 'auto') {
            originalHeight = 'auto'
        } else {
            originalHeight = clientHeight
        }
        btn.style.height = clientHeight
        btn.style.width = clientWidth
        btn.classList.add(tagClass)
        btn.disabled = true
        btn.innerHTML = `<div class="leap-frog">
  <div class="leap-frog__dot"></div>
  <div class="leap-frog__dot"></div>
  <div class="leap-frog__dot"></div>
</div>`
        btn.dataset.loaderVisible = true
    }
}

export {
    toggleBtnLoader
}
