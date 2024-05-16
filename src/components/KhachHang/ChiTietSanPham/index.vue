<template>
  <div class="page-content">
    <!--breadcrumb-->
    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"></div>
    <!--end breadcrumb-->

    <div class="card">
      <div class="row g-0">
        <div class="col-md-4 border-end">
          <img
            v-bind:src="san_pham_chi_tiet.thumbnail"
            class="img-fluid"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">{{ san_pham_chi_tiet.tieu_de }}</h4>
            <div class="d-flex gap-3 py-3">
              <div class="cursor-pointer">
                <i class="bx bxs-star text-warning"></i>
                <i class="bx bxs-star text-warning"></i>
                <i class="bx bxs-star text-warning"></i>
                <i class="bx bxs-star text-warning"></i>
                <i class="bx bxs-star text-secondary"></i>
              </div>
              <div>142 reviews</div>
              <div class="text-success">
                <i class="bx bxs-cart-alt align-middle"></i> 134 orders
              </div>
            </div>
            <div class="mb-3">
              <p class="mb-0 fw-bold">
                <span class="me-2 text-decoration-line-through text-secondary"
                  >{{ san_pham_chi_tiet.gia_ban }}&nbsp;₫</span
                ><span>{{ san_pham_chi_tiet.gia_khuyen_mai }}&nbsp;₫</span>
              </p>
            </div>
            <p class="card-text fs-6">{{ san_pham_chi_tiet.mo_ta }}</p>
            <dl class="row">
              <!-- <dt class="col-sm-3">Model#</dt>
            <dd class="col-sm-9">Odsy-1000</dd>
          
            <dt class="col-sm-3">Color</dt>
            <dd class="col-sm-9">Brown</dd>
          
            <dt class="col-sm-3">Delivery</dt>
            <dd class="col-sm-9">Russia, USA, and Europe </dd> -->
            </dl>
            <hr />
            <div
              class="row row-cols-auto row-cols-1 row-cols-md-3 align-items-center"
            >
              <div class="col">
                <label class="form-label">Số Lượng</label>
                <div class="input-group input-spinner">
                  <button
                    class="btn btn-outline-danger"
                    type="button"
                    id="button-plus"
                    v-on:click="so_luong--"
                  >
                    −
                  </button>
                  <input v-model="so_luong" type="text" class="form-control" />
                  <button
                    class="btn btn-outline-danger"
                    type="button"
                    id="button-minus"
                    v-on:click="so_luong++"
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="col">
                <label class="form-label">Chọn Size</label>
                <div class="">
                  <label class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="select_size"
                      checked=""
                    />
                    <div class="form-check-label">S</div>
                  </label>
                  <label class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="select_size"
                      checked=""
                    />
                    <div class="form-check-label">M</div>
                  </label>

                  <label class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="select_size"
                      checked=""
                    />
                    <div class="form-check-label">L</div>
                  </label>
                </div>
              </div>
              <div class="col">
                <label class="form-label">Chọn Màu</label>
                <div class="">
                  <label class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="select_size"
                      checked=""
                    />
                    <div class="form-check-label">Đỏ</div>
                  </label>
                  <label class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="select_size"
                      checked=""
                    />
                    <div class="form-check-label">Trắng</div>
                  </label>

                  <label class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="select_size"
                      checked=""
                    />
                    <div class="form-check-label">Đen</div>
                  </label>
                </div>
              </div>
            </div>
            <div class="d-flex gap-3 mt-3">
              <a href="#" class="btn btn-danger">Mua Ngay</a>
              <a
                href="#"
                class="btn btn-outline-danger"
                v-on:click="themVaoGioHang()"
              >
                <span class="text">Thêm Vào Giỏ Hàng</span>
                <i class="bx bxs-cart-alt"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="card-body">
        <ul class="nav nav-tabs nav-primary mb-0" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              data-bs-toggle="tab"
              href="#primaryhome"
              role="tab"
              aria-selected="true"
            >
              <div class="d-flex align-items-center">
                <div class="tab-icon">
                  <i class="bx bx-comment-detail font-18 me-1"></i>
                </div>
                <div class="tab-title">Product Description</div>
              </div>
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              data-bs-toggle="tab"
              href="#primaryprofile"
              role="tab"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="d-flex align-items-center">
                <div class="tab-icon">
                  <i class="bx bx-bookmark-alt font-18 me-1"></i>
                </div>
                <div class="tab-title">Tags</div>
              </div>
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              data-bs-toggle="tab"
              href="#primarycontact"
              role="tab"
              aria-selected="false"
              tabindex="-1"
            >
              <div class="d-flex align-items-center">
                <div class="tab-icon">
                  <i class="bx bx-star font-18 me-1"></i>
                </div>
                <div class="tab-title">Reviews</div>
              </div>
            </a>
          </li>
        </ul>
        <div class="tab-content pt-3">
          {{ san_pham_chi_tiet.mo_ta }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import baseRequest from "../../../core/baseRequest";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
  props: ["id_san_pham", "slug_san_pham"],
  data() {
    return {
      san_pham_chi_tiet: {},
      so_luong: "1",
    };
  },
  mounted() {
    this.loadDataSanPhamChiTiet();
  },
  methods: {
    // load dữ liệu chi tiết sản phẩm
    loadDataSanPhamChiTiet() {
      baseRequest.get("san-pham/" + this.id_san_pham).then((res) => {
        this.san_pham_chi_tiet = res.data.data;
      });
    },

    themVaoGioHang() {
      var payload = {
        id_san_pham: this.id_san_pham,
        so_luong: this.so_luong,
      };

      baseRequest.post("them-vao-gio-hang", payload).then((res) => {
        if (res.data.status) {
          toaster.success("Thông báo<br>" + res.data.message);
        } else {
          toaster.error("Thông báo<br>" + res.data.message);
        }
      });
    },
  },
};
</script>
<style></style>
