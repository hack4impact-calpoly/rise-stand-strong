/* eslint-disable no-undef */
import userReducer from './userReducer';
import { INITIALIZE_USERS } from '../constants';

describe('userReducer tests', () => {
   it('should have the proper initial state', () => {
      // Arrange

      // Act
      const initialState = userReducer(undefined, {});

      // Assert
      expect(initialState).toEqual({
         users: [],
      });
   });

   describe('INITIALIZE_USERS tests', () => {
      it('Should initialize shifts according to action', () => {
         // Arrange
         const testUsers = [
            {
               sub: '0664a433-0fbb-4fd3-ad81-fac53b3106ca',
               email_verified: 'true',
               phone_number_verified: 'true',
               phone_number: '+12222222222',
               email: 'test@gmail.com',
            },
            {
               sub: '0d4e1857-659e-4988-b844-741cf9665286',
               email_verified: 'true',
               phone_number_verified: 'true',
               phone_number: '+19253957464',
               email: 'comalvirdi@gmail.com',
            },
         ];

         // Act
         const computedState = userReducer(undefined, {
            type: INITIALIZE_USERS,
            users: testUsers,
         });

         // Assert
         expect(computedState.users).toEqual(testUsers);
      });
   });
});
