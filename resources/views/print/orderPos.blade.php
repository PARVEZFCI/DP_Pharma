
<!doctype html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <!-- <link rel="stylesheet" href="/assets/css/print_page.css" type="text/css"/> -->
    <style>
            h3{
                line-height: 0px;
                color: rgb(8,8,8);
            }
            p{
                font-size:10px;
                line-height: 0px;
                font-weight:600;
                color:rgb(8,8,8);
            }
            th{
                font-size:12px;
                color:rgb(8,8,8);
                line-height:0px;
            }
            td{
                padding: 0px;
                font-size:12px;
                font-weight:700;
                color:rgb(8,8,8);
            }
            b{
                color:rgb(8,8,8);
            }
            body{
                width: 74mm;
            }
            .custom-para{
                padding: 0px;
                height: 0px;
                margin:7px;
                padding-bottom: 0px;
            }
    </style>
</head>
<body>
    <div id="print_div" style="">
        <div style="border:1px solid rgb(8,8,8)">
            <div class="row">
                <div class="col-md-12">
                    <center>
                        <h3>
                            <b>Biz Pharmacy</b>
                        </h3>
                        <p>Mirpur-1, Dhaka-1216</p>
                        <p>Phone: 01816389314</p>
                    </center>

                    <!--End Info-->
                </div>
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-7" style="width: 50%;float: left;">
                            <p>
                                <b>INV: {{ $invoiceData['invoice_code'] }}</b>
                            </p>
                            <p>
                                {{ \Illuminate\Support\Str::limit($invoiceData['pharmacy_name']!="" ?
                                     $invoiceData['pharmacy_name'] :
                                     $invoiceData['customer_name'],20) }}
                            </p>
                        </div>
                        <div class="col-md-5" style="width: 50%;float: left;">
                            <p>
                                <b>Date:</b>
                                {{ $invoiceData['created_at'] }}
                            </p>
                            <p>
                                Phone: {{ $invoiceData['customer_phone'] }}
                            </p>
                        </div>
                        <div class="col-md-12" style="width:100%;">
                            <p>
                                {{ \Illuminate\Support\Str::limit($invoiceData['customer_address'],30) }}
                            </p>
                        </div>
                    </div>
                    <!--End Info-->
                </div>
            </div>
            <div>
                <table class="table table-sm ">
                    <thead style="border-bottom:1px solid rgb(8,8,8);border-top:none;border-left:none;border-right:none;">
                        <th>Sl</th>
                        <th>Item</th>
                        <th>Rate</th>
                        <th>Qty</th>
                        <th>Amount</th>
                    </thead>
                    <tbody style="border:none">
                        @foreach ($invoiceData['order_medicine_infos'] as $index=>$order)
                            <tr style="line-height:0px">
                                <td style="width:1px;">
                                    <p class="custom-para" >
                                        {{ ++$index }}
                                    </p>
                                </td>
                                <td style="width:150px;">
                                    <p class="custom-para" >
                                        {{ $order['medicine_name']." ".\Illuminate\Support\Str::limit($order['category'],3," ") }}
                                    </p>
                                </td>
                                <td style="width:30px;text-align:center">
                                    <p class="custom-para" >
                                        {{ $order['discount_price'] ? $order['discount_price'] : $order['price'] }}
                                    </p>
                                </td>
                                <td style="width:20px;text-align:center">
                                    <p class="custom-para">
                                        {{ $order['medicine_quantity'] }}
                                    </p>
                                </td>
                                <td style="width:30px;text-align:center">
                                    <p  class="custom-para" >
                                        {{$order['sub_total']}}
                                    </p>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            <div style="margin:0px 0px 0px 180px">
                <p>
                    <b>Total:</b>
                    {{ $invoiceData['grand_total'] }}
                </p>

                <p>
                    <b>Discount:</b>
                    @php
                    $discount=0;
                    array_map(function($data) use(&$discount) {
                        $discount+= ( $data['price'] - $data['discount_price'] ?? 0);
                    },$invoiceData['order_medicine_infos']);
                    @endphp
                    {{ $discount }}
                    {{-- {{ $invoiceData['discount'] }} --}}
                </p>

                <p>
                    <b>Paid:</b>
                    {{ $invoiceData['total_paid'] }}
                </p>

                <p>
                    <b>Due:</b>
                    {{ $invoiceData['total_due'] }}
                </p>
            </div>
        </div>
    </div>
</body>
</html>
