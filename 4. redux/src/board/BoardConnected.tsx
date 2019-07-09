import { IApplicationState } from "../rootReducer";
import { IBoardStateProps, IBoardDispatchProps, Board, IBoardProps } from "./Board";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { clickSquare } from "./BoardActions";

const mapStateToProps = (state: IApplicationState): IBoardStateProps => {
  return {
    squares: state.board.squares
  }
}

const mapDispatchToProps = (dispatch: Dispatch): IBoardDispatchProps => {
  return {
    onClick: (id: number) => dispatch(clickSquare(id))
  };
}

export const BoardConnected: React.ComponentClass<IBoardProps> = connect(mapStateToProps, mapDispatchToProps)(Board);