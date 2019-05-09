import React from 'react';
import { mount, configure } from 'enzyme';

import ReactDOM from 'react-dom';
import expect from 'expect';
import store from '../reducers/combinedReducers'; 
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';

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
});














// describe('<NewsLanding />', () => {
//   it('should render correctly when given basic data', () => {


//     const category = 'general';

//     const wrapper = shallow(
//       <NewsLanding
//         category={category}
//       />
//     );
//     expect(wrapper.find(NewsLanding)).to.have.lengthOf(1);
//     expect(wrapper.find('h1').length).toEqual(1);
//   });
// });

// describe('<NewsLanding />', () => {
    

//   it('should render an input, label and SVGIcon', () => {
//     const category = 'general';
//     const wrapper = shallow(
//       <NewsLanding
//         category={category}
//       />
//     );

//     expect(wrapper.find('h1').text()).toEqual(category);
//     // expect(wrapper.find('label').length).toEqual(1);
//     // expect(wrapper.find('SVGIcon').length).toEqual(1);
//     // expect(wrapper.find('input').length).toEqual(1);
//   });



  // it('should render correctly when given basic data', () => {
  //   // const badgeType = colors.CLASSES_TEACHERS;
  //   const value = 45;
  //   const category = 'general';

  //   const wrapper = shallow(
  //     <NewsLanding
  //       category={category}
  //     />
  //   );

  //   // check if correct style is added to the badge
  //   expect(wrapper.find(`.main-content`).length).toEqual(1);
  //   // span will contain the correct value
  //   // expect(wrapper.find('span').contains(value)).toEqual(true);
  // });
// });





























// describe('loading for elements on the page', () => {
//   it('app should load initially', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<App store={store} />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });
// });

// describe('newsReducer actions', () => {
//   it('should return the initial state', () => {
//     expect(newsReducer(undefined, {})).toEqual({ status: 'loading' });
//   });

//   it('should handle UPDATE_NEWS_SUCCESS', () => {
//     const getNewsSuccessAction = {
//       type: 'UPDATE_NEWS_SUCCESS',
//       data: mockApiResponseSuccess
//     }

//     expect(newsReducer({}, getNewsSuccessAction)).toEqual({ articles: getNewsSuccessAction.data, status: 'ok' });
//   });

//   it('should handle UPDATE_NEWS_FAILURE', () => {
//     const getNewsFailureAction = {
//       type: 'UPDATE_NEWS_FAILURE',
//       data: mockApiResponseFailure
//     }

//     expect(newsReducer({}, getNewsFailureAction)).toEqual({ data: getNewsFailureAction.data, status: 'error' });
//   });
// });






  // it('should handle GET_POST_SUCCESS');
  // it('should handle UPDATE_POST_SUCCESS');
  // it('should handle GET_POST_FAIL');
  // it('should handle GET_POST_START');
