import { MenuLink, IMenuLinkProps } from './MenuLink';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

describe('MenuLink', () => {
  it('should render without crashing', () => {
    expect(() => shallow(<MenuLink icon='add' text='patate' to='24' />))
      .not
      .toThrowError();
  });

  describe('Properties', () => {
    const AN_ICON = 'add';
    const A_TEXT = 'patate';
    const A_ROUTE = 'add';
    let wrapper: ShallowWrapper<IMenuLinkProps>;

    beforeEach(() => {
      wrapper = shallow(<MenuLink icon={AN_ICON} text={A_TEXT} to={A_ROUTE} />);
    });

    describe('icon', () => {
      it('should render provided icon', () => {
        const icon = wrapper.find(Icon)
          .first()
          .props()
          .icon;

        expect(icon).toBe(AN_ICON);
      });
    });

    describe('text', () => {
      it('should render provided text', () => {
        expect(wrapper.contains(A_TEXT));
      });
    });

    describe('to', () => {
      it('should render provided text', () => {
        const linkTo = wrapper.find(Link)
          .first()
          .props()
          .to;

        expect(linkTo).toBe(A_ROUTE);
      });
    });
  });
});
