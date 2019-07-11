import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import { PrivateRoute, IPrivateRouteProps } from './PrivateRoute';
import { AuthenticationService } from '../../../authentication/services/AuthenticationService';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../components/header/Header';

describe('PrivateRoute', () => {
  it('should render with no error', () => {
    expect(() => shallow(<PrivateRoute />)).not.toThrowError();
  });

  describe('componentDidMount', () => {
    beforeEach(() => {

    });
  });
});

describe('PrivateRoute', () => {
  let route: ReactWrapper<IPrivateRouteProps>;
  let authenticationService: AuthenticationService;

  beforeEach(() => {
    authenticationService = {
      isAuthenticated: () => true
    } as AuthenticationService;
    authenticationService.login = jest.fn();
    route = mount(<BrowserRouter><PrivateRoute authenticationService={authenticationService} component={Header} /></BrowserRouter>);
  });

  it('should not call service login when user is authenticated', () => {
    expect(authenticationService.login).not.toHaveBeenCalled();
  });

  it('should call service login when user is not authenticated', () => {
    route.unmount();
    authenticationService.isAuthenticated = jest.fn().mockReturnValue(false);
    route.mount();
    expect(authenticationService.login).toHaveBeenCalled();
  });
});
