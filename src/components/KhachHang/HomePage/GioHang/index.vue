<template>
  <div class="wrapper">
    <div class="container">
      <div class="card mt-5 p-3">
        <div class="row align-items-center">
          <div class="col-lg-3 text-center">Sản phẩm</div>
          <div class="col-lg-3 text-center">Đơn giá</div>
          <div class="col-lg-3 text-center">Số lượng</div>
          <div class="col-lg-3 text-center">Thành tiền</div>
        </div>
      </div>

      <div class="card mt-1" style="padding: 20px">
        <div class="row align-items-center">
          <div class="col-lg-3 text-center">
            <img
              style="width: 40px"
              src="../../../assets/images/hinhnendn.jpeg"
            />
            LCD Monitor
          </div>
          <div class="col-lg-3 text-center">$650</div>
          <div class="col-lg-3 text-center">
            <input type="number" value="1" class="form-control" />
          </div>
          <div class="col-lg-3 text-center">$650</div>
        </div>
      </div>

      <div class="card mt-1" style="padding: 20px">
        <div class="row align-items-center">
          <div class="col-lg-3 text-center">
            <img
              style="width: 40px"
              src="../../../assets/images/hinhnendn.jpeg"
            />
            LCD Monitor
          </div>
          <div class="col-lg-3 text-center">$650</div>
          <div class="col-lg-3 text-center">
            <input type="number" value="1" class="form-control" />
          </div>
          <div class="col-lg-3 text-center">$650</div>
        </div>
      </div>

      <div class="row align-items-center">
        <div class="col-lg-12 text-end">
          <div class="btn btn-outline-danger px-5">Xác nhận mua hàng</div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-lg-4">
          <input type="text" class="form-control" placeholder="Coupon Code" />
        </div>
        <div class="col-lg-4">
          <button
            class="btn btn-danger"
            style="padding: 6px 50px; background-color: #db4444"
          >
            Apply Coupon
          </button>
        </div>

        <div class="col-lg-4">
          <div class="card">
            <div class="card-header">
              <div class="row mt-2">
                <h5>Cart Total</h5>
              </div>
              <div class="row mt-2">
                <div class="col-lg-6">
                  <p>Subtotal:</p>
                </div>
                <div class="col-lg-6 text-end">$1750</div>
              </div>
              <hr />
              <div class="row mt-2">
                <div class="col-lg-6">
                  <p>Shopping:</p>
                </div>
                <div class="col-lg-6 text-end">Free</div>
              </div>
              <hr />
              <div class="row mt-2">
                <div class="col-lg-6">
                  <p>Total:</p>
                </div>
                <div class="col-lg-6 text-end">$1750</div>
              </div>

              <div class="row">
                <button
                  class="btn btn-danger"
                  style="background-color: #db4444"
                >
                  Process to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
