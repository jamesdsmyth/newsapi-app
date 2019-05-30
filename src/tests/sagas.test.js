import { takeLatest, put } from 'redux-saga/effects';
import mockAxios from "axios";

import rootSaga, { watchGetLatestNews, getLatestNews, isAppOnline, callApi } from '../sagas/sagas';
import mockApiResponseSuccess from '../mockData/mock-api-success';
import JestMockPromise from 'jest-mock-promise';


describe('SAGAS', () => {
  it('should dispatch GET_LATEST_NEWS action', () => {
    const generator = rootSaga();
    
    expect(generator.next().value)
      .toEqual(takeLatest('GET_LATEST_NEWS', watchGetLatestNews));
    
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch APP_ONLINE action with correct boolean', () => {
    const generator = isAppOnline();
    const mockResponse = {
      type: "APP_ONLINE",
      online: true,
    }
    expect(generator.next(mockResponse).value)
      .toEqual(put(mockResponse));
      
    expect(generator.next().done).toBeTruthy();
  });

  it('calls axios with the correct URL and returns the correct data', async () => {
    const category = 'general';
    
    mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        results: mockApiResponseSuccess.articles
      }
    }));

    const results = await callApi(category);

    // checking the result is equal to what we expect.
    expect(results.data.results).toEqual(mockApiResponseSuccess.articles);

    // checking we are only calling the get method once.
    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    // checking the url is correct for the mocked axios call.
    expect(mockAxios.get).toHaveBeenCalledWith(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4d0e3b7a4c014287a7bf2b3b52d5edf3`)
  });
});