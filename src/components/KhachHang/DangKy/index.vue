<template>
  <div class="wrapper">
    <div
      class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0"
    >
      <div class="container">
        <div class="col mx-auto">
          <div class="row">
            <div class="col-8">
              <img
                class="d-block w-100"
                style="height: 600px"
                src="../../../assets/images/hinhnendn.jpeg"
              />
            </div>
            <div class="col-4">
              <div class="text-center">
                <h3 class="">Đăng ký</h3>
              </div>
              <div class="login-separater text-center mb-4">
                <span>ĐĂNG KÝ VỚI EMAIL</span>
                <hr />
              </div>
              <div class="form-body mt-3">
                <div class="row g-3">
                  <div class="col-12">
                    <label for="inputEmailAddress" class="form-label"
                      >Họ và Tên</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmailAddress"
                      placeholder="Họ và Tên"
                    />
                  </div>
                  <div class="col-12">
                    <label for="inputEmailAddress" class="form-label"
                      >Email</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmailAddress"
                      placeholder="Email"
                    />
                  </div>
                  <div class="col-12">
                    <label for="inputEmailAddress" class="form-label"
                      >Số Điện Thoại</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmailAddress"
                      placeholder="Số di động"
                    />
                  </div>
                  <div class="col-12">
                    <label for="inputChoosePassword" class="form-label"
                      >Mật khẩu</label
                    >

                    <div class="input-group" id="show_hide_password">
                      <input
                        type="password"
                        class="form-control border-end-0"
                        id="inputChoosePassword"
                        placeholder="Mật khẩu"
                      />
                      <a
                        href="javascript:;"
                        class="input-group-text bg-transparent"
                        ><i class="bx bx-hide"></i
                      ></a>
                    </div>
                  </div>
                  <div class="col-12">
                    <label for="inputChoosePassword" class="form-label"
                      >Nhập Lại mật khẩu</label
                    >

                    <div class="input-group" id="show_hide_password">
                      <input
                        type="password"
                        class="form-control border-end-0"
                        id="inputChoosePassword"
                        placeholder="Mật khẩu"
                      />
                      <a
                        href="javascript:;"
                        class="input-group-text bg-transparent"
                        ><i class="bx bx-hide"></i
                      ></a>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="d-grid">
                      <button
                        class="btn btn-danger"
                        style="background-color: #db4444"
                      >
                        <i class="bx bx-user"></i>Đăng Ký
                      </button>
                    </div>
                    <p class="mt-4 text-center">
                      Bạn đã có tài khoản?
                      <a style="color: #db4444; cursor: pointer">
                        <RouterLink to="/dang-nhap"
                        style="color: #db4444 ">Đăng nhập tại đây</RouterLink
                        >
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end row-->
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
