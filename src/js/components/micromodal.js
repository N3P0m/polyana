import MicroModal from 'micromodal'

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
