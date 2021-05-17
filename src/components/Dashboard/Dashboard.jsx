import React from 'react';
import { CardColumns, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';
import AnnouncementCard from '../AnnouncementCard/AnnouncementCard';
import UpcomingShiftCard from '../Shifts/UpcomingShiftCard/UpcomingShiftCard';
import LinkBar from '../LinkBar/LinkBar';

const Header1 = styled.h1`
   font-family: Arial;
   font-style: Bold;
   font-size: 3em;
   margin: 0em 0em 0.75em 32px;
   line-height: 1em;
   margin-top: 60px;
   @media screen and (min-width: 800px) {
      margin-left: 318px;
   }
`;

const Header2 = styled.h2`
   font-family: Arial;
   font-weight: normal;
   font-size: 36px;
   line-height: 25px;
   margin: 0em 0em 0.75em 32px;
   @media screen and (min-width: 800px) {
      margin-left: 318px;
   }
`;

const Header3 = styled.h3`
   font-family: Arial;
   font-weight: normal;
   font-size: 18px;
   margin: 0px 0px 10px 32px;
   color: rgba(82, 82, 82, 1);
   @media screen and (min-width: 800px) {
      margin-left: 318px;
   }
`;
const Header4 = styled.h4`
   font-family: Arial;
   font-weight: bold;
   font-size: 18px;
   text-align: center;
   color: rgba(2, 78, 107, 1);
`;
const Header5 = styled.h4`
   font-family: Arial;
   font-weight: Bold;
   font-size: 18px;
   text-align: center;
   color: rgba(81, 40, 84, 1);
`;
const ButtonContainer = styled.div`
   text-align: center;
`;
const ShiftDiv = styled.div`
   margin-bottom: 15px;
`;

const StyledCardGroup = styled(CardColumns)`
   margin: 0px 32px 0px 32px;
   font-size: 12px;
   @media screen and (min-width: 800px) {
      margin-left: 318px;
   }
`;

const Announcements = [
   {
      title: 'New Protocol',
      text:
         'Hello all, after several points of feedback from our volunteers, we have decided to alter some standards...',
      date: '2021-03-31',
      link: '#',
   },
   {
      title: 'Dont eat the cheese!',
      text:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna et dolor scelerisque tincidunt cras etiam...',
      date: '2021-02-014',
      link: '#',
   },
];

const CardData = [
   {
      from: '2021-04-6 5:30:00',
      to: '2021-04-6 8:00:00',
      link: '#',
   },
   {
      from: '2021-04-8 5:30:00',
      to: '2021-04-8 8:00:00',
      link: '#',
   },
];

const PageDiv = styled.div`
   padding-bottom: 100px;
`;

export default (UserData) => (
   <div>
      <PageDiv>
         <Header1>
            Hi
            {UserData.name}.
         </Header1>
         <ShiftDiv>
            <Header2> Your next shifts </Header2>
            <Header3> This week</Header3>
            <StyledCardGroup>
               {CardData &&
                  CardData.length > 0 &&
                  CardData.map((item) => <UpcomingShiftCard cardData={item} />)}
            </StyledCardGroup>
            <ButtonContainer>
               <Button variant="link">
                  <Header4>
                     See all your upcoming shifts <FaChevronRight />
                  </Header4>
               </Button>
            </ButtonContainer>
         </ShiftDiv>
         <Header2> Announcements </Header2>

         <StyledCardGroup>
            {Announcements &&
               Announcements.length > 0 &&
               Announcements.map((announcement) => (
                  <AnnouncementCard Announcement={announcement} />
               ))}
         </StyledCardGroup>
         <ButtonContainer>
            <Button variant="link">
               <Header5>
                  See all announcements <FaChevronRight />
               </Header5>
            </Button>
         </ButtonContainer>
      </PageDiv>
      <LinkBar />
   </div>
);
