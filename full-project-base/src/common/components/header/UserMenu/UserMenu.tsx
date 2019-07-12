import React from 'react';
import { Md5 } from 'ts-md5/dist/md5';
import { Popover, Menu } from '@blueprintjs/core';
import './UserMenu.scss';
import { AuthenticationService } from '../../../../authentication/services/AuthenticationService';
import { inject } from 'mobx-react';

export interface IUserMenuProps {
  authenticationService?: AuthenticationService;
}

@inject('authenticationService')
export class UserMenu extends React.Component<IUserMenuProps> {
  getGravatarImageUrl(): string {
    const userEmail = this.props.authenticationService.userProfile.email;
    return `https://www.gravatar.com/avatar/${this.getImageHash(userEmail)}?d=mp`;
  }

  getImageHash(email: string) {
    return Md5.hashStr(email.trim().toLowerCase());
  }

  logout() {
    this.props.authenticationService.logout();
  }

  render() {
    return this.props.authenticationService.userProfile ? (
      <Popover content={this.userMenuOptions()}>
        <img className='user-avatar' src={this.getGravatarImageUrl()} height='40px' alt='user profile' />
      </Popover>
    ) : null;
  }

  userMenuOptions() {
    return (
      <Menu>
        <Menu.Item icon='log-out' text='Se déconnecter' onClick={() => this.logout()} />
      </Menu>
    );
  }
}
