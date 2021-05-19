import { React, useState } from 'react';
import { Card } from 'react-bootstrap';
import AnnouncementModal from '../AnnouncementModal/AnnouncementModal';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';

const Header1 = styled.h1`
   font-family: Arial;
   font-weight: Bold;
   font-size: 18px;
   line-height: 25px;
`;

const Header2 = styled.h2`
   font-family: Arial;
   font-weight: thin;
   font-size: 14px;
   line-height: 19px;
   margin: 10px 0px 0px 1em;
`;

const Header3 = styled.h3`
   font-family: Arial;
   font-size: 16px;
   line-height: 22px;
`;

const Header4 = styled.h4`
   font-family: Arial;
   font-weight: Bold;
   font-size: 18px;
   line-height: 25px;
   color: rgba(81, 40, 84, 1);
`;

const AAContainer = styled.div`
   text-align: center;
`;

const HeaderContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
`;
const CardTitle = styled(Card.Title)`
   flex-basis: 50%;
`;
const CardSubtitle = styled(Card.Subtitle)`
   flex-basis: 50%;
   text-align: right;
`;

export default (Announcement) => {
   const d = new Date(Announcement.Announcement.date);
   const months = [
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
   const [showModal, setShowModal] = useState(false);
   const toggleModal = () => {
      setShowModal(!showModal);
   };
  
   return (
      <Card>
         <Card.Body>
            <div>
               <HeaderContainer>
                  <CardTitle>
                     <Header1>{Announcement.Announcement.title}</Header1>
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted">
                     <Header2>
                        {months[d.getMonth()]} {d.getDate()}, {d.getFullYear()}
                     </Header2>
                  </CardSubtitle>
               </HeaderContainer>
               <Card.Text>
                  <Header3>{Announcement.Announcement.text}</Header3>
               </Card.Text>
               <AAContainer>
                  <Card.Link onClick={toggleModal}>
                     <Header4>
                        Read More <FaChevronRight />
                     </Header4>
                  </Card.Link>
               </AAContainer>
            </div>
         </Card.Body>
      </Card>
      <AnnouncementModal
         show={showModal}
         onHide={toggleModal}
         AnnouncementInfo={Announcement}
      />
   );
};
