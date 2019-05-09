const onlineStatusReducer = (state = { online: true }, action) => {
  switch(action.type) {

    // updates the status of the app true/false for whether there is an internet connection or not
    case 'APP_ONLINE':
      return { online: action.online }

    default:
      return state;
  }
}

export default onlineStatusReducer;