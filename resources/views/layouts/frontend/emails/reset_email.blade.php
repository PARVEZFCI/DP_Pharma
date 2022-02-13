<html lang="en-US">
<head>
    <meta charset="text/html">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <style>
        .coupon {
            border: 3px dashed #bcbcbc;
            border-radius: 10px;
            font-family: "HelveticaNeue-Light", "Helvetica Neue Light",
            "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
            font-weight: 300;
        }

        .coupon #head {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            min-height: 56px;
        }

        .coupon #footer {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        #title .visible-xs {
            font-size: 14px;
        }

        .coupon #title img {
            font-size: 30px;
            height: 30px;
            margin-top: 5px;
        }

        @media screen and (max-width: 500px) {
            .coupon #title img {
                height: 15px;
            }
        }

        .coupon #title span {
            float: left;
            margin-top: 5px;
            font-weight: 700;
            text-transform: uppercase;
        }

        .coupon-img {
            width: 100%;
            margin-bottom: 15px;
            padding: 0;
        }

        .items {
            margin: 15px 0;
        }

        .usd, .cents {
            font-size: 20px;
        }

        .number {
            font-size: 40px;
            font-weight: 700;
        }

        sup {
            top: -15px;
        }

        #business-info ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
            text-align: center;
        }

        #business-info ul li {
            display: inline;
            text-align: center;
        }

        #business-info ul li span {
            text-decoration: none;
            padding: .2em 1em;
        }

        #business-info ul li span i {
            padding-right: 5px;
        }

        .disclosure {
            padding-top: 15px;
            font-size: 11px;
            color: #bcbcbc;
            text-align: center;
        }

        .coupon-code {
            color: #333333;
            font-size: 11px;
        }

        .exp {
            color: #f34235;
        }

        .print {
            font-size: 14px;
            float: right;
        }



        /*------------------dont copy these lines----------------------*/
        body {
            font-family: "HelveticaNeue-Light", "Helvetica Neue Light",
            "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
            font-weight: 300;
        }
        .row {
            margin: 30px 0;
        }

        #quicknav ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
            text-align: center;
        }

        #quicknav ul li {
            display: inline;
        }

        #quicknav ul li a {
            text-decoration: none;
            padding: .2em 1em;
        }

        .btn-danger,
        .btn-success,
        .btn-info,
        .btn-warning,
        .btn-primary {
            width: 105px;
        }

        .btn-default {
            margin-bottom: 40px;
        }
        /*-------------------------------------------------------------*/
    </style>
</head>
<body>
<div class="col-md-12">
    <div class="col-md-6">
        <div class="panel panel-info coupon">
            <div class="panel-heading" id="head">
                <div class="panel-title" id="title">
                    <h2>Password Reset</h2>
                </div>
            </div>
            <div  class="panel-body">
                <div class="col-md-12">
                    <div class="col-md-6">
                        <p  style="color: green;font-size: 20px;"><b>Reset your password use this token</p>
                        <span><strong class="text-primary">Token:</strong> {{ $token }}</span>
                    </div>

                    <p>{{date("h:i:sa:")}}</p>
                </div>
            </div>        
        </div>
    </div>
</body>
</html>