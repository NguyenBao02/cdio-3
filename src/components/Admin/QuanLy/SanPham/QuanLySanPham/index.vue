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
            <th>Ảnh</th>
            <th>Mô Tả</th>
            <th>Giá Bán</th>
            <th>Giá Khuyến Mãi</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in load_data" :key="key">
            <td>{{ key + 1 }}</td>
            <td>{{ value.tieu_de }}</td>
            <td>
              <img
                style="height: 40px"
                class="img-fluid"
                v-bind:src="value.thumbnail"
              />
            </td>
            <td>{{ value.mo_ta }}</td>
            <td>{{ formatToVND(value.gia_ban) }}</td>
            <td>{{ formatToVND(value.gia_ban) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      load_data: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("http://127.0.0.1:8000/api/admin/san-pham/get-data")
        .then((res) => {
          this.load_data = res.data.data;
        });
    },
    formatToVND(number) {
      return number.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    },
  },
};
</script>
