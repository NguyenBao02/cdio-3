<template>
  <div class="card">
    <div class="card-header">
      <h5 class="m-0">Quản Lý Sản Phẩm</h5>
    </div>
    <div class="card-body">
      <table class="table table-bordered align-middle text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên Sản Phẩm</th>
            <th>Nhân Viên Nhập Kho</th>
            <th>Thời Gian Nhập Kho</th>
            <th>Thời Gian Chỉnh Sửa</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in load_data" :key="key">
            <td>{{ key + 1 }}</td>
            <td>{{ value.ten_san_pham }}</td>
            <td>{{ value.ho_va_ten }}</td>
            <td>{{ formattedDate(value.created_at) }}</td>
            <td>{{ formattedDate(value.updated_at) }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
  data() {
    return {
      load_data: {},
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios
        .get("http://127.0.0.1:8000/api/admin/nhap-kho/get-data", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_login"),
          },
        })
        .then((res) => {
          if (res.data.status) {
            this.load_data = res.data.data;
            console.log(this.load_data);
          } else {
            toaster.error("Thông Báo <br>" + res.data.message);
          }
        });
    },
    formattedDate(ngay) {
      return dayjs(ngay).format("DD/MM/YYYY");
    },
  },
};
</script>
