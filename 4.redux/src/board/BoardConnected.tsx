import { IApplicationState } from "../rootReducer";
import { IBoardStateProps, IBoardDispatchProps } from "./Board";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const mapStateToProps = (state: IApplicationState): IBoardStateProps => {

}

const mapDispatchToProps = (dispatch: Dispatch): IBoardDispatchProps => {

}

export const BoardConnected = connect(mapStateToProps, mapDispatchToProps)