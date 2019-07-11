import { Menu } from '@blueprintjs/core';
import * as React from 'react';
import './SideNavigation.scss';

import { withTranslation } from 'react-i18next';
import { MenuLink } from './menu-link/MenuLink';

const SideNavigationTemp = ({ t }) => (
  <Menu>
    <MenuLink to='/interventions' icon='list' text={t('Interventions')} />
    <MenuLink to='/intervention/new' icon='add' text={t('New intervention')} />
  </Menu>
);

export const SideNavigation = withTranslation()(SideNavigationTemp);
