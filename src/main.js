import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import Default from './layout/wrapper/ClientMaster.vue';
import Auth from './layout/wrapper/AuthMaster.vue';
import Admin from './layout/wrapper/AdminMaster.vue';
import Toaster from "@meforma/vue-toaster";
const app = createApp(App)

app.use(router, Toaster)
app.component("default-layout", Default);
app.component("auth-layout", Auth);
app.component("admin-layout", Admin);
app.use(VueSidebarMenu)
app.mount("#app")