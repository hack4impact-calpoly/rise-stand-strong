import { INITIALIZE_SHIFT } from '../constants';

function initializeShifts(shifts) {
   return {
      type: INITIALIZE_SHIFT,
      shifts,
   };
}

function exampleThunkAction(shifts) {
   return async (dispatch) => {
      // hit database or make async call

      // disptach actions to modify store (you can dispatch multiple)
      dispatch({
         type: INITIALIZE_SHIFT,
         shifts,
      });
   };
}

export default {
   initializeShifts,
   exampleThunkAction,
};
