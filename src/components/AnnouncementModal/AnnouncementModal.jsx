import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledModal = styled(Modal.Dialog)`
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

export default (Announcement) => (
   <StyledModal style={{ width: '18rem ' }}>
      <Modal.Header className="text-center">
         <StyledAnnouncements>Announcements</StyledAnnouncements>
      </Modal.Header>
      <Modal.Body>
         <StyledTitle>{Announcement.Announcement.title}</StyledTitle>
         <StyledSubtitle>
            Posted By:{Announcement.Announcement.PostedBy}n
         </StyledSubtitle>
         <StyledSubtitle>
            {styleDate(Announcement.Announcement.date)}
         </StyledSubtitle>
         <StyledBody className="text-center">
            {Announcement.Announcement.text}
         </StyledBody>
      </Modal.Body>
      <Modal.Footer>
         <StyledButton>Close</StyledButton>
      </Modal.Footer>
   </StyledModal>
);
