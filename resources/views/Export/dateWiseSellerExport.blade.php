<table>
    <thead>
        <tr>
            <th><b>SL</b></th>
            <th><b>Seller</b></th>
            <th><b>Date</b></th>
            <th><b>Account</b></th>
            <th><b>Head</b></th>
            <th><b>Invoice</b></th>
            <th><b>Type</b></th>
            <th><b>Amount</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach ($report['dateWise'] as $key=>$value)
            <tr>
                <td>{{++$key}}</td>
                <td>{{$value['seller']}}</td>
                <td>{{ \Carbon\Carbon::parse($value['date'])->format("d-m-Y") }}</td>
                <td>{{$value['account']}}</td>
                <td>{{$value['head']}}</td>
                <td>{{$value['invoice']}}</td>
                <td>{{$value['trx_type']}}</td>
                <td>{{$value['amount']}}</td>
            </tr>
        @endforeach
    </tbody>
</table>
<table>
    <tbody>
        @if (isset($report['expense']))
        <tr>
            <td>
                <b>Total Expense</b>
            </td>
            <td>
                {{$report['expense']}}
            </td>
        </tr>
        @endif
        @if (isset($report['income']))
        <tr>
            <td>
                <b>Total Income</b>
            </td>
            <td>
                {{$report['income']}}
            </td>
        </tr>
        @endif
    </tbody>
</table>
