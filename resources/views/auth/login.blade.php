<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    {{-- <meta name="description" content="Stack admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
    <meta name="keywords" content=""> --}}
    @php
        $details=App\Models\CompanyDetails::first();
    @endphp
    <meta name="author" content="PIXINVENT">
    <title>{{$details ? $details->name : "Biz Pharma"}} | Admin Login</title>
    <link rel="" href="/auth_assets/images/logo/logo.jpg">
    <link rel="shortcut icon" type="image/x-icon" href="{{$details ? '/'.$details->favicon : '/auth_assets/images/logo/logo.jpg'}}">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i%7COpen+Sans:300,300i,400,400i,600,600i,700,700i" rel="stylesheet">

    <!-- BEGIN: Theme CSS-->
    <link rel="stylesheet" type="text/css" href="/auth_assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="/auth_assets/css/bootstrap-extended.css">
    <link rel="stylesheet" type="text/css" href="/auth_assets/css/components.css">
    <!-- END: Theme CSS-->

</head>
<!-- END: Head-->

<!-- BEGIN: Body-->

<body class="horizontal-layout horizontal-menu horizontal-menu-padding 1-column   blank-page blank-page" data-open="hover" data-menu="horizontal-menu" data-col="1-column">
    <!-- BEGIN: Content-->
    <div class="app-content container center-layout mt-2">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <section class="row flexbox-container">
                    <div class="col-12 d-flex align-items-center justify-content-center">
                        <div class="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
                            <div class="card border-grey border-lighten-3 m-0">
                                <div class="card-header border-0">
                                    <div class="card-title text-center">
                                        <div class="p-1"><img src="{{$details ? $details->logo : '/auth_assets/images/logo/logo.jpg'}}" alt="branding logo" width="50"></div>
                                    </div>
                                    <h6 class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2"><span>Login with
                                            Admin</span></h6>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <form class="form-horizontal form-simple" method="POST" action="{{ route('login') }}">
                                            @csrf

                                            <fieldset class="form-group position-relative has-icon-left">
                                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}"  autocomplete="email" autofocus placeholder="Your Username">
                                                <div class="form-control-position">
                                                    <i class="feather icon-user"></i>
                                                </div>
                                                @error('email')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </fieldset>
                                            <fieldset class="form-group position-relative has-icon-left">
                                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password"  autocomplete="current-password" placeholder="Enter Password" >
                                                <div class="form-control-position">
                                                    <i class="fa fa-key"></i>
                                                </div>
                                                 @error('password')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </fieldset>
                                            <div class="form-group row">
                                                <div class="col-sm-6 col-12 text-center text-sm-left">
                                                    <fieldset>
                                                        <input type="checkbox" id="remember" class="chk-remember" type="checkbox" name="remember" id="remember" value="{{ old('remember') ? 'checked' : '' }}">
                                                        <label for="remember"> Remember Me</label>
                                                    </fieldset>
                                                </div>
                                                @if (Route::has('password.request'))
                                                     <div class="col-sm-6 col-12 text-center text-sm-right"><a href="{{ route('password.request') }}" class="card-link">Forgot Password?</a></div>
                                                @endif

                                            </div>
                                            <button type="submit" class="btn btn-primary btn-lg btn-block"><i class="feather icon-unlock"></i> Login</button>
                                        </form>
                                    </div>
                                </div>
                               {{--  <div class="card-footer">
                                    <div class="">
                                        <p class="float-sm-left text-center m-0"><a href="recover-password.html" class="card-link">Recover password</a></p>
                                        <p class="float-sm-right text-center m-0">New to Stack? <a href="register-simple.html" class="card-link">Sign Up</a></p>
                                    </div>
                                </div> --}}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <!-- END: Content-->

    <!-- BEGIN: Vendor JS-->
    <script src="/auth_assets/vendors/js/vendors.min.js"></script>
    <!-- BEGIN Vendor JS-->

</body>
<!-- END: Body-->

</html>
