<template>
   <div class="p-3 mb-2 bg-white text-dark" style="width: 100%;">
      <div class="container">
         <div class="row">
            <ol>
               <li style="display: inline-block; padding: 0 15px;">Tài khoản </li>/
               <li style="display: inline-block; padding: 0 15px;">Tài khoản của tôi </li>/
               <li style="display: inline-block; padding: 0 15px;">Sản phẩm </li>/
               <li style="display: inline-block; padding: 0 15px;">Xem giỏ hàng </li>/
               <li style="display: inline-block; padding: 0 15px;"><b>Thanh toán</b></li>
            </ol>
         </div>

         <h3 class="mt-4">Chi tiết thanh toán</h3>

         <div class="row">
            <div class="col-lg-5">
               <label>Họ Và Tên</label>
               <input type="text" class="form-control" placeholder="Nhập Họ Và Tên">
               <label class="mt-3">Tên Công Ty</label>
               <input type="text" class="form-control" placeholder="Nhập Tên Công Ty">
               <label class="mt-3">Địa Chỉ</label>
               <input type="text" class="form-control" placeholder="Nhập Địa Chỉ Nhận Hàng"> 
               <label class="mt-3">Số Điện Thoại</label>
               <input type="text" class="form-control" placeholder="Nhập số điện thoại">
               <label class="mt-3">Địa chỉ Email</label>
               <input type="text" class="form-control" placeholder="Nhập Địa Chỉ Email">
               <input type="checkbox" class="mt-3"> Lưu thông tin này để lần trả phòng nhanh hơn vào lần sau
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-5">
               <div class="row">
                  <div class="col-lg-2">
                     <img src="https://m.media-amazon.com/images/I/A1-zhBf7MoL._SL1500_.jpg" style="width: 40px;">
                  </div>
                  <div class="col-lg-4">
                     <h6>H1 Gamepad</h6>
                  </div>
                  <div class="col-lg-6 text-end">
                     <h6>$650</h6>
                  </div>
               </div>
               <div class="row mt-4">
                  <div class="col-lg-2">
                     <img src="https://m.media-amazon.com/images/I/A1-zhBf7MoL._SL1500_.jpg" style="width: 40px;">
                  </div>
                  <div class="col-lg-4">
                     <h6>H1 Gamepad</h6>
                  </div>
                  <div class="col-lg-6 text-end">
                     <h6>$650</h6>
                  </div>
               </div>
               <div class="row mt-4">
                  <div class="col-lg-6">
                     <p>Subtotal:</p>
                  </div>
                  <div class="col-lg-6 text-end">
                     $1750
                  </div>
               </div>
               <hr>
               <div class="row">
                  <div class="col-lg-6">
                     <p>Shopping:</p>
                  </div>
                  <div class="col-lg-6 text-end">
                     Free
                  </div>
               </div>
               <hr>
               <div class="row">
                  <div class="col-lg-6">
                     <p>Total:</p>
                  </div>
                  <div class="col-lg-6 text-end">
                     $1750
                  </div>
               </div>
               <div class="row mt-2">
                  <div class="col-lg-7">
                     <p style="display: block;"><input name="thanhtoan" type="radio" > Thanh Toán Ngay</p>
                     <input name="thanhtoan" type="radio" > Thanh Khi Nhận Hàng
                  </div>
                  
                  <div class="col-lg-5">
                     <img src="http://incardgiare.vn/Images/Upload/images/in%20an%20tong%20hop/tong%20hop%20lo%20go%20ngan%20hang/vietinbank.jpg" style="width: 60px;">
                     <img src="http://incardgiare.vn/Images/Upload/images/in%20an%20tong%20hop/tong%20hop%20lo%20go%20ngan%20hang/logo-vietcombank-moi-nhat.jpg" style="width: 60px;">
                     <img src="http://incardgiare.vn/Images/Upload/images/in%20an%20tong%20hop/tong%20hop%20lo%20go%20ngan%20hang/vib-Logo.jpg" style="width: 60px;">
                     <img src="http://incardgiare.vn/Images/Upload/images/in%20an%20tong%20hop/tong%20hop%20lo%20go%20ngan%20hang/logo%20ngan%20hang%20quan%20doi.jpg" style="width: 40px;">
                     <img src="http://incardgiare.vn/Images/Upload/images/in%20an%20tong%20hop/tong%20hop%20lo%20go%20ngan%20hang/logo-ngan-hang-sea-bank.jpg" style="width: 40px;">
                     <img src="http://incardgiare.vn/Images/Upload/images/in%20an%20tong%20hop/tong%20hop%20lo%20go%20ngan%20hang/logoACB.gif" style="width: 60px;">
                     <img src="http://incardgiare.vn/Images/Upload/images/in%20an%20tong%20hop/tong%20hop%20lo%20go%20ngan%20hang/logo-ngan-hang-Agribank1.jpg" style="width: 40px;">
                  </div>
               </div>               <div class="row mt-4">
                  <div class="col-lg-4">
                     <input type="text" class="form-control" placeholder="Nhập Mã">
                  </div>
                  <div class="col-lg-8">
                     <button class="btn btn-danger">Áp dụng phiếu giảm giá</button>
                  </div>
               </div>
               <div class="row mt-4">
                  <div class="col-lg-6">
                     <button class="btn btn-danger">Đặt hàng</button>
                  </div>
               </div>
            </div>
            <div class="col-lg-1"></div>
         </div>
      </div>
   </div>
</template>
<script>
export default {

}
</script>
<style></style>