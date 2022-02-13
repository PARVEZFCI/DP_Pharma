
{{-- <front-navbar></front-navbar> --}}
<header class="main-header">
	<!-- Header Top -->
    @php
        $details=\App\Models\CompanyDetails::first();
    @endphp
	<div class="top-header">
		<div class="container">
			<div class="row">
				<div class="col-md-6 white-clr d-flex align-items-center  hidden-xs">
					<span class="follow-title">Follow Us</span>
					<ul class="list-item follow-us">
						<li>
							<a href="#"><i class="fab fa-facebook-f icon"></i></a>
						</li>
						<li>
							<a href="#"><i class="fab fa-linkedin-in icon"></i></a>
						</li>
						<li>
							<a href="#"><i class="fab fa-instagram icon"></i></a>
						</li>
						<li>
							<a href="#"><i class="fab fa-google-plus-g icon"></i></a>
						</li>
					</ul>
				</div>
				<div class="col-md-6 col-sm-12 col-xs-12 white-clr header-contact">
					<ul class="list-item">
						<li class="mr-lg-4">
							<span class="icon fas fa-phone-alt font-14 font-xs"></span>
							<a href="#" class="white-clr font-14">{{$details->phone}}</a>
						</li>
						<li>
							<span class="icon far fa-envelope font-14 font-xs"></span>
							<a class="white-clr font-14" href="mailto:{{$details->email}}">{{$details->email}}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- End Header Top -->
	<!-- Header Upper -->
	<div class="header-upper" id="sticky-wrapper">
		<div class="container">
		    <nav class="navbar navbar-expand-lg navbar-light">
			  <a class="navbar-brand" href="/">
			  	<img src="/{{$details->logo ?? 'frontend_assets/assets/img/logo.jpg'}}" class="img-fluid" alt="logo">
			  </a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarNavDropdown">
			    <ul class="navbar-nav">
			        <li class="nav-item active">
			        	<a href="{{route('home')}}" class="nav-link">
			        		Home
			        	</a>
			        </li>
			        {{-- <li class="nav-item">
			        	<router-link to="/reseller" class="nav-link">
			        		Reseller
			        	</router-link>
			        </li> --}}
			        {{-- <li class="nav-item dropdown">
				        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				          Shop
				        </a>
				        <ul class="dropdown-menu mega-menu" aria-labelledby="navbarDropdownMenuLink">
					        <li class="dropdown-item mega-menu-item">
					        	<a class="mega-menu-item" href="#">
						          	<img src="/frontend_assets/assets/img/syrap.jpeg"  alt="img">
		        					<div class="d-flex flex-column w-100 ml-2">
		        						Syrap
		        						<span>Lorem ipsum dolor sit amet</span>
		        					</div>
						        </a>
					        </li>
					        <li class="dropdown-item mega-menu-item">
					        	<a class="mega-menu-item" href="#">
						          	<img src="/frontend_assets/assets/img/inzect.jpg"   alt="img">
		        					<div class="d-flex flex-column w-100 ml-2">
		        						Food
		        						<span>Lorem ipsum dolor sit amet</span>
		        					</div>
						        </a>
					        </li>
					        <li class="dropdown-item mega-menu-item">
					        	<a class="mega-menu-item" href="#">
						          	<img src="/frontend_assets/assets/img/tablet.jpg"   alt="img">
		        					<div class="d-flex flex-column w-100 ml-2">
		        						Tablet
		        						<span>Lorem ipsum dolor sit amet</span>
		        					</div>
						        </a>
					        </li>
				        </ul>
				    </li>
			        <li class="nav-item">
			            <a class="nav-link" href="#">Categories</a>
			        </li> --}}
			        <li class="nav-item">
			            <a href="{{ route('contact.index') }}" class="nav-link">
			        		Contact
			        	</a>
			        </li>
			    </ul>
			    <ul class="navbar-nav ml-auto user-menu-sec">
			        @if(Auth::guard('customer')->check())
			        	<li class="nav-item">
			        		<a href="{{ route('user.account') }}"  class="nav-link">
                                @php
                                    if(Auth::guard('customer')->check())
                                    {
                                        $data=\App\Models\CustomerDetails::where('customer_id',Auth::guard('customer')->id())->first();
                                    }
                                @endphp
			        			<i class="fas fa-user user-icon"></i>{{ Auth::guard('customer')->user()->customer_type==2 ? Auth::guard('customer')->user()->name : $data->pharmacy_name }}
			        		</a>
			        	</li>
			        	<li class="nav-item">
			        		<form method="POST" action="{{ route('customer.logout') }}">
			                    @csrf
			                   <a href="{{ route('customer.logout') }}"  class="nav-link" onclick="event.preventDefault(); this.closest('form').submit();"><i class="fas fa-sign-out-alt user-icon"></i>Logout</a>
			                    </a>
			                </form>
			        	</li>
		        	@endif
		        	@if(!Auth::guard('customer')->check())
	        		<li class="menu-item">
			        	<a href="{{ route('user.register') }}" class="user-btn menu-reg">
			        		Registration
			        	</a>
		        	</li>
		        	<li class="menu-item">
		        		<a href="{{ route('user.login') }}" class="user-btn menu-login">
			        		Login
			        	</a>
		        	</li>
		        	@endif
			    </ul>
			  </div>
			</nav>
		</div>
	</div>
	<!-- End Header Upper -->
</header>
<!-- End Main Header
