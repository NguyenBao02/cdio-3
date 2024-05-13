<template>
  <div class="card">
    <div class="card-header">
      <h5 class="m-0">Thêm Mới Sản Phẩm</h5>
    </div>
    <div class="card-body">
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Tiêu Đề Sản Phẩm</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <input
            v-model="create_data.tieu_de"
            type="text"
            class="form-control"
            placeholder="Tiêu Đề Sản Phẩm..."
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Slug Sản Phẩm</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <input
            v-model="create_data.slug_san_pham"
            type="text"
            class="form-control"
            placeholder="Slug Sản Phẩm..."
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Thumbnail Sản Phẩm</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <input
            v-model="create_data.thumbnail"
            type="text"
            class="form-control"
            placeholder="Link..."
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Giá Bán</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <input
            v-model="create_data.gia_ban"
            type="text"
            class="form-control"
            placeholder="Giá Bán"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Giá Khuyến Mãi</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <input
            v-model="create_data.gia_khuyen_mai"
            type="text"
            class="form-control"
            placeholder="Giá Khuyến Mãi..."
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Mô Tả</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <input
            v-model="create_data.mo_ta"
            type="text"
            class="form-control"
            placeholder="Mô Tả..."
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Tên Đại Lý</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <select v-model="create_data.id_dai_ly" class="form-select">
            <template v-for="(value, key) in list_dai_ly" :key="key">
              <option v-bind:value="value.id">{{ value.ten_dai_ly }}</option>
            </template>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Danh Mục</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <select v-model="create_data.id_danh_muc" class="form-select">
            <template v-for="(value, key) in list_danh_muc" :key="key">
              <option v-bind:value="value.id">{{ value.ten_danh_muc }}</option>
            </template>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-9 text-secondary">
          <button v-on:click="createData()" class="btn btn-primary px-4">
            Thêm Mới
          </button>
        </div>
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
      create_data: {},
      list_dai_ly: {},
      list_danh_muc: {},
    };
  },
  mounted() {
    this.listDaiLy();
    this.listDanhMuc();
  },
  methods: {
    listDaiLy() {
      axios.get("http://127.0.0.1:8000/api/admin/data-dai-ly").then((res) => {
        if (res.data.status) {
          this.list_dai_ly = res.data.data;
        } else {
          toaster.error("Thông Báo <br>" + res.data.message);
        }
      });
    },
    listDanhMuc() {
      axios
        .get("http://127.0.0.1:8000/api/admin/danh-muc/get-data")
        .then((res) => {
          if (res.data.status) {
            this.list_danh_muc = res.data.data;
          } else {
            toaster.error("Thông Báo <br>" + res.data.message);
          }
        });
    },
    createData() {
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/nhap-kho-san-pham",
          this.create_data,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("key_login"),
            },
          }
        )
        .then((res) => {
          if (res.data.status) {
            toaster.success("Thông Báo <br>" + res.data.message);
            this.create_dai_ly = {};
            this.mounted();
          } else {
            toaster.error("Thông Báo <br>" + res.data.message);
          }
        });
    },
  },
};
</script>
