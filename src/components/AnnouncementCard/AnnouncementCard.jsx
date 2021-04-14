import { React, useState } from 'react';
import { Card } from 'react-bootstrap';
import AnnouncementModal from '../AnnouncementModal/AnnouncementModal';

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

export default (Announcement) => {
   const [showModal, setShowModal] = useState('false');
   const handleCloseModal = () => {
      console.log('handle close');
      setShowModal('false');
   };
   const handleShowModal = () => {
      console.log('handle show');
      setShowModal('true');
   };
   return (
      <>
         <Card style={{ width: '18rem ' }}>
            <Card.Body>
               <div>
                  <Card.Title>{Announcement.Announcement.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                     {styleDate(Announcement.Announcement.date)}
                  </Card.Subtitle>
                  <Card.Text>{Announcement.Announcement.text}</Card.Text>
               </div>
               <Card.Link onClick={handleShowModal}>Read More</Card.Link>
            </Card.Body>
         </Card>
         <AnnouncementModal
            show={showModal}
            onHide={handleCloseModal}
            AnnouncementInfo={Announcement}
         />
      </>
   );
};
