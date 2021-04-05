import { INITIALIZE_SHIFT } from '../constants';

const initialState = {
   shifts: [],
};

const shiftReducer = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZE_SHIFT:
         console.log('Initializing shift store');

         return {
            shifts: ['initialized'],
         };
      default:
         return state;
   }
};

export default shiftReducer;
