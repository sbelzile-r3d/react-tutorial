import { Header } from './Header';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('Header', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });
});
