import { Alignment, Navbar } from '@blueprintjs/core';
import * as React from 'react';
import logo from '../../images/svg/r3d-logo.svg';
import './Header.scss';
import { UserMenu } from './UserMenu/UserMenu';

export const Header = () => (
  <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading><img src={logo} className='r3d-logo' alt='logo' /></Navbar.Heading>
    </Navbar.Group>
    <Navbar.Group align={Alignment.RIGHT}>
      <Navbar.Heading><UserMenu /></Navbar.Heading>
    </Navbar.Group>
  </Navbar>
);
