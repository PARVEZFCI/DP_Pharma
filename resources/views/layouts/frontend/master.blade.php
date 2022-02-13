<!DOCTYPE html>
<html lang="en">
	<head>
	    <title>Dhaka Pharmacy</title>
	    <meta charset="UTF-8">
        @php
            $details=\App\Models\CompanyDetails::first();
        @endphp
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="description" content="Pharmecy Template">
		<meta name="keywords" content="">
		<meta name="csrf-token" content="{{ csrf_token() }}">
        {{-- <link rel="preconnect" href="https://fonts.gstatic.com"> --}}
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
        <link rel="apple-touch-icon" href="/{{ $details->favicon ? $details->favicon : 'frontend_assets/assets/img/logo.jpg' }}">
        <link rel="shortcut icon" type="image/x-icon" href="/{{ $details->favicon ? $details->favicon : 'frontend_assets/assets/img/logo.jpg' }}">
	    <!-- Bootstrap Css -->
	    <link rel="stylesheet" type="text/css" href="/frontend_assets/assets/css/bootstrap.min.css">

	    <!-- Fonts Css -->
	    <link rel="stylesheet" type="text/css" href="/frontend_assets/assets/fontawesome/css/all.min.css">
	    <link rel="stylesheet" type="text/css" href="/frontend_assets/assets/fontawesome/css/fontawesome.min.css">

	    <!-- Main Css -->
	    <link rel="stylesheet" type="text/css" href="/frontend_assets/assets/css/theme.css">

	    <!-- Responsive Css -->
	    <link rel="stylesheet" type="text/css" href="/frontend_assets/assets/css/responsive.css">
        <style>
            /* @media (max-width: 500px){
                .shopping-bag{


                }
            } */
        </style>
	</head>
	<body id="home">

		<div id="app">
			<div class="page-wrapper">
				<!-- Header -->
				{{-- <front-navbar></front-navbar> --}}
				@include('layouts.frontend.navbar')
				<!-- End Main Header -->

		        <!-- Shopping Cart -->
		    	@include('layouts.frontend.checkout_bag')
		        <!-- End Shopping Cart -->
				<!-- Item Section -->
				@yield('main_content')
				<!-- End Item Section-->

				<!-- Footer  -->
				@include('layouts.frontend.footer')
				<!-- End Footer -->

			</div>
		</div>


	    <!-- Proper Js -->
	    <script src="/frontend_assets/assets/js/popper.min.js"></script>
	    <!-- Jquery Slim Js -->
	    <script src="/frontend_assets/assets/js/jquery-3.2.1.slim.min.js"></script>
	    <!-- Jquery Js -->
	    <script src="/frontend_assets/assets/js/jquery.min.js"></script>
	    <!-- Bootstrap Js -->
	    <script src="/frontend_assets/assets/js/bootstrap.min.js"></script>
	    <!-- Main JS -->
	    <script src="/frontend_assets/assets/js/main.js"></script>
        <script src="js/app.js"></script>

        @yield('main_js')
	</body>
</html>
