import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/ClientMaster.vue';
import Auth from './layout/wrapper/AuthMaster.vue'
const app = createApp(App)

app.use(router)
app.component("default-layout", Default);
app.component("auth-layout", Auth);
app.mount("#app")