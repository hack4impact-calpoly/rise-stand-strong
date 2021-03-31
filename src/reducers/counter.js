const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'Increment':
      return state + action.payload;
    case 'Decrement':
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
