import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  getNewsSuccessAction,
  getNewsFailureAction,
  onlineStatusAction
} from '../actions/actions';

import { idCreator } from '../helpers/idCreator';

import { openDB, deleteDB, wrap, unwrap } from 'idb'

let db;

const dbPromise = createIndexedDB();

async function createIndexedDB() {

  db = await openDB('newsApp', 1, {
    upgrade(db) {
      // Create a store of objects
      db.createObjectStore('articles', {
        // The 'id' property of the object will be the key.
        keyPath: 'title',
        // If it isn't explicitly set, create a value by auto incrementing.
        autoIncrement: true,
      });
      // Create an index on the 'date' property of the objects.
      // store.createIndex('categories', 'categories');
    },
  });
}

createIndexedDB();

function saveCategoryDataLocally(article, category) {
  db.add('articles', {
    title: category,
    body: article,
  });
}

function* getLocalEventData() {
  if (!('indexedDB' in window)) {return null;}
  yield dbPromise.then(db => {
    const tx = db.transaction('articles', 'readonly');
    const store = tx.objectStore('articles');
    return store.getAll();
  });
}


// this function will get the latest news and dispatch an action depending on the outcome
// passing in the action data containing the category which is currently selected
// getNewsSuccessAction() if successful
// getNewsFailureAction() if there was an error
export function* getLatestNews(data) {

  console.log('navigator service worker', navigator.serviceWorker);

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

    yield put(getNewsSuccessAction(updatedArticles, category));
    yield saveCategoryDataLocally(updatedArticles, category);
  } catch(error) {
    yield put(getNewsFailureAction(error, category));
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