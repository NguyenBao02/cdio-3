<template>
  <div class="card">
    <div class="card-header">
      <h5 class="m-0">Danh Sách Đại Lý</h5>
    </div>
    <div class="card-body">
      <table class="table table-bordered align-middle text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên Đại Lý</th>
            <th>Số Điện Thoại</th>
            <th>Email</th>
            <th>Địa Chỉ</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in load_data" :key="key">
            <td>{{ key + 1 }}</td>
            <td>{{ value.ten_dai_ly }}</td>
            <td>{{ value.so_dien_thoai }}</td>
            <td>{{ value.email }}</td>
            <td>{{ value.dia_chi }}</td>
            <td>
              <button
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#updateDaiLy"
                v-on:click="Object.assign(update_data, value)"
              >
                <i class="fa-solid fa-pen"></i>
              </button>
              <button
                class="btn btn-danger ms-2"
                data-bs-toggle="modal"
                data-bs-target="#deleteDaiLy"
                v-on:click="delete_data = value"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Modal Update-->
      <div
        class="modal fade"
        id="updateDaiLy"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Chỉnh Sửa Đại Lý
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-6 mb-2">
                  <label class="mb-1">Tên Đại Lý</label>
                  <input
                    v-model="update_data.ten_dai_ly"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="col-lg-6 mb-2">
                  <label class="mb-1">Số Điện Thoại</label>
                  <input
                    v-model="update_data.so_dien_thoai"
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 mb-2">
                  <label class="mb-1">Email</label>
                  <input
                    v-model="update_data.email"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="col-lg-6 mb-2">
                  <label class="mb-1">Địa Chỉ</label>
                  <input
                    v-model="update_data.dia_chi"
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Hủy
              </button>
              <button
                v-on:click="updateData()"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Xác Nhận
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal Delete-->
      <div
        class="modal fade"
        id="deleteDaiLy"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Thông Báo
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Bạn Có Chắc Chắn Muốn Xóa Đại Lý
              <b>{{ delete_data.ten_dai_ly }}</b>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Hủy
              </button>
              <button
                v-on:click="deleteData()"
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Xác Nhận
              </button>
            </div>
          </div>
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
      load_data: {},
      update_data: {},
      delete_data: {},
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get("http://127.0.0.1:8000/api/admin/data-dai-ly").then((res) => {
        if (res.data.status) {
          this.load_data = res.data.data;
        } else {
          toaster.error("Thông Báo <br>" + res.data.message);
        }
      });
    },
    updateData() {
      axios
        .post("http://127.0.0.1:8000/api/admin/update-dai-ly", this.update_data)
        .then((res) => {
          if (res.data.status) {
            toaster.success("Thông Báo <br>" + res.data.message);
            this.loadData();
          } else {
            toaster.error("Thông Báo <br>" + res.data.message);
          }
        });
    },
    deleteData() {
      axios
        .post("http://127.0.0.1:8000/api/admin/delete-dai-ly", this.delete_data)
        .then((res) => {
          if (res.data.status) {
            toaster.success("Thông Báo <br>" + res.data.message);
            this.loadData();
          } else {
            toaster.error("Thông Báo <br>" + res.data.message);
          }
        });
    },
  },
};
</script>
