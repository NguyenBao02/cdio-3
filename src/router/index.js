import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path: '/',
        component: () => import('../components/KhachHang/index.vue')

    },

    {
        path: '/admin/dang-nhap',
        component: () => import('../components/Admin/DangNhap/index.vue'),
        meta: { layout: 'auth' },

    },
    {
        path: '/admin/dang-ky',
        component: () => import('../components/Admin/DangKy/index.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/admin',
        component: () => import('../components/Admin/QuanLy/index.vue'),
        meta: { layout: 'admin' },
    },
    {
        path: '/admin/quan-ly-tai-khoan',
        component: () => import('../components/Admin/QuanLy/KhachHang/QuanLyTaiKhoan/index.vue'),
        meta: { layout: 'admin' },
    },
    {
        path: '/admin/quan-ly-don-hang',
        component: () => import('../components/Admin/QuanLy/KhachHang/QuanLyDonHang/index.vue'),
        meta: { layout: 'admin' },
    },
    {
        path: '/admin/quan-ly-san-pham',
        component: () => import('../components/Admin/QuanLy/SanPham/QuanLySanPham/index.vue'),
        meta: { layout: 'admin' },
    },
    {
        path: '/admin/danh-muc',
        component: () => import('../components/Admin/QuanLy/SanPham/DanhMucSanPham/index.vue'),
        meta: { layout: 'admin' },
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router