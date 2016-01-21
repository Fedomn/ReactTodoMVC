var Item = React.createClass({
    render: function () {
        return <h1>This is a test {this.props.name}</h1>;
    }
});

ReactDOM.render(
    <Item name='Item'/>,
    document.getElementById('test')
);



