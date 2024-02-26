import MicroModal from 'micromodal'

function changePreviewImg (modal, e) {
    const currentTarget = e.currentTarget
    const previewTargetImg = currentTarget.querySelector('[data-img="planImg"]')
    const previewImg = modal.querySelector('[data-img="planImg"]')
    previewImg.src = previewTargetImg.src
}

MicroModal.init({
    onShow: (modal, body, e) => {
        if (!window.swipers) return
        Object.values(window.swipers).forEach(swiper => {
            if (swiper.place === 'popup') swiper.attachEvents()
        })
        if (modal.id === 'popup-with-preview') {
            changePreviewImg(modal, e)
        }
    },
    openClass: 'is-open',
    disableScroll: !0,
    disableFocus: !1,
    awaitOpenAnimation: !0,
    awaitCloseAnimation: !0
}
)
