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
										 <h3 class="">Đăng nhập</h3>
									 </div>
										 <div class="d-grid ">
											 <a class="btn my-4 shadow-sm btn-white" href="javascript:;"> <span class="d-flex justify-content-center align-items-center">
										 <img class="me-2" src="../../../assets/images/icons/search.svg" width="16" alt="Image Description">
										 <span>Đăng nhập với Google</span>
											 </span>
										 </a>
									 </div>
									 <div class="login-separater text-center  mb-4"> <span>HOẶC ĐĂNG NHẬP VỚI EMAIL</span>
										 <hr>
									 </div>
									 <div class="form-body">
										 <form class="row g-3">
											 <div class="col-12">
												 <label for="inputEmailAddress" class="form-label">Số di động hoặc Email</label>
												 <input type="email" class="form-control" id="inputEmailAddress" placeholder="Số di động hoặc email">
											 </div>
											 <div class="col-12">
												 <label for="inputChoosePassword" class="form-label">Nhập mật khẩu</label>
												 <div class="input-group" id="show_hide_password">
													 <input type="password" class="form-control border-end-0" id="inputChoosePassword" value="12345678" placeholder="Mật khẩu"> <a href="javascript:;" class="input-group-text bg-transparent"><i class="bx bx-hide"></i></a>
												 </div>
											 </div>
											 <div class="col-md-6" >
												 <div class="form-check form-switch" >
													 <input class="form-check-input" style="background-color:#DB4444"  type="checkbox" id="flexSwitchCheckChecked" checked="" >
													 <label class="form-check-label  "  for="flexSwitchCheckChecked" >Lưu mật khẩu</label>
												 </div>
											 </div>
											 <div class="col-md-6 text-end " > <a href="authentication-forgot-password.html " style="color:#DB4444">Quên mật khẩu?</a>
											 </div>
											 <div class="col-12">
												 <div class="d-grid">
													 <button type="submit"  class="btn btn-danger" style="background-color:#DB4444" ><i class="bx bxs-lock-open" ></i >Đăng nhập</button>
														 <p class="mt-4 text-center">Bạn chưa có tài khoản?  <a href="authentication-signup.html" style="color:#DB4444">Đăng ký tại đây </a></p>
												 </div>
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