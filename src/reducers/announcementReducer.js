import {
   INITIALIZE_ANNOUNCEMENTS,
   ADD_ANNOUNCEMENTS,
   SELECT_ANNOUNCEMENTS,
   DELETE_ANNOUNCEMENTS,
} from '../constants';

const initialState = {
   announcements: [],
};

const announcementReducer = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZE_ANNOUNCEMENTS:
         return {
            ...state,
            announcements: action.announcements,
         };
      case ADD_ANNOUNCEMENTS: {
         return {
            ...state,
            announcements: [...state.announcements, action.newAnnouncement],
         };
      }
      case SELECT_ANNOUNCEMENTS: {
         const { targetAnnouncementId } = action; // argv[] coming in

         const updatedAnnouncement = state.announcements.filter(
            (announcement) =>
               announcement.announcementId === targetAnnouncementId
         );
         return {
            ...state,
            announcements: updatedAnnouncement,
         };
      }
      case DELETE_ANNOUNCEMENTS: {
         const { targetAnnouncementId } = action;

         const updatedAnnouncement = state.announcements.filter(
            (announcement) =>
               announcement.announcementId !== targetAnnouncementId
         );
         return {
            ...state,
            announcements: updatedAnnouncement,
         };
      }
      default:
         return state;
   }
};

export default announcementReducer;
