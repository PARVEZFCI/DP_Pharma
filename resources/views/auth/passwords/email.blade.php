<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="Stack admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
    <meta name="keywords" content="admin template, stack admin template, dashboard template, flat admin template, responsive admin template, web app">
    <meta name="author" content="PIXINVENT">
    <title>Admin</title>
    <link rel="apple-touch-icon" href="/auth_assets/images/ico/apple-icon-120.png">
    <link rel="shortcut icon" type="image/x-icon" href="/auth_assets/images/ico/favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i%7COpen+Sans:300,300i,400,400i,600,600i,700,700i" rel="stylesheet">

    <!-- BEGIN: Theme CSS-->
    <link rel="stylesheet" type="text/css" href="/auth_assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="/auth_assets/css/bootstrap-extended.css">
    <link rel="stylesheet" type="text/css" href="/auth_assets/css/colors.css">
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
                                <div class="card-content">
                                    <div class="card-body">
                                        <form class="form-horizontal form-simple" method="POST" action="{{ route('password.email') }}">
                                            @csrf

                                            <fieldset class="form-group position-relative has-icon-left mb-0">
                                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}"  autocomplete="email" autofocus placeholder="Enter Your Email">
                                                <div class="form-control-position">
                                                    <i class="feather icon-user"></i>
                                                </div>
                                                @error('email')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                @enderror
                                            </fieldset>
                                            <button type="submit" class="btn btn-primary btn-lg btn-block mt-2"><i class="feather icon-unlock"></i> Send Password Reset Link</button>
                                        </form>
                                    </div>
                                </div>
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

