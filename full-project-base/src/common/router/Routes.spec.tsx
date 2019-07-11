import { Routes } from './Routes';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('Routes', () => {
  it('should render without crashing', () => {
    shallow(<Routes />);
  });
});
