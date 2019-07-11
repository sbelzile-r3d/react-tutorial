import { NewIntervention } from './NewIntervention';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('NewIntervention', () => {
  it('should render without crashing', () => {
    shallow(<NewIntervention />);
  });
});
