var mockMenus = [
    {
        id: 1,
        title: '常规分析',
        path: '',
        submenus: [
            {id: 2, title: '常规数据', path: '', submenus: []},
            {id: 3, title: '新用户付费', path: '', submenus: []},
            {id: 4, title: '留存', path: '', submenus: []},
            {id: 5, title: 'LTV', path: '', submenus: []},
            {id: 6, title: '留存国家对比', path: '',
                submenus: [
                            {id: 7, title: '中国', path: '', submenus: [
                                {id: 71, title: '71', path: '', submenus: []},
                                {id: 72, title: '72', path: '', submenus: []},
                                {id: 73, title: '73', path: '', submenus: []}
                            ]},
                            {id: 8, title: '美国', path: '', submenus: []},
                            {id: 9, title: '英国', path: '', submenus: []}
                ]}
        ]
    },
    {
        id: 10,
        title: '对比分析',
        path: '',
        submenus: [
            {id: 11, title: '留存国家对比', path: '',
                submenus: [
                    {id: 12, title: '中国', path: '', submenus: []},
                    {id: 13, title: '美国', path: '', submenus: []},
                    {id: 14, title: '英国', path: '', submenus: []}
                ]},
            {id: 15, title: '国家对比', path: '', submenus: []},
            {id: 16, title: 'LTV对比', path: '', submenus: []}
        ]
    }
];

var MenuItem = React.createClass({

    getInitialState: function () {
        return {
            options: []
        }
    },

    componentDidMount: function () {
        this.setState({options: this.state.options});
    },

    render: function () {
        var options = this.state.options;
        var self = this;
        return (
            <div>
                <div className="title">
                    <i className="dropdown icon"></i>
                    {this.props.data.title}
                </div>
                <div className="content">
                    {
                        (() => {
                            if (options.length > 0) {
                                return (
                                    <div className="fluid accordion">
                                        {
                                            options.map(function (each, index) {
                                                return (
                                                    <MenuItem data={each} key={each.id}/>
                                                );
                                            })
                                        }
                                    </div>
                                )
                            }
                        })()
                    }
                    <div className="ui vertical fluid menu">
                        {
                            this.props.data.submenus.map(function (each, index) {
                                if (each.submenus.length > 0) {
                                    self.state.options.push(each);
                                }else{
                                    return <a herf={each.path} className="item" key={each.id}>
                                        <span className="menu-title">{each.title}</span>
                                    </a>;
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
});

var SideBar = React.createClass({

    componentDidMount: function () {
        $('.ui.accordion').accordion({closeNested: true});
    },

    render: function () {

        return (
            <div id="sidebar" className="ui left fixed floated segment">
                <header className="ui segment">
                    <div id="logo">
                    </div>
                </header>
                <div className="ui styled fluid accordion">
                    {
                        this.props.data.map(function (each, index) {
                            return (
                                <MenuItem data={each} key={each.id}/>
                            );
                        })
                    }
                </div>
                <footer className="footer">
                    <span>v2.0.1</span>
                    <span className="icon"><i className="fa fa-arrow-left"></i></span>
                </footer>
            </div>
        );
    }

});


ReactDOM.render(<SideBar data={mockMenus}/>, document.getElementById('sidebar'));














