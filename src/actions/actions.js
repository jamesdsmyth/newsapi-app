// calling to fetch the news
export const getNewsAction = (category) => {
  return {
    type: 'GET_LATEST_NEWS',
    category
  }
}

// when the news is updated we will store all articles inthe correct category
export const getNewsSuccessAction = (data, category) => {
  return {
    type: 'UPDATE_NEWS_SUCCESS',
    data,
    category
  }
}

// failed to retrieve the news because of an error
export const getNewsFailureAction = (data, category) => {
  return {
    type: 'UPDATE_NEWS_FAILURE',
    data,
    category
  }
}

// action for if the app is online or offline
export const onlineStatusAction = (data) => {
  return {
    type: 'APP_ONLINE',
    online: data
  }
}