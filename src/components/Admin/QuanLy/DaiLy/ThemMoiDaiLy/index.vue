<template>
  <div class="card">
    <div class="card-header">
      <h5 class="m-0">Thêm Mới Đại Lý</h5>
    </div>
    <div class="card-body">
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Tên Đại Lý</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <input
            v-model="create_dai_ly.ten_dai_ly"
            type="text"
            class="form-control"
            placeholder="Tên Đại Lý..."
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Email</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <input
            v-model="create_dai_ly.email"
            type="text"
            class="form-control"
            placeholder="Email..."
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Số Điện Thoại</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <input
            v-model="create_dai_ly.so_dien_thoai"
            type="text"
            class="form-control"
            placeholder="(84+)..."
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-3">
          <h6 class="mb-0">Địa Chỉ</h6>
        </div>
        <div class="col-sm-9 text-secondary">
          <input
            v-model="create_dai_ly.dia_chi"
            type="text"
            class="form-control"
            placeholder="Địa Chỉ"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-9 text-secondary">
          <button v-on:click="createDaiLy()" class="btn btn-primary px-4">
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
      create_dai_ly: {},
    };
  },
  mounted() {},
  methods: {
    createDaiLy() {
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/them-moi-dai-ly",
          this.create_dai_ly
        )
        .then((res) => {
          if (res.data.status) {
            toaster.success("Thông Báo <br>" + res.data.message);
            this.create_dai_ly = {};
          } else {
            toaster.error("Thông Báo <br>" + res.data.message);
          }
        });
    },
  },
};
</script>
