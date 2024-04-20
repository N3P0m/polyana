import '@/scss/apartments.scss'

let loader = true
console.log(loader)
import('@/vue/apartments-picker')
    .then(() => {
        loader = false
        console.log(loader)
    })
