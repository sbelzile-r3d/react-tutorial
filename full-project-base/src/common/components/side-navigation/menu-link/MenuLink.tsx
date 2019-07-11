import { Link } from 'react-router-dom';
import { Icon, IconName } from '@blueprintjs/core';
import * as React from 'react';

export interface IMenuLinkProps {
  icon: IconName;
  text: string;
  to: string;
}

export const MenuLink = (props: IMenuLinkProps) => (
  <li>
    <Link to={props.to} className='bp3-menu-item bp3-popover-dismiss'>
      <Icon icon={props.icon} />
      <div className='bp3-text-overflow-ellipsis bp3-fill'>{props.text}</div>
    </Link>
  </li>
);
