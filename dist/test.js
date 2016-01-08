var Item = React.createClass({displayName: "Item",
    render: function () {
        return React.createElement("h1", null, "This is a test ", this.props.name);
    }
});

ReactDOM.render(
    React.createElement(Item, {name: "Item"}),
    document.getElementById('test')
);



