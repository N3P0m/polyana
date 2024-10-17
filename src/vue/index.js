import { createApp } from 'vue'
import DtHousePickerApp from './Apps/DtHousePickerApp.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const app = createApp(DtHousePickerApp)
app.use(autoAnimatePlugin).mount('#dt-house-picker')
