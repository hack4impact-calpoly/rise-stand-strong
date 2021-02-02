import { React } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import UpcomingShiftCard from '../UpcomingShiftCard/UpcomingShiftCard';

const StyledTitle = styled.h1`
  font-size: 48px;
  text-align: center;
`;
const UserInfoContainer = styled.section`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-item:center;
`;
const RecentShiftsContainer = styled.section`
  margin: 50px 0px 15px 30px;
`;
const StyledSubtitle2 = styled.h6`
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
`;
const StyledSubtitle = styled.h3`
  font-size: 36px;
  margin: 20px 0px 20px 0px;
`;
const StyledButton = styled(Button)`
  color: #6666FF;
  margin-top: 15px;
`;
const UserInfo = {
  Name: 'Mary Dunn',
  Email: 'mary.dunn@gmail.com',
  CellPhoneNumber: '805 555-5555',
};
export default (UserData) => (
  <div>
    <UserInfoContainer>
      <StyledTitle>
        {UserData.Name}
        {UserInfo.Name}
      </StyledTitle>
      <StyledSubtitle2>{UserInfo.Email}</StyledSubtitle2>
      <StyledSubtitle2>{UserInfo.CellPhoneNumber}</StyledSubtitle2>
      <StyledButton variant="link">Edit contact information &gt; </StyledButton>
      <StyledButton variant="link">Change your password &gt; </StyledButton>
    </UserInfoContainer>
    <RecentShiftsContainer>
      <StyledSubtitle>Recent Shifts</StyledSubtitle>
      <UpcomingShiftCard />
      <StyledButton variant="link">See all your past shifts &gt; </StyledButton>
    </RecentShiftsContainer>
  </div>
);
