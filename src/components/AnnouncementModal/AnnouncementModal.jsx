import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledModal = styled(Modal)`
   left: 50%;
   font-family: 'Nunito', sans-serif;
`;

const StyledAnnouncements = styled(Modal.Title)`
   color: #512854;
   font-weight: 700;
   font-size: 24px;
   align: center;
`;
const StyledTitle = styled(Modal.Title)`
   font-weight: 600;
`;

const StyledSubtitle = styled(Modal.Title)`
   font-weight: 400;
   font-size: 18px;
`;

const StyledBody = styled.p`
   font-weight: 400;
   font-style: normal;
   font-size: 16px;
   line-height: 21.82px;
`;

const StyledButton = styled(Button)`
   variant: secondary;
   width: 100%;
   background: #512854;
`;

const styleDate = (date) => {
   const year = date.split('-')[0];
   let month = date.split('-')[1];
   const day = date.split('-')[2];
   const months = [
      null,
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ];
   month = months[parseInt(month, 10)];
   return `${month} ${day}, ${year}`;
};

const AnnouncementModal = (props) => {
   const { show, onHide, AnnouncementInfo } = props;
   console.log('Announcemnt Info');
   return (
      <StyledModal centered show={show} backdrop="static">
         <Modal.Header className="text-center">
            <StyledAnnouncements>Announcements</StyledAnnouncements>
         </Modal.Header>
         <Modal.Body>
            <StyledTitle>{AnnouncementInfo.Announcement.title}</StyledTitle>
            <StyledSubtitle>
               Posted By: {AnnouncementInfo.Announcement.postedby}
               <br />
               {styleDate(AnnouncementInfo.Announcement.date)}
            </StyledSubtitle>
            <p />
            <StyledBody className="text-center">
               {AnnouncementInfo.Announcement.text}
            </StyledBody>
         </Modal.Body>
         <Modal.Footer>
            <StyledButton onClick={onHide}>Close</StyledButton>
         </Modal.Footer>
      </StyledModal>
   );
};
AnnouncementModal.propTypes = {
   show: PropTypes.bool.isRequired,
   onHide: PropTypes.func.isRequired,
   AnnouncementInfo: PropTypes.objectOf(PropTypes.any),
};
AnnouncementModal.defaultProps = {
   AnnouncementInfo: {
      title: 'New Protocol',
      text: 'This is the announcement.',
      date: '2021-02-04',
      link: '#',
      postedby: 'Admin',
   },
};
export default AnnouncementModal;
