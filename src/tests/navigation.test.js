import React from 'react';
import { mount, configure } from 'enzyme';
import expect from 'expect';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';

import routes from '../data/routes';

configure({ adapter: new Adapter() });

describe('<Navigation /> in the header', () => {
  const wrapper = mount(<App routes={routes} />);
  const index = 0;
  const route = routes[index];

  it('expects .navigation class to be defined', () => {   
    expect(wrapper.find('.navigation')).toBeDefined();
  });

  it('expects .navigation__main class to be defined', () => {   
    expect(wrapper.find('.navigation__main')).toBeDefined();
  });

  it('expects .navigation__main__list-item count to match what was passed in props', () => {   
    expect(wrapper.find('.navigation__main__list-item')).toHaveLength(routes.length);
  });

  it('expects NavLink from react router to be defined', () => {   
    expect(wrapper.find('NavLink')).toBeDefined();
  });

  it('expects NavLink count to match what was passed in props', () => {   
    expect(wrapper.find('NavLink')).toHaveLength(routes.length);
  });

  it('should render the <NavLink /> with the correct href', () => {
    expect(wrapper.find('NavLink').at(index).props().to).toBe(`/${route.route}`);
  });
});