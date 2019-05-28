import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import Header from '../components/Header';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import MobileNavigation from '../components/MobileNavigation';

import routes from '../data/routes';

configure({ adapter: new Adapter() });

describe('<Header />', () => {

  const wrapper = shallow(
    <Router>
      <Header routes={routes} />
    </Router>
  );

  const component = renderer.create(
    <Router>
      <Header routes={routes} />
    </Router>
  );

  const headerComponent = shallow(
    <Header routes={routes} />
  );

  it('should render the header section', () => {
    expect(wrapper.find('.header-content')).toBeDefined();
  });

  it('should render the mobile button section', () => {
    expect(wrapper.find('.header-content__mobile-buttons')).toBeDefined();
  });

  it('should render the mobile button menu button', () => {
    expect(wrapper.find('.header-content__mobile-buttons__menu')).toBeDefined();
  });

  it('renders <Header /> and matches the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('render the initial state of headerHidden as true', () => {
    expect(headerComponent.state().headerHidden).toBe(true);
  });

  test('the click event on the show menu button and toggle the state', () => {
    const callback = sinon.spy();
    const componentInstance = headerComponent.instance();
    const mobileNavigation = shallow(
      <MobileNavigation 
        hideNavigation={callback}
        showNavigation={callback}
      />
    );
    
    expect(headerComponent.find('.header-content').hasClass('header-content--hidden')).toBe(true);
    
    mobileNavigation.find('.header-content__mobile-buttons__menu').simulate('click');
    expect(callback.calledOnce).toBe(true);

    componentInstance.showNavigation();

    expect(headerComponent.state().headerHidden).toBe(false);
    expect(headerComponent.find('.header-content').hasClass('header-content--hidden')).toBe(false);
  });

  test('the click event on the hide menu button and toggle the state', () => {
    const callback = sinon.spy();
    const componentInstance = headerComponent.instance();
    window.scrollTo = jest.fn();
    const mobileNavigation = mount(
      <MobileNavigation 
        hideNavigation={callback}
        showNavigation={callback}
      />
    );

    expect(headerComponent.find('.header-content').hasClass('header-content--hidden')).toBe(false);

    mobileNavigation.find('.header-content__mobile-buttons__menu__hide').simulate('click');

    expect(callback.calledOnce).toBe(true);

    componentInstance.hideNavigation();

    expect(headerComponent.state().headerHidden).toBe(true);
    expect(headerComponent.find('.header-content').hasClass('header-content--hidden')).toBe(true);

    window.scrollTo.mockClear();
  });
});