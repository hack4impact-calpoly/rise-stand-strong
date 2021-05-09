import { subMonths } from 'date-fns';
import {
   INITIALIZE_SHIFT,
   ADD_SHIFT,
   UPDATE_SHIFT,
   DELETE_SHIFT,
} from '../constants';
import * as api from '../api';
import util from './util';

const EDITABLE_SHIFT_KEYS = ['primary', 'secondary', 'backup'];

function initializeShifts() {
   return async (dispatch) => {
      // gets all shifts up until the year 2050
      const END_TS = 2556057600;
      const shifts = await api.getShiftsRange(
         subMonths(new Date(), 1).getTime(),
         END_TS
      );

      dispatch({
         type: INITIALIZE_SHIFT,
         shifts,
      });
   };
}

function addShift(startTimestamp, endTimestamp, shiftBody) {
   return async (dispatch) => {
      const newShift = {
         startTimestamp,
         endTimestamp,
         ...shiftBody,
      };
      api.postShift(newShift);

      dispatch({
         type: ADD_SHIFT,
         newShift,
      });
   };
}

function updateShift(startTimestamp, newShiftBody) {
   return async (dispatch) => {
      const protectedShiftBody = util.protectKeys(
         newShiftBody,
         EDITABLE_SHIFT_KEYS
      );

      api.putShift(startTimestamp, protectedShiftBody);

      dispatch({
         type: UPDATE_SHIFT,
         targetShiftTS: startTimestamp,
         newShiftBody: protectedShiftBody,
      });
   };
}

function deleteShift(startTimestamp) {
   return async (dispatch) => {
      api.deleteShift(startTimestamp);

      dispatch({
         type: DELETE_SHIFT,
         targetShiftTS: startTimestamp,
      });
   };
}

export default {
   initializeShifts,
   addShift,
   updateShift,
   deleteShift,
};
