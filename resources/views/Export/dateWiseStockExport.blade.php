<table>
    <thead>
        <tr>
            <th><b>SL</b></th>
            <th><b>Name</b></th>
            <th><b>Date</b></th>
            <th><b>Stock</b></th>
            <th><b>Cost</b></th>
        </tr>
    </thead>
    <tbody>
        @foreach ($report['dateWise'] as $key=>$value)
            <tr>
                <td>{{++$key}}</td>
                <td>{{$value['name']}}</td>
                <td>{{ \Carbon\Carbon::parse($value['date'])->format("d-m-Y") }}</td>
                <td>{{$value['stock']}}</td>
                <td>{{$value['cost']}}</td>
            </tr>
        @endforeach
    </tbody>
</table>
<table>
    <tbody><tr><td><b>TOTAL COST</b></td><td>{{$report['cost']}}</td></tr></tbody>
</table>
