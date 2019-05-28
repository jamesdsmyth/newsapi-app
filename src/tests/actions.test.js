import expect from 'expect';

import * as actions from '../actions/actions';
import mockApiResponseSuccess from '../mockData/mock-api-success';
import mockApiResponseFailure from '../mockData/mock-api-failure';

describe('ACTIONS', () => {
  test('getNewsAction action to return the correct object structure', () => {
    const category = 'general';
    const obj = {
      type: 'GET_LATEST_NEWS',
      category
    }

    expect(actions.getNewsAction(category)).toEqual(obj);
  });

  test('getNewsSuccessAction action to return the correct object structure', () => {
    const category = 'general';
    const data = mockApiResponseSuccess;
    const obj = {
      type: 'UPDATE_NEWS_SUCCESS',
      data,
      category
    }

    expect(actions.getNewsSuccessAction(data, category)).toEqual(obj);
  });

  test('getNewsFailureAction action to return the correct object structure', () => {
    const category = 'general';
    const data = mockApiResponseFailure;
    const obj = {
      type: 'UPDATE_NEWS_FAILURE',
      data,
      category
    }

    expect(actions.getNewsFailureAction(data, category)).toEqual(obj);
  });

  test('onlineStatusAction action to return the correct object structure', () => {
    const data = true;
    const obj = {
      type: 'APP_ONLINE',
      online: data
    }

    expect(actions.onlineStatusAction(data)).toEqual(obj);
  });
});