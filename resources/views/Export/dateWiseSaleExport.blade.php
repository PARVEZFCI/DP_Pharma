<table>
    <thead>
        <tr>
            <th><b>SL</b></th>
            <th><b>Name</b></th>
            <th><b>Date</b></th>
            <th><b>Sell</b></th>
            <th><b>Amount</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach ($report['dateWise'] as $key=>$value)
            <tr>
                <td>{{++$key}}</td>
                <td>{{$value['name']}}</td>
                <td>{{ \Carbon\Carbon::parse($value['date'])->format("d-m-Y") }}</td>
                <td>{{$value['sell']}}</td>
                <td>{{$value['amount']}}</td>
            </tr>
        @endforeach
    </tbody>
</table>
<table>
    <tbody><tr><td><b>TOTAL AMOUNT</b></td><td>{{$report['amount']}}</td></tr></tbody>
</table>
