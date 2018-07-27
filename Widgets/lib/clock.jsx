import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };

    this.tick = this.tick.bind(this);

  }

  render() {
    return (
      <div className="clock">
        <h1>Clock</h1>
          <ul>
            <li> Hours: {this.time().getHours()}</li>
            <li> Minute: {this.time().getMinutes()}</li>
            <li> Seconds: {this.time().getSeconds()}</li>
          </ul>
      </div>
    );
  }

  time() {
    return this.state.time;
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.intervalID = setInterval(this.tick, 1000);

  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

}



export default Clock;
