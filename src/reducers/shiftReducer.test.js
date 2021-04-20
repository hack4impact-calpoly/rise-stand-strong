/* eslint-disable no-undef */
import shiftReducer from './shiftReducer';
import {
   INITIALIZE_SHIFT,
   ADD_SHIFT,
   UPDATE_SHIFT,
   DELETE_SHIFT,
} from '../constants';

describe('shiftReducer tests', () => {
   it('should have the proper initial state', () => {
      // Arrange

      // Act
      const initialState = shiftReducer(undefined, {});

      // Assert
      expect(initialState).toEqual({
         shifts: [],
      });
   });

   describe('INITIALIZE_SHIFT tests', () => {
      it('Should initialize shifts according to action', () => {
         // Arrange
         const testShits = [
            {
               startTimestamp: 1614386408390,
               endTimestamp: 1614386408690,
               primary: 'Josh Wong',
            },
            {
               startTimestamp: 1614386407390,
               endTimestamp: 1614386407690,
               primary: 'Justin Poist',
            },
         ];

         // Act
         const computedState = shiftReducer(undefined, {
            type: INITIALIZE_SHIFT,
            shifts: testShits,
         });

         // Assert
         expect(computedState.shifts).toEqual(testShits);
      });
   });

   describe('ADD_SHIFT tests', () => {
      it('Should add a new shift to the store', () => {
         // Arrange
         const prevState = {
            shifts: [
               {
                  startTimestamp: 1614386408390,
                  endTimestamp: 1614386408690,
                  primary: 'Josh Wong',
               },
               {
                  startTimestamp: 1614386407390,
                  endTimestamp: 1614386407690,
                  primary: 'Justin Poist',
               },
            ],
         };

         const newShift = {
            startTimestamp: 1614386401390,
            endTimestamp: 1614386401690,
            primary: 'Jack Fales',
         };

         // Act
         const computedState = shiftReducer(prevState, {
            type: ADD_SHIFT,
            newShift,
         });

         // Assert
         expect(computedState.shifts).toEqual([...prevState.shifts, newShift]);
      });
   });

   describe('UPDATE_SHIFT tests', () => {
      it('Should update the shift specified by targetShiftTS', () => {
         // Arrange
         const prevState = {
            shifts: [
               {
                  startTimestamp: 1614386408390,
                  endTimestamp: 1614386408690,
                  primary: 'Josh Wong',
               },
               {
                  startTimestamp: 1614386407390,
                  endTimestamp: 1614386407690,
                  primary: 'Justin Poist',
               },
            ],
         };

         const targetShiftTS = 1614386407390;
         const newShiftBody = {
            primary: 'Jack Fales',
            backup: 'Justin Poist',
         };

         const expectedShifts = [
            {
               startTimestamp: 1614386408390,
               endTimestamp: 1614386408690,
               primary: 'Josh Wong',
            },
            {
               startTimestamp: 1614386407390,
               endTimestamp: 1614386407690,
               primary: 'Jack Fales',
               backup: 'Justin Poist',
            },
         ];

         // Act
         const computedState = shiftReducer(prevState, {
            type: UPDATE_SHIFT,
            targetShiftTS,
            newShiftBody,
         });

         // Assert
         expect(computedState.shifts).toEqual(expectedShifts);
      });

      it('Should do nothing if targetShiftTS does not exist', () => {
         // Arrange
         const prevState = {
            shifts: [
               {
                  startTimestamp: 1614386408390,
                  endTimestamp: 1614386408690,
                  primary: 'Josh Wong',
               },
               {
                  startTimestamp: 1614386407390,
                  endTimestamp: 1614386407690,
                  primary: 'Justin Poist',
               },
            ],
         };

         const targetShiftTS = 139;

         // Act
         const computedState = shiftReducer(prevState, {
            type: UPDATE_SHIFT,
            targetShiftTS,
            newShiftBody: {
               startTimestamp: 1294580,
            },
         });

         // Assert
         expect(computedState.shifts).toEqual(prevState.shifts);
      });
   });

   describe('DELETE_SHIFT tests', () => {
      it('Should delete the shift specified by targetShiftTS', () => {
         // Arrange
         const prevState = {
            shifts: [
               {
                  startTimestamp: 1614386408390,
                  endTimestamp: 1614386408690,
                  primary: 'Josh Wong',
               },
               {
                  startTimestamp: 1614386407390,
                  endTimestamp: 1614386407690,
                  primary: 'Justin Poist',
               },
            ],
         };

         const targetShiftTS = 1614386407390;

         const expectedShifts = [
            {
               startTimestamp: 1614386408390,
               endTimestamp: 1614386408690,
               primary: 'Josh Wong',
            },
         ];

         // Act
         const computedState = shiftReducer(prevState, {
            type: DELETE_SHIFT,
            targetShiftTS,
         });

         // Assert
         expect(computedState.shifts).toEqual(expectedShifts);
      });

      it('Should do nothing if targetShiftTS does not exist', () => {
         // Arrange
         const prevState = {
            shifts: [
               {
                  startTimestamp: 1614386408390,
                  endTimestamp: 1614386408690,
                  primary: 'Josh Wong',
               },
               {
                  startTimestamp: 1614386407390,
                  endTimestamp: 1614386407690,
                  primary: 'Justin Poist',
               },
            ],
         };

         const targetShiftTS = 139;

         // Act
         const computedState = shiftReducer(prevState, {
            type: DELETE_SHIFT,
            targetShiftTS,
         });

         // Assert
         expect(computedState.shifts).toEqual(prevState.shifts);
      });
   });
});
