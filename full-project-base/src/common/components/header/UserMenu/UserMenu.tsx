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
    return `https://www.gravatar.com/avatar/${this.getImageHash('sebastien.belzile@r3d.com')}?d=mp`;
  }

  getImageHash(email: string) {
    return Md5.hashStr(email.trim().toLowerCase());
  }

  logout() {
    this.props.authenticationService.logout();
  }

  render() {
    return (
      <Popover content={this.userMenuOptions()}>
        <img className='user-avatar' src={this.getGravatarImageUrl()} height='40px' alt='user profile' />
      </Popover>
    );
  }

  userMenuOptions() {
    return (
      <Menu>
        <Menu.Item icon='log-out' text='Se déconnecter' onClick={() => this.logout()} />
      </Menu>
    );
  }
}
