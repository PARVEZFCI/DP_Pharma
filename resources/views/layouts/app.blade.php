<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        @php
            $details=\App\Models\CompanyDetails::first();
        @endphp
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="csrf-token" content="{{ csrf_token() }}">

          <link rel="apple-touch-icon" href="/{{ $details->favicon ? $details->favicon : 'frontend_assets/assets/img/logo.jpg' }}">
          <link rel="shortcut icon" type="image/x-icon" href="/{{ $details->favicon ? $details->favicon : 'frontend_assets/assets/img/logo.jpg' }}">
        <title>{{$details->name ?? 'Biz Pharma'}}</title>

        @include('layouts.app_css')

        <style>
            .search-box::placeholder {
                text-align: center;
                font-weight: 700;
            }
            .page-container .sidebar-menu{
                background: #00203c;
            }
            .page-container .sidebar-menu #main-menu li.active > a{
                background-color:#004a88;

            }
            .page-container .sidebar-menu #main-menu li ul > li > a:hover{
                background-color:#004a88;
                color:white;
            }
            .page-container .sidebar-menu #main-menu li ul > li > a {
                background-color: #00203c;
            }
            .page-container .sidebar-menu #main-menu li ul > li ul > li > a {
                background-color: #00203c;
            }
            .page-container .sidebar-menu #main-menu li {
                border-bottom: 1px solid #00203c;
            }
            .page-container .main-content{
                background:#002e55;
            }
            .invoice .invoice-left strong, .invoice .invoice-right strong{
                color: white;
            }
            h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
                color: white;
            }
            a {
                color: #ffffff;
            }
            hr{
                color: #004a88;
            }
            .panel-primary{
                border: #004a88
            }
            .panel-default{
                border: #004a88
            }
            .panel-default > .panel-heading {
                color: #ffffff;
                background-color:#004a88;
                border:#004a88
            }
            .panel-body{
                border:1px solid #004a88;
            }
            .panel-default > .panel-heading > .panel-title > a {
                color: #ffffff;
            }
            .panel-default > .panel-heading + .panel-collapse .panel-body{
                color: #ffffff;
                background-color: #004a88;
            }
            .panel-primary > .panel-heading {
                color: #ffffff;
                background-color:#004a88;
                border:#004a88
            }
            .form-control {
                color: #ffffff !important;
                background-color: #004a88 !important;
                border: 1px solid #898f94 !important;
            }
            .form-control::placeholder {
	        color: white !important;
            }
            table{
                background-color: #004a88 !important;
                color: white !important;
            }
            .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {
                background-color: #002e55 !important;
            }
            table tr th{
                color: white !important;
            }
            .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td{
                border: 1px solid #002e55 !important;
            }
            .table-bordered{
                border: 1px solid #002e55 !important;
            }
            .modal-content {
                background-color: #002e55;
            }
            .ui.selection.dropdown{
                background: #004a88 !important;
            }
            .ui.selection.active.dropdown, .ui.selection.active.dropdown .menu{
                border-color: 1px solid #898f94 !important;
            }
            .ui.selection.dropdown .menu>.item{
                background-color: #004a88;
                color: white;
                border-color: 1px solid #898f94 !important;
            }
            /* .ui.selection.dropdown .menu>.item:hover{
                background-color: #1c5429;
                color: black;
                border-color: #1c5429 !important;
            } */
            .vm--modal{
                background-color: #002e55 !important;
            }
            .ui.search.dropdown>.text{
                color: rgb(255, 255, 255);
            }
            .ui.search.selection.dropdown>input.search, .ui.search.selection.dropdown>span.sizer{
                color: white
            }
            .panel-body{
                background-color: #002e55;
            }
            .ck.ck-editor__main>.ck-editor__editable{
                background: #004a88 !important;
            }
            .ck.ck-toolbar {
                background: #004a88 !important;
                border: 1px solid #898f94;
            }
            .ck.ck-reset_all, .ck.ck-reset_all *{
                color:white !important;
            }
        </style>
    </head>
    <body class="page-body">

        <div id="app">
            <div class="page-container">

                @include('layouts.app_sidebar')

                <div class="main-content" style="height: 100vh">

                    @include('layouts.app_navbar')

                    {{-- <hr /> --}}
                    <router-view></router-view>
                    <!-- Footer -->
                    @include('layouts.app_footer')
                </div>
            </div>
        </div>
        @include('layouts.app_js')
    </body>
</html>
