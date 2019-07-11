import React from 'react';
import { inject } from 'mobx-react';
import { AuthenticationService } from '../../../authentication/services/AuthenticationService';
import { RouteProps, Route } from 'react-router-dom';

export interface IPrivateRouteProps extends RouteProps {
  authenticationService?: AuthenticationService;
}

@inject('authenticationService')
export class PrivateRoute extends React.Component<IPrivateRouteProps> {
  componentDidMount() {
    if (!this.props.authenticationService.isAuthenticated()) {
      this.props.authenticationService.login();
    }
  }

  render() {
    const {component, ...otherProps} = this.props;
    return (
      <Route {...otherProps} render={(props) => (this.props.authenticationService.isAuthenticated() ? <this.props.component {...props} /> : <div />)} />
    );
  }
}
