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
                <h3 class="">Đăng nhập</h3>
              </div>
              <div class="login-separater text-center mb-4">
                <span>ĐĂNG NHẬP VỚI EMAIL</span>
                <hr />
              </div>
              <div class="form-body">
                <div class="row g-3">
                  <div class="col-12">
                    <label for="inputEmailAddress" class="form-label"
                      >Email</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmailAddress"
                      placeholder="Email"
                      v-model="login_data.email"
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
                        v-model="login_data.password"
                      />
                      <a
                        href="javascript:;"
                        class="input-group-text bg-transparent"
                        ><i class="bx bx-hide"></i
                      ></a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        style="background-color: #db4444"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                        checked=""
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckChecked"
                        >Lưu mật khẩu</label
                      >
                    </div>
                  </div>
                  <div class="col-md-6 text-end">
                    <a
                      href="authentication-forgot-password.html "
                      style="color: #db4444"
                      >Quên mật khẩu?</a
                    >
                  </div>
                  <div class="col-12">
                    <div class="d-grid">
                      <button
                        class="btn btn-danger"
                        style="background-color: #db4444"
                        v-on:click="loginData()"
                      >
                        <i class="bx bxs-lock-open"></i>Đăng nhập
                      </button>
                      <p class="mt-4 text-center">
                        Bạn chưa có tài khoản?
                        <a
                          href="authentication-signup.html"
                          style="color: #db4444"
                        >
                          <RouterLink to="/admin/dang-ky" style="color: #db4444"
                            >Đăng ký tại đây</RouterLink
                          >
                        </a>
                      </p>
                    </div>
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
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });

export default {
  data() {
    return {
      login_data: {},
    };
  },
  mounted() {},
  methods: {
    loginData() {
      axios
        .post("http://127.0.0.1:8000/api/auth/admin/login", this.login_data)
        .then((res) => {
          if (res.data.status) {
            toaster.success("Thông Báo <br>" + res.data.message);
            this.login_data = {};
            localStorage.setItem("key_login", res.data.access_token);
            this.$router.push("/admin");
          } else {
            toaster.error("Thông Báo <br>" + res.data.message);
            this.login_data = {};
          }
        });
    },
  },
};
</script>
<style></style>
