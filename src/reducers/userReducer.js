import { INITIALIZE_USERS } from '../constants';

const initialState = {
   users: [],
};

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZE_USERS:
         return {
            ...state,
            users: action.users,
         };
      default:
         return state;
   }
};

export default userReducer;
