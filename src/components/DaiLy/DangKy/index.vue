<template >
    <div class="wrapper">
         <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
             <div class="container">
                     <div class="col mx-auto">
                         <div class="card ">
                         <div class="card-body">
                             <div class="row"> 
                             <div class="col-8">
                                     <img class="d-block w-100" style="height:600px"  src="../../../assets/images/hinhnendn.jpeg" >
                                 </div>
                                     <div class="col-4 mt-5 ">
                                         <div class="text-center">
                                                 <h3 class="">Đăng ký</h3>
                                             </div>
                                                 <div class="d-grid">
                                                     <a class="btn my-4 shadow-sm btn-white" href="javascript:;"> <span
                                                             class="d-flex justify-content-center align-items-center">
                                                             <img class="me-2" src="../../../assets/images/icons/search.svg" width="16"
                                                                 alt="Image Description">
                                                             <span>Đăng ký với Google</span>
                                                         </span>
                                                     </a>
                                                 </div>
                                                 <div class="login-separater text-center mb-4"> <span>HOẶC ĐĂNG KÝ VỚI EMAIL</span>
                                                     <hr>
                                                 </div>
                                                 <div class="form-body mt-3">
                                                     <form class="row g-3">
                                                     <div class="col-12">
                                                             <label for="inputEmailAddress" class="form-label">Họ và Tên</label>
                                                             <input type="email" class="form-control" id="inputEmailAddress"
                                                                 placeholder="Họ và Tên">
                                                         </div>
                                                         <div class="col-12">
                                                             <label for="inputEmailAddress" class="form-label">Số di động hoặc Email</label>
                                                             <input type="email" class="form-control" id="inputEmailAddress" 
                                                                 placeholder="Số di động hoặc email">
                                                         </div>
                                                         <div class="col-12">
                                                             <label for="inputChoosePassword" class="form-label">Nhập mật khẩu</label>
 
                                                             <div class="input-group" id="show_hide_password">
                                                                 <input type="password" class="form-control border-end-0"
                                                                     id="inputChoosePassword" value="12345678" placeholder="Mật khẩu ">
                                                                 <a href="javascript:;" class="input-group-text bg-transparent"><i
                                                                         class="bx bx-hide"></i></a>
                                                             </div>
                                                         </div>
                                                     <div class="col-12">
                                                         <div class="d-grid">
                                                             <button type="submit" class="btn btn-danger" style="background-color:#DB4444"><i class="bx bx-user"></i>Đăng Ký</button>
                                                         </div>
                                                     <p class="mt-4  text-center">Bạn đã có tài khoản? <a href="authentication-signin.html" style="color:#DB4444">   Đăng nhập tại đây</a> 
                                                 </p>
                                             </div>
                                         </form>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <!--end row-->
             </div>
         </div>
     </div>
 </template>
 <script>
 export default {
     
 }
 </script>
 <style >
     
 </style>