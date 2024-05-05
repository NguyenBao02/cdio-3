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
          <a
            class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-heart"></i>
          </a>
        </li>
        <li class="nav-item dropdown dropdown-large">
          <a
            class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="user-box dropdown pe-3 ps-4">
      <a
        class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div class="user-info ps-3">
          <p class="user-name mb-0">Pauline Seitz</p>
        </div>
      </a>
      <ul class="dropdown-menu dropdown-menu-end">
        <li>
          <a class="dropdown-item" href="javascript:;"
            ><i class="bx bx-user"></i><span>Profile</span></a
          >
        </li>
        <li>
          <a class="dropdown-item" href="javascript:;"
            ><i class="bx bx-cog"></i><span>Settings</span></a
          >
        </li>
        <li>
          <a class="dropdown-item" href="javascript:;"
            ><i class="bx bx-home-circle"></i><span>Dashboard</span></a
          >
        </li>
        <li>
          <a class="dropdown-item" href="javascript:;"
            ><i class="bx bx-dollar-circle"></i><span>Earnings</span></a
          >
        </li>
        <li>
          <a class="dropdown-item" href="javascript:;"
            ><i class="bx bx-download"></i><span>Downloads</span></a
          >
        </li>
        <li>
          <div class="dropdown-divider mb-0"></div>
        </li>
        <li>
          <a class="dropdown-item" href="javascript:;"
            ><i class="bx bx-log-out-circle"></i><span>Logout</span></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style></style>
