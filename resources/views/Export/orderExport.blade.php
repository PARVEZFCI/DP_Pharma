<table>
    <thead>
        <tr>
            <th><b>SL</b></th>
            <th><b>Date</b></th>
            <th><b>Pharmacy Name</b></th>
            <th><b>Invoice</b></th>
            <th><b>Total Amount</b></th>
            <th><b>Total Paid</b></th>
            <th><b>Status</b></th>
        </tr>
    </thead>
    @php
        $status = [
        ['key'=>'1','value'=>'Pending'],
        ['key'=>'2','value'=>"Order Accepted"],
        ['key'=>'3','value'=>"On The Way"],
        ['key'=>'4','value'=>"Success"],
        ['key'=>'5','value'=>"Rejected"]
        ];
    @endphp
    <tbody>
        @foreach ($report as $key=>$value)
            <tr>
                <td>{{++$key}}</td>
                <td>{{ \Carbon\Carbon::parse($value['date'])->format("d-m-Y") }} {{ \Carbon\Carbon::parse($value['created_at'])->format("h:ma") }}</td>
                <td>{{ $value['customer_details']['pharmacy_name'] ?? $value['customer']['name'] }}</td>
                <td>{{$value['order_code']}}</td>
                <td>{{$value['total_price']}}</td>
                <td>{{$value['total_paid']}}</td>
                <td>{{collect($status)->firstWhere('key',$value['status'])['value']}}</td>
            </tr>
        @endforeach
    </tbody>
</table>
<table>
    {{-- <tbody><tr><td><b>TOTAL AMOUNT</b></td><td>{{$report['amount']}}</td></tr></tbody> --}}
</table>
