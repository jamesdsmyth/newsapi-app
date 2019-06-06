import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  getNewsSuccessAction,
  getNewsFailureAction,
  onlineStatusAction
} from '../actions/actions';

import { idCreator } from '../helpers/idCreator';
import { saveCategoryDataLocally, getLocalEventData } from '../helpers/indexDb.js';

// this function will get the latest news and dispatch an action depending on the outcome
// passing in the action data containing the category which is currently selected
// getNewsSuccessAction() if successful
// getNewsFailureAction() if there was an error
export function* getLatestNews(data) {
  // we convert 'home' to general as using 'home' for the category parameter will fail
  const category = data.category === 'home' ? 'general' : data.category;

  try {
    const result = yield callApi(category);
    const articles = yield result.data.articles;
    
    // before writing to the store, we will add the id of the article for routing purposes
    const updatedArticles = updateArticles(articles);
    
    // using the IndexDB offline storage, we call this async function that creates and writes the saved data to IndexDB.
    saveCategoryDataLocally(updatedArticles, category);
    yield put(getNewsSuccessAction(updatedArticles, category));

  } catch(error) {
    // if we have offline content saved we will fetch it
    const offlineContent = yield getLocalEventData(category);

    // we check whether we have any offline content in the indexDB. If so we render that,
    // else we show the failure message.
    if(offlineContent && offlineContent.body.length !== 0) {
      yield put(getNewsSuccessAction(offlineContent.body, category));
    } else {
      yield put(getNewsFailureAction(error, category));
    }
  }
}

// adding an ID to the article for when we need to view the individual articles page
export const updateArticles = (articles) => {
  const map = articles.map(item => {
      const id = idCreator(item.title);
      return {
        ...item, 
        id
      }
    });

    return map;
}

export const callApi = (category) => {
  return axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4d0e3b7a4c014287a7bf2b3b52d5edf3`)
    .then((response) => response)
    .catch((error) => error);
}

// this will check whether the app is online using the window.navigator.onLine function
export function* isAppOnline() {
  let online = true;
  
  if(!window.navigator.onLine) {
    online = false;
  }

  yield put(onlineStatusAction(online));
}

// when we request the news, we will call getLatestNews() and isAppOnline()
export function* watchGetLatestNews(data) {
  yield getLatestNews(data);
  yield isAppOnline();
}

// this is the watcher function
export default function* rootSaga() {
  yield takeLatest('GET_LATEST_NEWS', watchGetLatestNews);
}