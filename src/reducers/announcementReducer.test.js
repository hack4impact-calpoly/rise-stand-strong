/* eslint-disable no-undef */
import announcementReducer from './announcementReducer';
import {
   INITIALIZE_ANNOUNCEMENTS,
   ADD_ANNOUNCEMENTS,
   SELECT_ANNOUNCEMENTS,
   DELETE_ANNOUNCEMENTS,
} from '../constants';

describe('announcementReducer tests', () => {
   it('should have the proper initial state', () => {
      // Arrange

      // Act
      const initialState = announcementReducer(undefined, {});

      // Assert
      expect(initialState).toEqual({
         announcements: [],
      });
   });

   describe('INITIALIZE_ANNOUNCEMENT tests', () => {
      it('Should initialize announcements according to action', () => {
         // Arrange
         const testAnnouncements = [
            {
               announcementId: 1,
               title: 'Hello',
               author: 'Sam S',
               test: 'This is my great announcment',
               createdAt: '2021-5-28T13:40:20',
               link: 'https://rise/updates/new',
            },
            {
               announcementId: 5,
               title: 'QWERTYUIO',
               author: 'Not Sam S',
               test: 'This is a horrible announcment',
               createdAt: '2021-5-28T13:40:25',
               link: 'https://rise/updates/new',
            },
         ];

         // Act
         const computedState = announcementReducer(undefined, {
            type: INITIALIZE_ANNOUNCEMENTS,
            announcements: testAnnouncements,
         });

         // Assert
         expect(computedState.announcements).toEqual(testAnnouncements);
      });
   });

   describe('ADD_ANNOUNCEMENT tests', () => {
      it('Should add a new announcement to the store', () => {
         // Arrange
         const prevState = {
            announcements: [
               {
                  announcementId: 1,
                  title: 'Hello',
                  author: 'Sam S',
                  test: 'This is my great announcment',
                  createdAt: '2021-5-28T13:40:20',
                  link: 'https://rise/updates/new',
               },
               {
                  announcementId: 5,
                  title: 'QWERTYUIO',
                  author: 'Not Sam S',
                  test: 'This is a horrible announcment',
                  createdAt: '2021-5-28T13:40:25',
                  link: 'https://rise/updates/new',
               },
            ],
         };

         const newAnnouncement = {
            announcementId: 99,
            title: 'NEW',
            author: 'Friend',
            test: 'This is a new announcment',
            createdAt: '2021-5-28T13:40:27',
            link: 'https://rise/updates/new',
         };

         // Act
         const computedState = announcementReducer(prevState, {
            type: ADD_ANNOUNCEMENTS,
            newAnnouncement,
         });

         // Assert
         expect(computedState.announcements).toEqual([
            ...prevState.announcements,
            newAnnouncement,
         ]);
      });
   });

   describe('SELECT_ANNOUNCEMENT tests', () => {
      it('Should select the announcement specified by announcementId', () => {
         // Arrange
         const prevState = {
            announcements: [
               {
                  announcementId: 1,
                  title: 'Hello',
                  author: 'Sam S',
                  test: 'This is my great announcment',
                  createdAt: '2021-5-28T13:40:20',
                  link: 'https://rise/updates/new',
               },
               {
                  announcementId: 5,
                  title: 'QWERTYUIO',
                  author: 'Not Sam S',
                  test: 'This is a horrible announcment',
                  createdAt: '2021-5-28T13:40:25',
                  link: 'https://rise/updates/new',
               },
            ],
         };

         const targetAnnouncementId = 5;

         const expectedAnnouncements = [
            {
               announcementId: 5,
               title: 'QWERTYUIO',
               author: 'Not Sam S',
               test: 'This is a horrible announcment',
               createdAt: '2021-5-28T13:40:25',
               link: 'https://rise/updates/new',
            },
         ];

         // Act
         const computedState = announcementReducer(prevState, {
            type: SELECT_ANNOUNCEMENTS,
            targetAnnouncementId,
         });

         // Assert
         expect(computedState.announcements).toEqual(expectedAnnouncements);
      });

      it('Should do nothing if targetAnnouncementId does not exist', () => {
         // Arrange
         const prevState = {
            announcements: [
               {
                  announcementId: 1,
                  title: 'Hello',
                  author: 'Sam S',
                  test: 'This is my great announcment',
                  createdAt: '2021-5-28T13:40:20',
                  link: 'https://rise/updates/new',
               },
               {
                  announcementId: 5,
                  title: 'QWERTYUIO',
                  author: 'Not Sam S',
                  test: 'This is a horrible announcment',
                  createdAt: '2021-5-28T13:40:25',
                  link: 'https://rise/updates/new',
               },
            ],
         };

         const targetAnnouncementId = 139;

         // Act
         const computedState = announcementReducer(prevState, {
            type: SELECT_ANNOUNCEMENTS,
            targetAnnouncementId,
         });

         // Assert
         expect(computedState.announcements).toEqual(prevState.announcements);
      });
   });

   describe('DELETE_ANNOUNCEMENT tests', () => {
      it('Should delete the announcement specified by announcementID', () => {
         // Arrange
         const prevState = {
            announcements: [
               {
                  announcementId: 1,
                  title: 'Hello',
                  author: 'Sam S',
                  test: 'This is my great announcment',
                  createdAt: '2021-5-28T13:40:20',
                  link: 'https://rise/updates/new',
               },
               {
                  announcementId: 5,
                  title: 'QWERTYUIO',
                  author: 'Not Sam S',
                  test: 'This is a horrible announcment',
                  createdAt: '2021-5-28T13:40:25',
                  link: 'https://rise/updates/new',
               },
            ],
         };

         const targetAnnouncementId = 5;

         const expectedAnnouncements = [
            {
               announcementId: 1,
               title: 'Hello',
               author: 'Sam S',
               test: 'This is my great announcment',
               createdAt: '2021-5-28T13:40:20',
               link: 'https://rise/updates/new',
            },
         ];

         // Act
         const computedState = announcementReducer(prevState, {
            type: DELETE_ANNOUNCEMENTS,
            targetAnnouncementId,
         });

         // Assert
         expect(computedState.announcements).toEqual(expectedAnnouncements);
      });

      it('Should do nothing if announcementId does not exist', () => {
         // Arrange
         const prevState = {
            announcements: [
               {
                  announcementId: 1,
                  title: 'Hello',
                  author: 'Sam S',
                  test: 'This is my great announcment',
                  createdAt: '2021-5-28T13:40:20',
                  link: 'https://rise/updates/new',
               },
               {
                  announcementId: 5,
                  title: 'QWERTYUIO',
                  author: 'Not Sam S',
                  test: 'This is a horrible announcment',
                  createdAt: '2021-5-28T13:40:25',
                  link: 'https://rise/updates/new',
               },
            ],
         };

         const targetAnnouncementId = 139;

         // Act
         const computedState = announcementReducer(prevState, {
            type: DELETE_ANNOUNCEMENTS,
            targetAnnouncementId,
         });

         // Assert
         expect(computedState.announcements).toEqual(prevState.announcements);
      });
   });
});
