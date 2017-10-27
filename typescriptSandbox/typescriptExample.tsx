const { render } = ReactDOM;
console.log('React', React);

const App = (props: {message:string, start:number, timer:void}) => {
  return (
    <div>
      <div>{props.message}</div>
      <div>{props.start}</div>
      <div>{props.framework}</div>
    </div>
  )
}




render(<App message="Hello World!"
  start={0}
  timer={
    setInterval(() =>
    console.log(this.props.start),
    1000)}
  />,
  document.getElementById('root'));
