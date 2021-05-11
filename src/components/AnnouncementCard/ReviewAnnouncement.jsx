import { React } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';
// import { postAnnouncement } from '../../api';

const Header = styled.h2`
   font-family: Arial;
   font-weight: bold;
   font-size: 30px;
   line-height: 41px;
   margin: 30px 32px 0px 32px;
`;
const Header2 = styled.h2`
   font-family: Arial;
   font-size: 14px;
   line-height: 19px;
   margin: 5px 32px 0px 32px;
`;
const Header3 = styled.h3`
   font-family: Arial;
   font-size: 14px;
   line-height: 19px;
   margin: 5px 32px 0px 32px;
`;

const EditButtonContainer = styled.div`
   width: 100%;
   margin-left: 32px;
`;
const LinkButtonContainer = styled.div`
   width: 75%;
   border-bottom: 2px solid #c0c0c0;
   margin: 5px 32px 10px 32px;
`;

// const AnnouncementData = {
//    title: 'Valentines Day Work Schedule',
//    author: 'John Doe',
//    text:
//       'With the upcoming Valentines day comes an altered work schedule! Click the link to see any changes.',
//    createdAt: '2021-01-30T10:30:00',
//    link: 'https://rise/updates/vday',
// };

export default (AnnouncementData) => {
   const date = new Date(AnnouncementData.createdAt);
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
   return (
      <div>
         <EditButtonContainer>
            <Button variant="light">Edit</Button>
         </EditButtonContainer>
         <Header>{AnnouncementData.title}</Header>
         {console.log(date)}
         <Header2>
            Posted by {AnnouncementData.author} on {months[date.getMonth()]}{' '}
            {date.getDate()}, {date.getFullYear()}
         </Header2>
         <LinkButtonContainer>
            <Button variant="link" href={AnnouncementData.link}>
               <FaExternalLinkAlt />
               {AnnouncementData.link}
            </Button>
         </LinkButtonContainer>
         <Header3>{AnnouncementData.text}</Header3>
      </div>
   );
};
