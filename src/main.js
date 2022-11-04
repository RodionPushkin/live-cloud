import {createApp} from 'vue'
import {v4 as uuidv4} from 'uuid';
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'

const app = createApp(App).mixin({
    data() {
        return {
            componentId: uuidv4()
        }
    },
})
app.config.globalProperties.$api = new api()
app.use(store).use(router).mount('#app')
