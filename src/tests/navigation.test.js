import React from 'react';
import { mount, configure } from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Navigation from '../components/Navigation';

import routes from '../data/routes';

configure({ adapter: new Adapter() });

describe('<Navigation /> in the header', () => {
  const wrapper = mount(
    <Router>
      <Navigation 
        routes={routes} 
        hideNavigation={jest.fn()}
      />
    </Router>
  );
  const index = 0;
  const route = routes[index];

  it('renders <Navigation /> and matches the snapshot', () => {
    const component = renderer.create(
      <Router>
        <Navigation 
          routes={routes} 
          hideNavigation={jest.fn()}
        />
      </Router>
    );
  
    expect(component.toJSON()).toMatchSnapshot();
  });

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