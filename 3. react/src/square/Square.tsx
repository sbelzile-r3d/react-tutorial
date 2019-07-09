import React from "react";
import "./Square.scss";

export interface ISquareProps {
  onClick: () => void,
  value: string,
  isWinning: boolean
}

export class Square extends React.Component<ISquareProps> {
  render() {
    const classes = ["square"];

    if (this.props.isWinning) {
      classes.push('win');
    }

    return (
      <button
        className={classes.join(" ")}
        onClick={() => this.props.onClick()}
      >
         {this.props.value}
      </button>
    );
  }
}