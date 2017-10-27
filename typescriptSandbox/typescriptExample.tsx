class App extends React.Component {
  constructor(props: {message:string, start:number, timer:void}) {
    super(props);
  }

  state = {
    start: this.props.start,
  }
  componentDidMount() {
    console.log('start', this.props.start)
    const start = this.props.start
    this.props.timer(start, this.setState.bind(this));
  }
  render() {
    return (
      <div>
        <div>{this.props.message}</div>
        <div>{this.state.start}</div>
      </div>
    )
  }
}


ReactDOM.render(<App message="Hello World!"
  start={0}
  timer={(start, cb) =>
    setInterval(() =>
    cb({start: start ++}),
    1000)
  }
  />,
  document.getElementById('root'));
