<table>
    <thead>
        <tr>
            <th><b>SL</b></th>
            <th><b>Date</b></th>
            <th><b>Account</b></th>
            <th><b>Head</b></th>
            <th><b>Invoice</b></th>
            <th><b>Expense</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach ($report['dateWise'] as $key=>$value)
            <tr>
                <td>{{++$key}}</td>
                <td>{{ \Carbon\Carbon::parse($value['date'])->format("d-m-Y") }}</td>
                <td>{{$value['account']}}</td>
                <td>{{$value['head']}}</td>
                <td>{{$value['invoice']}}</td>
                <td>{{$value['amount']}}</td>
            </tr>
        @endforeach
    </tbody>
</table>
<table>
    <tbody><tr><td><b>TOTAL AMOUNT</b></td><td>{{$report['amount']}}</td></tr></tbody>
</table>
