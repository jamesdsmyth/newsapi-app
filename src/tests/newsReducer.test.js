import expect from 'expect';
import newsReducer from '../reducers/newsReducer';
import mockApiResponseSuccess from '../mockData/mock-api-success';
import mockApiResponseFailure from '../mockData/mock-api-failure';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('newsReducer actions', () => {
  it('should return the initial state', () => {
    expect(newsReducer(undefined, {})).toEqual({});
  });

  it('should handle UPDATE_NEWS_SUCCESS', () => {
    const getNewsSuccessAction = {
      type: 'UPDATE_NEWS_SUCCESS',
      data: mockApiResponseSuccess,
      category: 'general'
    }

    expect(newsReducer({}, getNewsSuccessAction)).toEqual(
      { 
        [getNewsSuccessAction.category]: {
          articles: getNewsSuccessAction.data,
          status: 'ok'
        }
      }
    );
  });

  it('should handle UPDATE_NEWS_FAILURE', () => {
    const getNewsFailureAction = {
      type: 'UPDATE_NEWS_FAILURE',
      data: mockApiResponseFailure,
      category: 'general'
    }

    expect(newsReducer({}, getNewsFailureAction)).toEqual(
      { 
        [getNewsFailureAction.category]: {
          articles: [],
          status: 'error'
        }
      }
    );
  });
});