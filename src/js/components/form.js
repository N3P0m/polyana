import { loadAnimation } from 'lottie-web/'
import { toggleBtnLoader } from '../helpers/toggle-btn-loader'
import '../helpers/phone-mask'
import animationData from '../lottie/ok.json'
import JustValidate from 'just-validate'

import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/scss/effect-fade'
import { EffectFade } from 'swiper/modules'

const applicationFormSwiperContainer = document.querySelectorAll('[data-swiper="application-form"]')
// const applicationForm = applicationFormSwiperContainer.querySelector('.application-form')

const swipers = {}
const forms = {}
const validators = {}

window.swipers = swipers

applicationFormSwiperContainer.forEach((container, index) => {
    swipers[`swiper-${index + 1}`] = new Swiper(container, {
        modules: [EffectFade],
        speed: 300,
        effect: 'fade',
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true
        }
    })
    swipers[`swiper-${index + 1}`].place = container.dataset.swiperPlace ?? null
    forms[`form-${index + 1}`] = container.querySelector('.application-form')
    validators[`validator-${index + 1}`] = new JustValidate(forms[`form-${index + 1}`])
    validators[`validator-${index + 1}`]
        .addField('input[name="name"]', [
            {
                rule: 'required',
                errorMessage: 'ФИО не заполнено'
            }
        ])
        .addField('input[name="email"]', [
            {
                rule: 'required',
                errorMessage: 'Email не заполнен'
            },
            {
                rule: 'email',
                errorMessage: 'Email не верный'
            }
        ])
        .addField('input[name="phone"]', [
            {
                rule: 'required',
                errorMessage: 'Телефон не заполнен'
            },
            {
                validator: (value, fields) => {
                    let validationPhoneValue = value.match(/\d+(\.\d+)?/g)
                    validationPhoneValue = validationPhoneValue ? validationPhoneValue.join('') : validationPhoneValue
                    if (!validationPhoneValue) return false
                    if (validationPhoneValue.substring(0, 1) === '8' || validationPhoneValue.substring(0, 1) === '7') {
                        return +validationPhoneValue.length >= 11
                    } else {
                        return +validationPhoneValue.length >= 10
                    }
                },
                errorMessage: 'Телефон не верный'
            }
        ])
    validators[`validator-${index + 1}`].onSuccess(submitHandler)

    function submitHandler (e) {
        const inputs = e.srcElement.querySelectorAll('input')
        const sunmbitBtn = e.srcElement.querySelector('button')
        toggleBtnLoader(sunmbitBtn)
        const formData = new FormData()
        const values = {}
        inputs.forEach(input => input.name && (values[input.name] = input.value))
        Object.entries(values).forEach(([key, value]) => formData.append(key, value))

        fetch('/crm.php', {
            method: 'POST',
            body: formData
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status)
                }
                return response
            })
            .then(async () => {
                window.ym && window.ym(93696980, 'reachGoal', 'form_submit_agm')
                window.Comagic && window.Comagic.addOfflineRequest(values)
                swipers[`swiper-${index + 1}`].slideNext()
                await defay(300)
                startAnimation()
                startAnimation()
            })
            .catch(() => {
                alert('Что-то пошло не так, перезагрузите страницу и попробуйте снова')
            })
            .finally(() => {
                toggleBtnLoader(sunmbitBtn)
            })
    }
})

const defay = (time) => new Promise(resolve => setTimeout(resolve, time))
// eslint-disable-next-line no-unused-vars

const lot = document.querySelector('.success-message__icon')
const ok = loadAnimation({
    container: lot, // the dom element
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData, // the animation data
    // ...or if your animation contains repeaters:
    // animationData: cloneDeep(animationData), // e.g. lodash.clonedeep
    rendererSettings: {
    // context: canvasContext, // the canvas context, only support "2d" context
        preserveAspectRatio: 'xMinYMin slice', // Supports the same options as the svg element's preserveAspectRatio property
        // clearCanvas: false,
        progressiveLoad: true, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        hideOnTransparent: true // Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
    // className: 'some-css-class-name',
    // id: 'some-id'
    }
})
ok.stop()

function startAnimation () {
    ok.play()
}
