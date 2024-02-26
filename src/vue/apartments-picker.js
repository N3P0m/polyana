import { createApp } from 'vue'
import ApartmentsPickerApp from '@/vue/ApartmentsPickerApp.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const app = createApp(ApartmentsPickerApp)
app.use(autoAnimatePlugin).mount('#apartments-picker')
