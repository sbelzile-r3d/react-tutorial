import { Loading } from './Loading';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('Loading', () => {
  it('should render without crashing', () => {
    shallow(<Loading />);
  });
});
