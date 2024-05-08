<template>
  <div class="card">
    <div class="card-header">
      <h5 class="m-0 d-inline">Quản Lý Danh Mục</h5>
      <button
        class="btn btn-primary float-end"
        data-bs-toggle="modal"
        data-bs-target="#createDanhMuc"
      >
        Thêm Mới Danh mục
      </button>
    </div>
    <div class="card-body">
      <table class="table table-bordered align-middle text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên Danh Mục</th>
            <th>Tình Trạng</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in load_data" :key="key">
            <td>{{ key + 1 }}</td>
            <td>{{ value.ten_danh_muc }}</td>
            <td>
              <button v-if="value.tinh_trang" class="btn btn-success">
                Đã Duyệt
              </button>
              <button v-else class="btn btn-danger">Chưa Duyệt</button>
            </td>
            <td>
              <button
                data-bs-toggle="modal"
                data-bs-target="#deleteDanhMuc"
                v-on:click="xoa_danh_muc = value"
                class="btn btn-danger"
              >
                Xóa Danh Mục
              </button>
              <button
                data-bs-toggle="modal"
                data-bs-target="#updateDanhMuc"
                v-on:click="Object.assign(update_danh_muc, value)"
                class="btn btn-primary ms-2"
              >
                Sửa Danh Mục
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Modal Create-->
      <div
        class="modal fade"
        id="createDanhMuc"
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
                Thêm Mới Danh Mục
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <label>Tên Danh Mục</label>
              <input
                v-model="them_moi_danh_muc.ten_danh_muc"
                type="text"
                class="form-control"
              />
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
                v-on:click="themMoiDanhMuc()"
                type="button"
                class="btn btn-primary"
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
        id="deleteDanhMuc"
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
              Bạn Có Chắc Chắn Muốn Xóa Danh Mục
              <b>{{ xoa_danh_muc.ten_danh_muc }}</b>
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
                v-on:click="deleteDanhMuc()"
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

      <!-- Modal Update-->
      <div
        class="modal fade"
        id="updateDanhMuc"
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
              <label>Tên Danh Mục</label>
              <input
                v-model="update_danh_muc.ten_danh_muc"
                type="text"
                class="form-control"
              />
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
                v-on:click="updateDanhMuc()"
                type="button"
                class="btn btn-primary"
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
      load_data: [],
      them_moi_danh_muc: {},
      xoa_danh_muc: {},
      update_danh_muc: {},
    };
  },
  mounted() {
    this.getDanhMuc();
  },
  methods: {
    getDanhMuc() {
      axios
        .get("http://127.0.0.1:8000/api/admin/danh-muc/get-data")
        .then((res) => {
          this.load_data = res.data.data;
        });
    },
    themMoiDanhMuc() {
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/danh-muc/them-moi",
          this.them_moi_danh_muc
        )
        .then((res) => {
          if (res.data.status) {
            toaster.success(res.data.message);
            this.getDanhMuc();
          }
        });
    },
    deleteDanhMuc() {
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/danh-muc/delete-data",
          this.xoa_danh_muc
        )
        .then((res) => {
          if (res.data.status) {
            toaster.success(res.data.message);
            this.getDanhMuc();
          } else {
            toaster.danger(res.data.message);
          }
        });
    },
    updateDanhMuc() {
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/danh-muc/update-data",
          this.update_danh_muc
        )
        .then((res) => {
          if (res.data.status) {
            toaster.success(res.data.message);
            this.getDanhMuc();
          } else {
            toaster.danger(res.data.message);
          }
        });
    },
  },
};
</script>
