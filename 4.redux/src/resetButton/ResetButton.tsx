import { Dispatch } from "redux";
import React from "react";
import { resetBoard } from '../board/BoardActions';
import { connect } from "react-redux";

export interface IResetButtonDispatchProps {
  onClick?: () => void;
}

export interface IResetButtonProps extends IResetButtonDispatchProps {}

export class ResetButton extends React.Component<IResetButtonProps> {
  reset() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <button onClick={() => this.reset()}>
        Reset
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): IResetButtonDispatchProps => ({
  onClick: () => dispatch(resetBoard())
});

export const ResetButtonConnected: React.ComponentClass<IResetButtonProps> = connect(null, mapDispatchToProps)(ResetButton);