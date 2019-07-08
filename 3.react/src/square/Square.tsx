import React from "react";
import "./Square.scss";

export interface ISquareProps {
  onClick: () => void,
  value: string
}

export class Square extends React.Component<ISquareProps> {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
         {this.props.value}
      </button>
    );
  }
}