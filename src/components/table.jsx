var mock_data = {
    thead: [
        {register_date: '日期'},
        {pay_ratio_7d: '7日平均付费频率'}, {pay_ratio_1m: '30日平均付费频率'},
        {pay_ltv_ratio_7d: '7日平均付费额度'}, {pay_ltv_ratio_1m: '30日平均付费额度'},
        {pay_day_interval_7d: '7日平均付费间隔'}, {pay_day_interval_1m: '30日平均付费间隔'}
    ],
    tbody: [
        {"register_date":"2011-01-01","pay_day_interval_7d":0,"pay_day_interval_1m":3,"pay_ratio_7d":2.0,"pay_ratio_1m":1.0,"pay_ltv_ratio_7d":21,"pay_ltv_ratio_1m":1.0},
        {"register_date":"2011-01-02","pay_day_interval_7d":1,"pay_day_interval_1m":6,"pay_ratio_7d":5.2,"pay_ratio_1m":2.0,"pay_ltv_ratio_7d":22,"pay_ltv_ratio_1m":0.1},
        {"register_date":"2011-01-03","pay_day_interval_7d":2,"pay_day_interval_1m":6,"pay_ratio_7d":2.5,"pay_ratio_1m":3.0,"pay_ltv_ratio_7d":82,"pay_ltv_ratio_1m":1.2},
        {"register_date":"2011-01-04","pay_day_interval_7d":3,"pay_day_interval_1m":6,"pay_ratio_7d":3.4,"pay_ratio_1m":4.0,"pay_ltv_ratio_7d":13,"pay_ltv_ratio_1m":3.4},
        {"register_date":"2011-01-05","pay_day_interval_7d":4,"pay_day_interval_1m":2,"pay_ratio_7d":3.4,"pay_ratio_1m":5.0,"pay_ltv_ratio_7d":19,"pay_ltv_ratio_1m":5.0},
        {"register_date":"2011-01-06","pay_day_interval_7d":5,"pay_day_interval_1m":3,"pay_ratio_7d":2.0,"pay_ratio_1m":6.0,"pay_ltv_ratio_7d":69,"pay_ltv_ratio_1m":76},
        {"register_date":"2011-01-08","pay_day_interval_7d":6,"pay_day_interval_1m":1,"pay_ratio_7d":1.0,"pay_ratio_1m":4.0,"pay_ltv_ratio_7d":11,"pay_ltv_ratio_1m":11},
        {"register_date":"2011-01-09","pay_day_interval_7d":7,"pay_day_interval_1m":0,"pay_ratio_7d":0.1,"pay_ratio_1m":5.0,"pay_ltv_ratio_7d":12,"pay_ltv_ratio_1m":10},
        {"register_date":"2011-01-10","pay_day_interval_7d":8,"pay_day_interval_1m":0,"pay_ratio_7d":2.0,"pay_ratio_1m":9.0,"pay_ltv_ratio_7d":32,"pay_ltv_ratio_1m":0.0},
        {"register_date":"2011-01-11","pay_day_interval_7d":9,"pay_day_interval_1m":0,"pay_ratio_7d":3.0,"pay_ratio_1m":1.0,"pay_ltv_ratio_7d":44,"pay_ltv_ratio_1m":0.0},
        {"register_date":"2011-01-12","pay_day_interval_7d":1,"pay_day_interval_1m":0,"pay_ratio_7d":4.0,"pay_ratio_1m":8.0,"pay_ltv_ratio_7d":55,"pay_ltv_ratio_1m":0.0}
    ]
};


var Table = React.createClass({

    componentDidMount: function() {
        $('table').tablesort();
    },

    render: function () {
        var data = this.props.data;
        return (
            <table className="ui fixed sortable compact very single line selectable celled table">
                <thead>
                    <tr>
                        {data.thead.map(function (entry, index) {
                            return <th key={index}>{_.values(entry)[0]}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.tbody.map(function (entry1, index1) {
                        return <tr key={index1}>{
                            data.thead.map(function (entry2, index2) {
                                return <td key={index2}>{entry1[_.keys(entry2)[0]]}</td>;
                            })
                        }</tr>;
                    })}
                </tbody>
            </table>
        );
    }
});

ReactDOM.render(
    <Table data={mock_data}/>,
    document.getElementById('table-div')
);



