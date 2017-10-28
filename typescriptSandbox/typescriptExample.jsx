var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// props: {message:string, start:number, timer:void}
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            start: _this.props.start,
        };
        console.log('props', _this);
        return _this;
    }
    App.prototype.componentDidMount = function () {
        console.log('start', this.props.start);
        var start = this.props.start;
        this.props.timer(start, this.setState.bind(this));
    };
    App.prototype.render = function () {
        return (<div>
        <div>{this.props.message}</div>
        <div>{this.state.start}</div>
      </div>);
    };
    return App;
}(React.Component));
ReactDOM.render(<App message="Hello World!" start={0} timer={function (start, cb) {
    return setInterval(function () {
        return cb({ start: start++ });
    }, 1000);
}}/>, document.getElementById('root'));
