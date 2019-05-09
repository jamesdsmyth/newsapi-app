const newsReducer = (state = {}, action) => {
  switch(action.type) {

    // UPDATE_NEWS_SUCCESS creates/replaces the category object with news articles
    case 'UPDATE_NEWS_SUCCESS':
      return {
        ...state,
        [`${action.category}`]: {
          articles: action.data,
          status: 'ok'
        }
      }

    // UPDATE_NEWS_FAILURE changes the status to 'error' but still keeping the articles for offline viewing. 
    case 'UPDATE_NEWS_FAILURE': 
      return {
        ...state,
          [`${action.category}`]: {
            articles: state[`${action.category}`] ? state[`${action.category}`].articles : [],
            status: 'error'
          }
      }

    default:
      return state;
  }
}

export default newsReducer;