/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

// 1) constructor
// 2) render
// 3) componentDidMount
// 4) shouldComponentUpdate
// 5) componentDidUpdate
// 6) componentWillUnmount

// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
  constructor(props) {
    super(props);

    console.log('constructor');

    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.interval = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      console.log(this.state.time);
    }, 1000);
  }

  // eslint-disable-next-line no-unused-vars
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate');
    // console.log('old state : ', this.state);
    // console.log('new state : ', nextState);

    // true - to update
    // false - to not update
    return true;
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    console.log(prevProps);
    console.log(prevState);
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.interval);
  }

  render() {
    console.log('render');

    return (
      <div>{this.state.time}</div>
    );
  }
}

function App() {
  const [stClock, setStClock] = useState(true);

  return (
    <>
      {stClock && <Clock />}
      <button type="button" onClick={() => setStClock((prev) => !prev)}>{stClock ? 'hide' : 'show'}</button>
    </>
  );
}

export default App;
