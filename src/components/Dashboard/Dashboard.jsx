import React from 'react';
import { CardColumns, Button } from 'react-bootstrap';
import styled from 'styled-components';
import DemoCards from './DemoCards';
import UpcomingShiftCard from '../UpcomingShiftCard/UpcomingShiftCard';

const StyledCardGroup = styled(CardColumns)`
  margin: 20px;
  font-size: 12px;
  
`;
const StyledContainer = styled.div`
  margin: 20px;
  padding: 10px;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.15);
`;
const StyledTitle = styled.h2`
  margin: 20px 0px 15px 20px;
`;
const StyledSubtitle = styled.h3`
  margin: 20px 0px 15px 20px;
`;

const ShiftData = [
  {
    Date: 'Tuesday March 20th',
    Time: '8:00pm',
  },
  {
    Date: 'Tuesday March 30th',
    Time: '9:00pm',
  },
];

const CardData = [
  {
    from: '2021-03-9 8:00:00',
    to: '2021-03-9 8:00:00',
    link: '#',
  },
];

export default (UserData) => (
  <div>
    <StyledTitle>
      Hi
      {UserData.name}
      .
    </StyledTitle>
    <StyledSubtitle> Your Next Shift </StyledSubtitle>
    <StyledContainer>
      <StyledCardGroup>
        {CardData && CardData.length > 0 && CardData.map((item) => (
          <UpcomingShiftCard cardData={item} />

        ))}
      </StyledCardGroup>
      <Button variant="link">See All Upcoming Shifts &gt; </Button>
    </StyledContainer>
    <StyledSubtitle> Announcements </StyledSubtitle>
    <StyledContainer>
      <StyledCardGroup>
        {ShiftData && ShiftData.length > 0 && ShiftData.map((item) => (
          <DemoCards CardData={item} />

        ))}
      </StyledCardGroup>
      <Button variant="link">See All Announcements &gt;</Button>
    </StyledContainer>
  </div>
);
