var _this = this;
var render = ReactDOM.render;
console.log('React', React);
var App = function (props) {
    return (React.createElement("div", null,
        React.createElement("div", null, props.message),
        React.createElement("div", null, props.start),
        React.createElement("div", null, props.framework)));
};
render(React.createElement(App, { message: "Hello World!", start: 0, timer: setInterval(function () {
        return console.log(_this.props.start);
    }, 1000) }), document.getElementById('root'));
