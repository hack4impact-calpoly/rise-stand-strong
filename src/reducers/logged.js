const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'SignIn':
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
