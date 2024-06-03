/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line max-classes-per-file
import React from 'react';

// === Info
// 1) constructor
// 2) render
// 3) componentDidMount
// 4) shouldComponentUpdate
// 5) componentDidUpdate
// 6) componentWillUnmount

class Clock extends React.Component {
  constructor(props) {
    console.log('constructor');

    super(props);

    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
    // eslint-disable-next-line react/destructuring-assignment
    console.log(this.state.time);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log('old state : ', this.state);
    console.log('new state : ', nextState);

    // true - to update
    // false - to not update
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    // eslint-disable-next-line react/destructuring-assignment
    console.log(this.state.time);
    console.log(prevProps);
    console.log(prevState);
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.intervalId);
  }

  render() {
    console.log('render');
    // eslint-disable-next-line react/destructuring-assignment
    return <>Now: {this.state.time}</>;
  }
}

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clock: true };
  }

  render() {
    return (
      <>
        {this.state.clock && <Clock />}
        <button type="button" onClick={() => this.setState((prevSt) => ({ clock: !prevSt.clock }))}>
          {this.state.clock ? 'Hide' : 'Show'}
        </button>
      </>
    );
  }
}

export default Component;
