import { createApp } from 'vue'
import GenplanHousesApp from '@/vue/Apps/GenplanHousesApp.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const app = createApp(GenplanHousesApp)
app.use(autoAnimatePlugin).mount('#genplan')
