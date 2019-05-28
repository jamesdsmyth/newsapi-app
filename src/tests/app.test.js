import React from 'react';
import { mount, configure } from 'enzyme';

import ReactDOM from 'react-dom';
import expect from 'expect';
import store from '../reducers/combinedReducers'; 
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import routes from '../data/routes';

configure({ adapter: new Adapter() });

describe('<App />', () => {

  const wrapper = mount(<App routes={routes} />);

  it('should load initially', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have the correct wrapping class', () => {
    expect(wrapper.find('.page-container')).toBeDefined();
  });

  it('should contain a <Provider /> component', () => {
    expect(wrapper.find('Provider')).toBeDefined();
  });

  it('should contain a <Router /> component', () => {
    expect(wrapper.find('Router')).toBeDefined();
  });

  it('should contain a <Header /> component', () => {
    expect(wrapper.find('Header')).toBeDefined();
  });

  it('should contain a <Main /> component', () => {
    expect(wrapper.find('Main')).toBeDefined();
  });

  it('renders <App /> and matches the snapshot', () => {
    const component = renderer.create(
      <App routes={routes} />
    );
  
    expect(component.toJSON()).toMatchSnapshot();
  });
});