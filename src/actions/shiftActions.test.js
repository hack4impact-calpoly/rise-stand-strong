/* eslint-disable no-undef */
import shiftActions from './shiftActions';
import {
   INITIALIZE_SHIFT,
   ADD_SHIFT,
   UPDATE_SHIFT,
   DELETE_SHIFT,
} from '../constants';
import * as api from '../api';

jest.mock('../api', () => ({
   getShiftsRange: jest.fn(),
   postShift: jest.fn(),
   putShift: jest.fn(),
   deleteShift: jest.fn(),
}));

const mockDispatch = jest.fn();

afterEach(() => {
   jest.clearAllMocks();
});

describe('shiftActions tests', () => {
   describe('initializeShifts tests', () => {
      it('should dispatch INITIALIZE_SHIFT with shifts from api', async () => {
         // Arrange
         const expectedShifts = [
            { startTimestamp: 123 },
            { startTimestamp: 124 },
         ];
         api.getShiftsRange.mockResolvedValue(expectedShifts);

         // Act
         const thunkFunction = shiftActions.initializeShifts(expectedShifts);
         await thunkFunction(mockDispatch);

         // Assert
         expect(mockDispatch).toHaveBeenCalledWith({
            type: INITIALIZE_SHIFT,
            shifts: expectedShifts,
         });
         expect(api.getShiftsRange).toHaveBeenCalled();
      });
   });

   describe('addShift tests', () => {
      it('should dispatch ADD_SHIFT with given shift information', async () => {
         // Arrange
         const shiftBody = {
            primary: 'Jack',
            secondary: 'JP',
         };
         const startTimestamp = 123;
         const endTimestamp = 125;

         const expectedShift = {
            startTimestamp,
            endTimestamp,
            ...shiftBody,
         };

         // Act
         const thunkAction = shiftActions.addShift(
            startTimestamp,
            endTimestamp,
            shiftBody
         );
         await thunkAction(mockDispatch);

         // Assert
         expect(api.postShift).toHaveBeenCalledWith(expectedShift);
         expect(mockDispatch).toHaveBeenCalledWith({
            type: ADD_SHIFT,
            newShift: expectedShift,
         });
      });
   });

   describe('updateShift tests', () => {
      it('should dispatch UPDATE_SHIFT', async () => {
         // Arrange
         const startTimestamp = 123;
         const newShiftBody = {
            primary: 'JP',
            secondary: 'Jack',
         };

         // Act
         const thunkAction = shiftActions.updateShift(
            startTimestamp,
            newShiftBody
         );
         await thunkAction(mockDispatch);

         // Assert
         expect(mockDispatch).toHaveBeenCalledWith({
            type: UPDATE_SHIFT,
            targetShiftTS: startTimestamp,
            newShiftBody,
         });
         expect(api.putShift).toHaveBeenCalledWith(
            startTimestamp,
            newShiftBody
         );
      });

      it('should filter out all fields that are invalid', async () => {
         // Arrange
         const startTimestamp = 123;
         const newShiftBody = {
            primary: 'JP',
            secondary: 'Jack',
            invalid: 'one',
            bad: 'two',
         };
         const expectedShiftBody = {
            primary: 'JP',
            secondary: 'Jack',
         };

         // Act
         const thunkAction = shiftActions.updateShift(
            startTimestamp,
            newShiftBody
         );
         await thunkAction(mockDispatch);

         // Assert
         expect(mockDispatch).toHaveBeenCalledWith({
            type: UPDATE_SHIFT,
            targetShiftTS: startTimestamp,
            newShiftBody: expectedShiftBody,
         });
         expect(api.putShift).toHaveBeenCalledWith(
            startTimestamp,
            expectedShiftBody
         );
      });
   });

   describe('deleteShift tests', () => {
      it('should dispatch DELETE_SHIFT action and send DEL request', async () => {
         // Arrange
         const startTimestamp = 123;

         // Act
         const thunkAction = shiftActions.deleteShift(startTimestamp);
         await thunkAction(mockDispatch);

         // Assert
         expect(api.deleteShift).toHaveBeenCalledWith(startTimestamp);
         expect(mockDispatch).toHaveBeenCalledWith({
            type: DELETE_SHIFT,
            targetShiftTS: startTimestamp,
         });
      });
   });
});
