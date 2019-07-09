import React from "react";
import "./Square.scss";

export interface ISquareProps {
  onClick: () => void,
  value: string,
}

export class Square extends React.Component<ISquareProps> {
  render() {
    const classes = ["square"];

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