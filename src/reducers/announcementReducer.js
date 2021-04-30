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
         let retAnnouncement = false;
         state.announcements.forEach((announcement) => {
            if (announcement.announcementId === targetAnnouncementId) {
               retAnnouncement = announcement;
            }
         });
         if (!retAnnouncement) {
            // if announcement not found
            return {
               ...state,
               retAnnouncement,
            };
         }
         return {
            // if announcement found
            ...state,
            announcements: [retAnnouncement],
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
