import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path: '/',
        component: () => import('../components/KhachHang/index.vue')
    
    },

    {
        path: '/dang-nhap',
        component: () => import('../components/DaiLy/DangNhap/index.vue'),
        meta: {layout : 'auth'},

    },  
    {
        path: '/dang-ky',
        component: () => import('../components/DaiLy/DangKy/index.vue'),   
         meta: {layout : 'auth'},
    },
   
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router