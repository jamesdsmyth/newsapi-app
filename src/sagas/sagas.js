import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  getNewsSuccessAction,
  getNewsFailureAction,
  onlineStatusAction
} from '../actions/actions';

import { idCreator } from '../helpers/idCreator';

import { openDB } from 'idb';

async function saveCategoryDataLocally(article, category) {
  const db = await openDB('newsApp', 1, {
    upgrade(db) {
      db.createObjectStore('articles', {
        keyPath: 'title',
        autoIncrement: true,
      });
    },
  });

  await db.add('articles', {
    title: category,
    body: article,
  }).then(response => console.log(response))
  .catch(error =>  console.log(error));
}

// get the local data from the indexDB if it exists
function* getLocalEventData(category) {

  if (!('indexedDB' in window)) {
    return;
  }
  
  const db = yield openDB('newsApp', 1);

  // if the IndexDB does not have an createObjectStore then we will return.
  if(!db || db.objectStoreNames.length === 0) {
    return;
  }

  const transaction = yield db.transaction('articles', 'readonly');
  const store = yield transaction.objectStore('articles');
  const value = yield store.getAll();
  const val = value.filter(item => item.title === category);

  return val[0];
}

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
    const updatedArticles = articles.map(item => {
      const id = idCreator(item.title);
      return {
        ...item, 
        id
      }
    });
    
    yield saveCategoryDataLocally(updatedArticles, category);
    yield put(getNewsSuccessAction(updatedArticles, category));

  } catch(error) {
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