import { createApp } from 'vue'
import GenplanApartmentsApp from '@/vue/Apps/GenplanApartmentsApp.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const app = createApp(GenplanApartmentsApp)
app.use(autoAnimatePlugin).mount('#genplan')
