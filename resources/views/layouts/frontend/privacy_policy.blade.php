@extends('layouts.frontend.master')
@section('main_content')
<br>
<center>
    <h1>Privacy Policy</h1>
</center><br>
<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        {!! $settings->privacy_policy !!}
    </div>
    <div class="col-md-2"></div>
</div>
@stop