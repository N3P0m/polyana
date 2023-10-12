// import { Slider } from './helpers/Slider'
// import { loadAnimation } from 'lottie-web'
// import './helpers/phone-mask'
// import animationData from './lottie/ok.json'
//
// const form = document.querySelector('form')
//
// const slider = new Slider(document.querySelector('.slider'))
// const sliderForm = new Slider(document.querySelector('.slider-form'))
// // sliderForm.setSliderPosition(2)
// console.log(Slider)
//
// const btns = document.querySelectorAll('.slider-btn')
//
// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     // slider.nextSlide()
//     btns.forEach(btn => {
//       btn.disabled = true
//       btn.classList.remove('active')
//     })
//     slider.setSliderPosition(+btn.dataset.slide).then((result) => {
//       btn.classList.add('active')
//       btns.forEach(btn => {
//         btn.disabled = false
//       })
//     })
//   })
// })
//
// function submitHandler (e) {
//   e.preventDefault()
//   const inputs = e.srcElement.querySelectorAll('input')
//   const formData = new FormData()
//   inputs.forEach(input => input.name && formData.append(input.name, input.value))
//
//   fetch('/crm.php', {
//     method: 'POST',
//     body: formData
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status)
//       }
//       return response
//     })
//     .then(() => {
//       sliderForm.nextSlide()
//       startAnimation()
//     })
//     .catch(() => {
//       alert('Что-то пошло не так, перезагрузите страницу и попробуйте снова')
//     })
// }
// const lot = document.querySelector('.success-message__icon')
// const ok = loadAnimation({
//   container: lot, // the dom element
//   renderer: 'svg',
//   loop: false,
//   autoplay: true,
//   animationData, // the animation data
//   // ...or if your animation contains repeaters:
//   // animationData: cloneDeep(animationData), // e.g. lodash.clonedeep
//   rendererSettings: {
//     // context: canvasContext, // the canvas context, only support "2d" context
//     preserveAspectRatio: 'xMinYMin slice', // Supports the same options as the svg element's preserveAspectRatio property
//     // clearCanvas: false,
//     progressiveLoad: true, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
//     hideOnTransparent: true // Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
//     // className: 'some-css-class-name',
//     // id: 'some-id'
//   }
// })
// ok.stop()
//
// function startAnimation () {
//   ok.play()
// }
//
// form.addEventListener('submit', submitHandler)
