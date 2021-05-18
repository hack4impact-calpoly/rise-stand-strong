import {
   INITIALIZE_SHIFT,
   ADD_SHIFT,
   UPDATE_SHIFT,
   DELETE_SHIFT,
} from '../constants';

const initialState = {
   shifts: [],
};

const shiftReducer = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZE_SHIFT:
         return {
            ...state,
            shifts: action.shifts,
         };
      case ADD_SHIFT: {
         return {
            ...state,
            shifts: [...state.shifts, action.newShift],
         };
      }
      case UPDATE_SHIFT: {
         // TODO: Limit the fields that can be edited from this reducer through
         // the action creator
         const { targetShiftTS, newShiftBody } = action;

         const updatedShifts = state.shifts.map((shift) =>
            shift.startTimestamp === targetShiftTS
               ? { ...shift, ...newShiftBody }
               : shift
         );
         return {
            ...state,
            shifts: updatedShifts,
         };
      }
      case DELETE_SHIFT: {
         const { targetShiftTS } = action;

         const updatedShifts = state.shifts.filter(
            (shift) => shift.startTimestamp !== targetShiftTS
         );
         return {
            ...state,
            shifts: updatedShifts,
         };
      }
      default:
         return state;
   }
};

export default shiftReducer;
