/* eslint-disable no-undef */
import shiftReducer from './shiftReducer';

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
});
