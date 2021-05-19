import { INITIALIZE_USERS } from '../constants';
import * as api from '../api';

function initalizeUsers(accessToken) {
   return async (dispatch) => {
      const users = await api.listUsers(accessToken);

      dispatch({
         type: INITIALIZE_USERS,
         users,
      });
   };
}

export default {
   initalizeUsers,
};
