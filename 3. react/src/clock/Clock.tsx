import React from "react";

export interface IClockState {
  date: Date
}

export class Clock extends React.Component<any, IClockState> {
  timerId: number;

  constructor(props: any) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerId = window.setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        It is {this.state.date.toLocaleTimeString()}.
      </div>
    );
  }
}