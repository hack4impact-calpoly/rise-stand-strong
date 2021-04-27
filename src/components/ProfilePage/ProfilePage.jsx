import { React } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UpcomingShiftCard from '../Shifts/UpcomingShiftCard/UpcomingShiftCard';

const StyledTitle = styled.h1`
   font-size: 48px;
   text-align: center;
   font-family: nunito, sans-serif;
   font-weight: 700px;
   line-height: 65px;
`;

const UserInfoContainer = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-item: center;
`;

const RecentShiftsContainer = styled.section`
   margin: 50px 0px 15px 30px;
   margin-right: 30px;
`;

const StyledSubtitle2 = styled.h6`
   margin-top: 10px;
   font-size: 16px;
   text-align: center;
   font-family: nunito, sans-serif;
   line-height: 22px;
`;

const StyledSubtitle = styled.h3`
   font-size: 36px;
   margin: 20px 0px 20px 0px;
   font-family: nunito, sans-serif;
   font-weight: 600px;
   line-height: 49px;
`;

const StyledButton = styled(Button)`
   color: #ae4c33;
   margin-top: 15px;
   font-family: nunito, sans-serif;
   font-size: 18px;
   line-height: 25px;
   font-weight: bold;
`;

const StyledButton2 = styled(Button)`
   color: #024e6b;
   margin-top: 15px;
   font-family: nunito, sans-serif;
   font-size: 18px;
   line-height: 25px;
   font-weight: bold;
`;

const StyledLink = styled(Link)`
   color: #ae4c33;
   margin-top: 15px;
   text-align: center;
   font-family: nunito, sans-serif;
   font-size: 18px;
   line-height: 25px;
   font-weight: bold;
`;

const UserInfo = {
   Name: 'Mary Dunn',
   Email: 'mary.dunn@gmail.com',
   CellPhoneNumber: '805 555-5555',
};

const CardData = {
   from: '2021-03-9 8:00:00',
   to: '2021-03-9 8:00:00',
   link: '#',
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
         <StyledLink to="/editprofile">
            Edit contact information &gt;
         </StyledLink>
         <StyledButton variant="link">Change your password &gt; </StyledButton>
      </UserInfoContainer>
      <RecentShiftsContainer>
         <StyledSubtitle>Recent Shifts</StyledSubtitle>
         <UpcomingShiftCard cardData={CardData} />
         <UserInfoContainer>
            <StyledButton2 variant="link">
               See all your past shifts &gt;{' '}
            </StyledButton2>
         </UserInfoContainer>
      </RecentShiftsContainer>
   </div>
);
