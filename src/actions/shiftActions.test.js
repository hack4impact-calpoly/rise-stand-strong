/* eslint-disable no-undef */
import shiftActions from './shiftActions';
import { INITIALIZE_SHIFT } from '../constants';

// These are example tests and should be altered when real code is written
describe('shiftActions tests', () => {
  describe('initializeShifts tests', () => {
    it('initializeShifts should return an action with given shifts', () => {
      // Arrange
      const expectedShifts = ['Shifts'];

      // Act
      const action = shiftActions.initializeShifts(expectedShifts);

      // Assert
      expect(action.type).toEqual(INITIALIZE_SHIFT);
      expect(action.shifts).toEqual(expectedShifts);
    });
  });
});
