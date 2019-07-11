import { InterventionList } from './InterventionList';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('InterventionList', () => {
  it('should render without crashing', () => {
    shallow(<InterventionList />);
  });
});
