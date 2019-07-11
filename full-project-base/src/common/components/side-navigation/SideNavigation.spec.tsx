import { SideNavigation } from './SideNavigation';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('SideNavigation', () => {
  it('should render without crashing', () => {
    shallow(<SideNavigation />);
  });
});
