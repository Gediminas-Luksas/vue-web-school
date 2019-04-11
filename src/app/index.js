import Vue from 'vue'
import App from './App'

export const createApp = () => {
    const app = new Vue ({
        render: h => h(App)
    })
        return { app }
}
