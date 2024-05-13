import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import kiemTraAdmin from "./kiemTraAdmin";

const routes = [
    {
        path: '/',
        component: () => import('../components/KhachHang/HomePage/index.vue')
    },
    {
        path: '/khach-hang/dang-ky',
        component: () => import('../components/KhachHang/DangKy/index.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/khach-hang/dang-nhap',
        component: () => import('../components/KhachHang/DangNhap/index.vue'),
        meta: { layout: 'auth' },
    },
    {
        path: '/gio-hang',
        component: () => import('../components/KhachHang/GioHang/index.vue'),

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
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/quan-ly-tai-khoan',
        component: () => import('../components/Admin/QuanLy/KhachHang/QuanLyTaiKhoan/index.vue'),
        meta: { layout: 'admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/quan-ly-don-hang',
        component: () => import('../components/Admin/QuanLy/KhachHang/QuanLyDonHang/index.vue'),
        meta: { layout: 'admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/quan-ly-san-pham',
        component: () => import('../components/Admin/QuanLy/SanPham/QuanLySanPham/index.vue'),
        meta: { layout: 'admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/quan-ly-nhap-kho',
        component: () => import('../components/Admin/QuanLy/NhapKho/QuanLyNhapKho/index.vue'),
        meta: { layout: 'admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/them-moi-dai-ly',
        component: () => import('../components/Admin/QuanLy/DaiLy/ThemMoiDaiLy/index.vue'),
        meta: { layout: 'admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/danh-sach-dai-ly',
        component: () => import('../components/Admin/QuanLy/DaiLy/DanhSachDaiLy/index.vue'),
        meta: { layout: 'admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/danh-muc',
        component: () => import('../components/Admin/QuanLy/SanPham/DanhMucSanPham/index.vue'),
        meta: { layout: 'admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/hoa-don-nhap-kho',
        component: () => import('../components/Admin/QuanLy/NhapKho/HoaDonNhapKho/index.vue'),
        meta: { layout: 'admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/thanh-toan',
        component: () => import('../components/KhachHang/ThanhToan/index.vue'),
    },
    {
        path: '/profile',
        component: () => import('../components/KhachHang/TrangProfile/index.vue')
    },
    {
        path: '/chi-tiet-san-pham',
        component: () => import('../components/KhachHang/ChiTietSanPham/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router