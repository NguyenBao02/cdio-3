<template>
  <sidebar-menu :menu="menu" />
  <div style="padding-left: 290px">
    <div class="admin-content" style="padding: 50px">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import "../../assets/js/bootstrap.bundle.min.js";
import "../../assets/js/jquery.min.js";
import "../../assets/plugins/simplebar/js/simplebar.min.js";
import "../../assets/plugins/metismenu/js/metisMenu.min.js";
import "../../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js";
import "../../assets/js/index.js";
import "../../assets/js/app.js";
export default {
  name: "app",
  components: {},
  data() {
    return {
      menu: [
        {
          header: "Quản Lý",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Trang Chủ",
          icon: "fa fa-user",
        },
        {
          title: "Khách Hàng",
          icon: "fa fa-chart-area",
          child: [
            {
              title: "Quản Lý Tài Khoản",
              href: "/admin/quan-ly-tai-khoan",
            },
            {
              title: "Quản Lý Đơn Hàng",
              href: "/admin/quan-ly-don-hang",
            },
          ],
        },
        {
          title: "Đại Lý",
          icon: "fa fa-chart-area",
          child: [
            {
              title: "Thêm Mới Đại Lý",
              href: "/admin/them-moi-dai-ly",
            },
            {
              title: "Danh Sách Đại Lý",
              href: "/admin/danh-sach-dai-ly",
            },
          ],
        },
        {
          title: "Sản Phẩm",
          icon: "fa fa-chart-area",
          child: [
            {
              title: "Quản Lý Sản Phẩm",
              href: "/admin/quan-ly-san-pham",
            },
            {
              title: "Danh Mục Sản Phẩm",
              href: "/admin/danh-muc",
            },
          ],
        },
        {
          title: "Nhập Kho",
          icon: "fa fa-chart-area",
          child: [
            {
              title: "Quản Lý Nhập Kho",
              href: "/admin/quan-ly-nhap-kho",
            },
            {
              title: "Hóa Đơn Nhập Kho",
              href: "/admin/hoa-don-nhap-kho",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style>
@import "../../assets/plugins/simplebar/css/simplebar.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import "../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/bootstrap-extended.css";
@import "../../assets/css/app.css";
@import "../../assets/css/icons.css";
@import "../../assets/css/dark-theme.css";
@import "../../assets/css/semi-dark.css";
@import "../../assets/css/header-colors.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css");
</style>
