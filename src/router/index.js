import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path: '/',
        component: () => import('../components/KhachHang/index.vue')

    },

    {
        path: '/dang-nhap',
        component: () => import('../components/KhachHang/DangNhap/index.vue'),
        meta: { layout: 'auth' },

    },
    {
        path: '/dang-ky',
        component: () => import('../components/KhachHang/DangKy/index.vue'),
        meta: { layout: 'auth' },
    },


    {
        path: '/gio-hang',
        component: () => import('../components/HomePage/GioHang/index.vue'),
  
    },

    {
        path: '/notfound',
        component: () => import('../components/NotFound/index.vue'),
  
    },
   
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router