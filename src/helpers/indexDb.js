import { openDB } from 'idb';

// save data locally by opening an index db and writing the new articles to the db
export async function saveCategoryDataLocally(article, category) {
  let db;
  try {
    db = await openDB('newsApp', 1, {
      upgrade(db) {
        db.createObjectStore('articles', {
          keyPath: 'title',
          autoIncrement: true,
        });
      }
    });
  } catch(error) {
    console.log(error);
  }

  // Uncaught (in promise) DOMException
  // not sure why but this keeps dropping into the catch error even though it writes to the IndexDB store.
  try {
    await db.add('articles', {
      title: category,
      body: article,
    })
  } catch(error) {
    console.log(error);
  }
}

// get the local data from the indexDB if it exists
export function* getLocalEventData(category) {
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