<template>
  <nav class="navbar navbar-expand">
    <div class="topbar-logo-header me-4 ps-3 pe-5">
      <div class="">
        <h4 class="logo-text text-dark fs-6">NEW BRAND</h4>
      </div>
    </div>
    <div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div>
    <div class="search-bar flex-grow-1">
      <div class="position-relative search-bar-box">
        <input
          type="text"
          class="form-control search-control"
          placeholder="Tìm Kiếm"
        />
        <span class="position-absolute top-50 search-show translate-middle-y"
          ><i class="bx bx-search"></i
        ></span>
        <span class="position-absolute top-50 search-close translate-middle-y"
          ><i class="bx bx-x"></i
        ></span>
      </div>
    </div>
    <div class="top-menu ms-auto me-4">
      <ul class="navbar-nav align-items-center">
        <li class="nav-item mobile-search-icon">
          <a class="nav-link" href="#"> <i class="bx bx-search"></i> </a>
        </li>
        <li class="nav-item dropdown dropdown-large">
          <router-link
            to="/not-found"
            class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
          >
            <i class="fa-solid fa-heart"></i>
          </router-link>
        </li>
        <li class="nav-item dropdown dropdown-large">
          <router-link
            to="/gio-hang"
            class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
          >
            <i class="fa-solid fa-cart-shopping"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div v-if="auth" class="user-box dropdown pe-3 ps-4">
      <a
        class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div class="user-info ps-3">
          <p class="user-name mb-0">{{ ten_kh }}</p>
        </div>
      </a>
      <ul class="dropdown-menu dropdown-menu-end">
        <li>
          <router-link to="/profile">
            <a class="dropdown-item" href="javascript:;"
              ><i class="bx bx-user"></i><span>Profile</span></a
            >
          </router-link>
        </li>
        <li>
          <a class="dropdown-item" href="javascript:;"
            ><i class="bx bx-home-circle"></i><span>Đơn Hàng</span></a
          >
        </li>
        <li>
          <div class="dropdown-divider mb-0"></div>
        </li>
        <li>
          <a class="dropdown-item" href="javascript:;"
            ><i class="bx bx-log-out-circle"></i><span>Đăng Xuất</span></a
          >
        </li>
      </ul>
    </div>
    <div v-else class="user-box dropdown pe-3 ps-4">
      <router-link to="/khach-hang/dang-nhap">
        <button type="button" class="btn btn-outline-dark">Đăng Nhập</button>
      </router-link>
      <router-link to="/khach-hang/dang-ky"
        ><button type="button" class="btn btn-dark ms-2">
          Đăng Ký
        </button></router-link
      >
    </div>
  </nav>
</template>
<script>
import baseRequest from "../../core/baseRequest";
export default {
  data() {
    return {
      auth: false,
      ten_kh: "",
    };
  },
  mounted() {
    this.checkLogin();
    this.ten_kh = localStorage.getItem("ten_kh");
  },
  methods: {
    checkLogin() {
      baseRequest.post("khach-hang/check-login").then((res) => {
        if (res.data.status) {
          this.auth = true;
        }
      });
    },
  },
};
</script>
<style></style>
