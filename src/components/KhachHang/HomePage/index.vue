<template>
  <div class="row">
    <div class="col-lg-3">
      <h5 class="ms-3">Danh Mục</h5>
      <div class="fm-menu">
        <div class="list-group list-group-flush">
          <a href="javascript:;" class="list-group-item">
            <span>Điện Thoại</span></a
          >
          <a href="javascript:;" class="list-group-item">
            <span>Laptop</span></a
          >
          <a href="javascript:;" class="list-group-item">
            <span>Màn Hình</span></a
          >
          <a href="javascript:;" class="list-group-item">
            <span>Thiết Bị Điện Tử</span></a
          >
          <a href="javascript:;" class="list-group-item">
            <span>Đồng Hồ</span></a
          >
          <a href="javascript:;" class="list-group-item">
            <span>Tai Nghe</span></a
          >
          <a href="javascript:;" class="list-group-item">
            <span>Quạt Điện</span></a
          >
          <a href="javascript:;" class="list-group-item">
            <span>Flash Sale</span></a
          >
          <a href="javascript:;" class="list-group-item">
            <span>Sản Phẩm Bán Chạy</span></a
          >
          <a href="javascript:;" class="list-group-item">
            <span>Hình Ảnh</span></a
          >
        </div>
      </div>
    </div>
    <div class="col-lg-9">
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class=""
          ></button
          ><button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            class=""
          ></button
          ><button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            class="active"
            aria-current="true"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item">
            <img
              src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/09/f1662574287.jpg"
              class="d-block w-100 img-fluid rounded"
              alt="..."
              style="height: 449px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.sforum.vn/sforum/wp-content/uploads/2019/12/%E1%BA%A3nh-b%C3%ACa-5-960x503.png"
              class="d-block w-100 img-fluid rounded"
              alt="..."
              style="height: 449px"
            />
          </div>
          <div class="carousel-item active">
            <img
              src="https://img.lovepik.com/photo/50060/1958.jpg_wh860.jpg"
              class="d-block w-100 img-fluid rounded"
              alt="..."
              style="height: 449px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
            data-sider-select-id="32dfa458-817c-4b14-9f60-cd8beee792df"
          ></span
          ><span class="visually-hidden">Previous</span></button
        ><button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span
          ><span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="alert alert-dark mt-5" role="alert">
      <marquee behavior="" direction="">
        Chào mừng các bạn đã đến shop của chúng tôi!
      </marquee>
    </div>
    <div class="mt-5">
      <button class="btn btn-danger">
        <b class="text-white">Hôm Nay</b>
      </button>
    </div>
    <div class="row mt-3">
      <div class="col-lg-12">
        <h2><b>Giảm Giá Sốc</b></h2>
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="row">
        <div id="carouselExampleCaptions_2" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions_2"
              data-bs-slide-to="0"
              class="active"
              aria-label="Slide 1"
              aria-current="true"
            ></button
            ><button
              type="button"
              data-bs-target="#carouselExampleCaptions_2"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              class=""
            ></button
            ><button
              type="button"
              data-bs-target="#carouselExampleCaptions_2"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <template v-for="(v, k) in ds_flash_sale" :key="k">
                  <template v-if="k < 3">
                    <div class="col-lg-4">
                      <div class="card">
                        <div class="card-body">
                          <router-link
                            :to="
                              '/chi-tiet-san-pham/' +
                              v.id +
                              '-' +
                              v.slug_san_pham
                            "
                          >
                            <div class="row">
                              <div class="col-md-12 text-center mb-2">
                                <img
                                  v-bind:src="v.thumbnail"
                                  alt=""
                                  class="img-fluid"
                                  style="height: 200px"
                                />
                              </div>
                              <h5 class="mt-0" style="height: 80px">
                                {{ v.tieu_de }}
                              </h5>
                              <br />
                              <p class="mb-2 me-1">
                                <b>Giá: </b>{{ v.gia_ban }} ₫
                              </p>
                              <p class="text-decoration-line-through">
                                {{ v.gia_khuyen_mai }} ₫
                              </p>
                              <hr />
                              <div class="d-flex align-items-center mt-2 fs-6">
                                <div class="cursor-pointer">
                                  <i class="bx bxs-star text-warning"></i
                                  ><i class="bx bxs-star text-warning"></i
                                  ><i class="bx bxs-star text-warning"></i
                                  ><i class="bx bxs-star text-warning"></i
                                  ><i class="bx bxs-star text-secondary"></i>
                                  (96)
                                </div>
                              </div>
                            </div>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </template>
                </template>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <template v-for="(v, k) in ds_flash_sale" :key="k">
                  <template v-if="k > 2 && k < 6">
                    <div class="col-lg-4 d-flex">
                      <div class="card">
                        <div class="card-body">
                          <router-link
                            :to="
                              '/chi-tiet-san-pham/' +
                              v.id +
                              '-' +
                              v.slug_san_pham
                            "
                          >
                            <div class="row">
                              <div class="col-md-12 text-center mb-2">
                                <img
                                  v-bind:src="v.thumbnail"
                                  alt=""
                                  class="img-fluid"
                                  style="height: 200px"
                                />
                              </div>
                              <h5 class="mt-0" style="height: 80px">
                                {{ v.tieu_de }}
                              </h5>
                              <br />
                              <p class="mb-2 me-1">
                                <b>Giá: </b>{{ v.gia_ban }} ₫
                              </p>
                              <p class="text-decoration-line-through">
                                {{ v.gia_khuyen_mai }} ₫
                              </p>
                              <hr />
                              <div class="d-flex align-items-center mt-2 fs-6">
                                <div class="cursor-pointer">
                                  <i class="bx bxs-star text-warning"></i
                                  ><i class="bx bxs-star text-warning"></i
                                  ><i class="bx bxs-star text-warning"></i
                                  ><i class="bx bxs-star text-warning"></i
                                  ><i class="bx bxs-star text-warning"></i>
                                  (150)
                                </div>
                              </div>
                            </div>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </template>
                </template>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions_2"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span
            ><span class="visually-hidden">Previous</span></button
          ><button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions_2"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span
            ><span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-danger">Xem Tất Cả</button>
      </div>
      <br />
    </div>
    <hr />
    <div class="mt-5">
      <button class="btn btn-danger">
        <b class="text-white">Danh Mục</b>
      </button>
    </div>
    <div class="row mt-5 product-grid">
      <div class="col">
        <div class="card text-center">
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/5113/85fd9c05-37dd-4e61-9345-f67be3cb3328.svg"
            class="mb-2"
            style="height: 60px; margin-top: 20px"
          />
          <b style="margin-bottom: 20px">Phone</b>
        </div>
      </div>
      <div class="col">
        <div class="card text-center">
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/5083/6a0f749e-dc8a-4d6b-a445-3bc7965cb929.svg"
            class="mb-2"
            style="height: 60px; margin-top: 20px"
          />
          <b style="margin-bottom: 20px">Computer</b>
        </div>
      </div>
      <div class="col">
        <div class="card text-center">
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/5133/7612facf-d461-4ed1-beee-02e33d59ebc5.svg"
            class="mb-2"
            style="height: 60px; margin-top: 20px"
          />
          <b style="margin-bottom: 20px">SmartWatch</b>
        </div>
      </div>
      <div class="col">
        <div class="card text-center">
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/5058/9b6acc9f-60bb-4f2c-b075-a24a1a85c99b.svg"
            class="mb-2"
            style="height: 60px; margin-top: 20px"
          />
          <b style="margin-bottom: 20px">Camera</b>
        </div>
      </div>
      <div class="col">
        <div class="card text-center">
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/5068/44646ead-477f-431b-96b7-8a6249ff821b.svg"
            class="mb-2"
            style="height: 60px; margin-top: 20px"
          />
          <b style="margin-bottom: 20px">HeadPhone</b>
        </div>
      </div>
      <div class="col">
        <div class="card text-center">
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/5063/46dd9282-e3ce-45a1-b2b7-dfcb1a85412a.svg"
            class="mb-2"
            style="height: 60px; margin-top: 20px"
          />
          <b style="margin-bottom: 20px">Gaming</b>
        </div>
      </div>
    </div>
    <hr />
    <div class="mt-5">
      <button class="btn btn-danger">
        <b class="text-white">Tháng Này</b>
      </button>
    </div>
    <div class="row mt-3">
      <div class="col-lg-4">
        <h2><b>Sản phẩm bán chạy</b></h2>
      </div>
      <div class="col-lg-8">
        <div class="float-lg-end">
          <button class="btn btn-danger">Xem Tất Cả</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div id="carouselExampleCaptions_3" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions_3"
            data-bs-slide-to="0"
            class="active"
            aria-label="Slide 1"
            aria-current="true"
          ></button
          ><button
            type="button"
            data-bs-target="#carouselExampleCaptions_3"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class=""
          ></button
          ><button
            type="button"
            data-bs-target="#carouselExampleCaptions_2"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <template v-for="(v, k) in ds_best_selling" :key="k">
                <template v-if="k < 3">
                  <div class="col-lg-4">
                    <div class="card">
                      <div class="card-body">
                        <router-link
                          :to="
                            '/chi-tiet-san-pham/' + v.id + '-' + v.slug_san_pham
                          "
                        >
                          <div class="row">
                            <div class="col-md-12 text-center mb-2">
                              <img
                                v-bind:src="v.thumbnail"
                                alt=""
                                class="img-fluid"
                                style="height: 200px"
                              />
                            </div>
                            <h5 class="mt-0" style="height: 80px">
                              {{ v.tieu_de }}
                            </h5>
                            <br />
                            <p class="mb-2 me-1">
                              <b>Giá: </b>{{ v.gia_ban }} ₫
                            </p>
                            <p class="text-decoration-line-through">
                              {{ v.gia_khuyen_mai }} ₫
                            </p>
                            <hr />
                            <div class="d-flex align-items-center mt-2 fs-6">
                              <div class="cursor-pointer">
                                <i class="bx bxs-star text-warning"></i
                                ><i class="bx bxs-star text-warning"></i
                                ><i class="bx bxs-star text-warning"></i
                                ><i class="bx bxs-star text-warning"></i
                                ><i class="bx bxs-star text-secondary"></i>
                                (96)
                              </div>
                            </div>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </template>
              </template>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <template v-for="(v, k) in ds_best_selling" :key="k">
                <template v-if="k > 2 && k < 6">
                  <div class="col-lg-4 d-flex">
                    <div class="card">
                      <div class="card-body">
                        <router-link
                          :to="
                            '/chi-tiet-san-pham/' + v.id + '-' + v.slug_san_pham
                          "
                        >
                          <div class="row">
                            <div class="col-md-12 text-center mb-2">
                              <img
                                v-bind:src="v.thumbnail"
                                alt=""
                                class="img-fluid"
                                style="height: 200px"
                              />
                            </div>
                            <h5 class="mt-0" style="height: 80px">
                              {{ v.tieu_de }}
                            </h5>
                            <br />
                            <p class="mb-2 me-1">
                              <b>Giá: </b>{{ v.gia_ban }} ₫
                            </p>
                            <p class="text-decoration-line-through">
                              {{ v.gia_khuyen_mai }} ₫
                            </p>
                            <hr />
                            <div class="d-flex align-items-center mt-2 fs-6">
                              <div class="cursor-pointer">
                                <i class="bx bxs-star text-warning"></i
                                ><i class="bx bxs-star text-warning"></i
                                ><i class="bx bxs-star text-warning"></i
                                ><i class="bx bxs-star text-warning"></i
                                ><i class="bx bxs-star text-secondary"></i>
                                (96)
                              </div>
                            </div>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </template>
              </template>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions_3"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span
          ><span class="visually-hidden">Previous</span></button
        ><button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions_3"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span
          ><span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <img
          src="https://png.pngtree.com/background/20220723/original/pngtree-special-offer-sale-80-percent-banner-background-picture-image_1738559.jpg"
          class="img-fluid rounded"
          style="width: 2000px"
        />
      </div>
    </div>
  </div>

  <div class="container">
    <div class="mt-5">
      <button class="btn btn-danger">
        <b class="text-white">Top Sản Phẩm</b>
      </button>
    </div>
    <div class="row mt-3">
      <div class="col-lg-4">
        <h2><b>Khám phá sản phẩm</b></h2>
      </div>
      <div class="col-lg-8">
        <div class="float-lg-end">
          <div class="position-relative">
            <input
              type="text"
              class="form-control ps-5"
              placeholder="Search Product..."
            />
            <span
              class="position-absolute top-50 product-show translate-middle-y"
              ><i class="bx bx-search"></i
            ></span>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="row mt-2 product-grid">
      <template v-for="(v, k) in ds_san_pham" :key="k">
        <div class="col-lg-3">
          <div class="card">
            <div class="card-body">
              <router-link
                :to="'/chi-tiet-san-pham/' + v.id + '-' + v.slug_san_pham"
              >
                <div class="row">
                  <div class="col-md-12 text-center mb-2">
                    <img
                      v-bind:src="v.thumbnail"
                      alt=""
                      class="img-fluid"
                      style="height: 200px"
                    />
                  </div>
                  <h5 class="mt-0" style="height: 90px">{{ v.tieu_de }}</h5>
                  <br />
                  <p class="mb-2 me-1"><b>Giá: </b>{{ v.gia_ban }} ₫</p>
                  <br />
                  <p class="text-decoration-line-through">
                    {{ v.gia_khuyen_mai }} ₫
                  </p>
                  <div class="d-flex align-items-center mt-2 fs-6">
                    <div class="cursor-pointer">
                      <i class="bx bxs-star text-warning"></i
                      ><i class="bx bxs-star text-warning"></i
                      ><i class="bx bxs-star text-warning"></i
                      ><i class="bx bxs-star text-warning"></i
                      ><i class="bx bxs-star text-secondary"></i> (96)
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </template>
    </div>
    <hr />
  </div>
  <div class="container">
    <div class="mt-5">
      <button class="btn btn-danger">
        <b class="text-white">Đặc Sắc Khác</b>
      </button>
    </div>
    <div class="row mt-3">
      <div class="col">
        <h2><b>Hàng mới về</b></h2>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-lg-5">
        <img
          src="https://images2.thanhnien.vn/528068263637045248/2023/3/8/sony-ps5-athum800x450-1678253694437576201780.jpg"
          class="img-fluid"
          style="height: 473px"
        />
      </div>
      <div class="col-lg-7">
        <div class="row">
          <img
            src="https://buraqstore-media.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/04/26051835/new-arrival.webp"
            class="img-fluid"
            style="height: 250px"
          />
        </div>
        <div class="row mt-4">
          <div class="col">
            <img
              src="https://i.ytimg.com/vi/nhdlrz8sF5I/maxresdefault.jpg"
              class="img-fluid"
              style="height: 200px; width: 600px"
            />
          </div>
          <div class="col">
            <img
              src="https://cdn4.beautinow.com/wp-content/uploads/2023/08/05281510_01_f9ccaaa65c5346b1a328f817b8a49da2.jpgv=1691390596"
              class="img-fluid"
              style="height: 200px; width: 600px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col text-center">
        <i class="fa-solid fa-truck fa-2xl"></i>
        <br />
        <br />
        <b>Giao Hàng Nhanh Chóng Và Miễn Phí</b>
        <p>Miễn phí giao hàng với các đơn hàng từ 140$</p>
      </div>
      <div class="col text-center">
        <i class="fa-solid fa-headphones-simple fa-2xl"></i>
        <br />
        <br />
        <b>Chăm Sóc Khách Hàng 24/7</b>
        <p>Dịch vụ chăm sóc khách hàng 24/7</p>
      </div>
      <div class="col text-center">
        <i class="fa-solid fa-shield-halved fa-2xl"></i>
        <br />
        <br />
        <b>Đảm Bảo Hoàn Tiền</b>
        <p>Chúng tôi sẽ hoàn lại tiền trong còng 30 ngày</p>
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
      ds_flash_sale: [],
      ds_san_pham: [],
      ds_best_selling: [],
    };
  },
  mounted() {
    this.LayDuLieuFlashSale();
    this.LayDuLieuSanPham();
    this.LayDuLieuBestSelling();
  },
  methods: {
    LayDuLieuFlashSale() {
      axios
        .get("http://127.0.0.1:8000/api/admin/danh-sach-flash-sale/data")
        .then((res) => {
          this.ds_flash_sale = res.data.data;
        });
    },
    LayDuLieuSanPham() {
      axios
        .get("http://127.0.0.1:8000/api/admin/danh-sach/data")
        .then((res) => {
          this.ds_san_pham = res.data.data;
        });
    },
    LayDuLieuBestSelling() {
      axios
        .get("http://127.0.0.1:8000/api/admin/danh-sach-best-selling/data")
        .then((res) => {
          this.ds_best_selling = res.data.data;
        });
    },
  },
};
</script>
<style></style>
s
