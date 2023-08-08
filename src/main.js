import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Pinia
import { createPinia } from 'pinia'
const pinia = createPinia();


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
    theme:{
        defaultTheme: 'gameTheme',
        themes: {
            gameTheme: {
                dark: true,
                colors: {
                    background: '#000000',
                    surface: '#0D092B',
                    primary: '#FFFFFF',
                    secondary: '#0D092B',
                    // error: '#B00020',
                    // info: '#2196F3',
                    // success: '#4CAF50',
                    // warning: '#FB8C00',
                    genre: '#99D4DC',
                    tag: '#FFCC7E',
                    platform: '#D8E3D6',
                    devs: '#D0EAED',
                    publishers: '#E5E0EF',
                    brown: '#370D0D',
                }
            }
        }
    },
    icons: {
        defaultSet: 'mdi',
    }
})


const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(vuetify)
app.mount('#app')
