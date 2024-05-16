<template>
  <div class="card">
    <div class="card-header">
      <h5 class="m-0">Quản Lý Tài Khoản Người Dùng</h5>
    </div>
    <div class="card-body">
      <table class="table table-bordered align-middle text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Họ Và Tên</th>
            <th>Email</th>
            <th>Số Điện Thoại</th>
            <th>Tình Trạng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in list" :key="key">
            <td>{{ key + 1 }}</td>
            <td>{{ value.ho_va_ten }}</td>
            <td>{{ value.email }}</td>
            <td>{{ value.so_dien_thoai }}</td>
            <td>
              <button
                v-on:click="changeStatus(value)"
                v-if="value.tinh_trang"
                class="btn btn-success"
              >
                Đã Duyệt
              </button>
              <button
                v-on:click="changeStatus(value)"
                v-else
                class="btn btn-warning"
              >
                Chưa Duyệt
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";
import baseRequest from "../../../../../core/baseRequest";
const toaster = createToaster({ position: "top-right" });
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      baseRequest.get("admin/khach-hang/data").then((res) => {
        if (res.data.status) {
          this.list = res.data.data;
        } else {
          toaster.warning("Thông Báo <br>" + res.data.message);
        }
      });
    },
    changeStatus(value) {
      baseRequest.post("admin/khach-hang/change-status", value).then((res) => {
        if (res.data.status) {
          toaster.success("Thông Báo <br>" + res.data.message);
          this.getData();
        } else {
          toaster.error("Thông Báo <br>" + res.data.message);
        }
      });
    },
  },
};
</script>
