import React, { useState } from 'react';
// import { useParams } from "react-router-dom";
import { toDate, format } from 'date-fns';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { DAY_OF_WEEK } from '../../constants';
import SelectableShiftCard from './SelectableShiftCard';
import AssignedShiftCard from './AssignedShiftCard';
import { ReactComponent as RiseLogo } from './RISE_Logo.svg';

const StyledSelectableShiftCard = styled(SelectableShiftCard)`
   width: calc(100vw - 60px);
   margin-bottom: 20px;
   margin-left: 10px;
`;

const StyledAssignedShiftCard = styled(AssignedShiftCard)`
   margin-left: 10px;
`;

const CancelShiftButton = styled.button`
   border-radius: 4px;
   background-color: #ae4c33;
   color: white;
   border: none;
   width: calc(100vw - 40px);
   font-size: 14px;
   height: 40px;
   position: absolute;
   bottom: 50px;

   &:hover {
      background-color: ${(props) => (props.disabled ? '#FFF2EE' : '#AE4C33')};
      color: ${(props) => (props.disabled ? '#AE4C33' : 'white')};
   }

   &:disabled {
      background-color: #fff2ee;
      color: #ae4c33;
   }
`;

const Navbar = styled.div`
   margin-bottom: 20px;
`;

const BackButton = styled.button`
   background: none;
   color: #024e6b;
   border: none;
   padding: 0px;
   font-size: 24px;
`;

const PositionedLogo = styled(RiseLogo)`
   width: 60px;
   position: absolute;
   left: calc(100vw / 2 - 30px);
`;

export default () => {
   const [selectedState, setSelectedState] = useState([false, false, false]);
   const history = useHistory();
   console.log(selectedState);

   // TODO: Get the user phone number from their account
   const userPhone = '(123) 456-7891';

   // TODO: use this to grab corresponding shift from redux
   // const { startTimestamp } = useParams();
   const shift = {
      startTimestamp: 1617724800000,
      endTimestamp: 1617735600000,
      primary: 'Justin Poist',
      secondary: 'Jack Fales',
      primaryPhone: '(123) 456-7891',
      secondaryPhone: '(123) 456-7889',
   };

   const dayBackup = {
      name: 'Sam Sehnert',
      phone: '(123) 456-7823',
   };

   const shiftStartDate = toDate(shift.startTimestamp);
   const shiftEndDate = toDate(shift.endTimestamp);

   const shiftClicked = (selectedIndex) => () => {
      const newSelected = selectedState.map((selected, index) =>
         index === selectedIndex ? !selected : selected
      );
      setSelectedState(newSelected);
   };

   return (
      <div style={{ marginLeft: 20 }}>
         <Navbar>
            <BackButton
               onClick={() => {
                  history.goBack();
               }}
            >
               <FontAwesomeIcon icon={faArrowLeft} /> Back
            </BackButton>
            <PositionedLogo />
         </Navbar>

         <p>{DAY_OF_WEEK[shiftStartDate.getDay()]}</p>
         <h2>{format(shiftStartDate, 'MMMM d, y')}</h2>
         <h3>{`${format(shiftStartDate, 'h:mmaa')}-${format(
            shiftEndDate,
            'h:mmaa'
         )}`}</h3>

         {shift.primaryPhone === userPhone ? (
            <StyledSelectableShiftCard
               shiftName="Primary"
               assignedTo="You"
               selected={selectedState[0]}
               onClick={shiftClicked(0)}
            />
         ) : (
            <StyledAssignedShiftCard
               shiftName="Primary"
               name={shift.primary}
               phone={shift.primaryPhone}
            />
         )}

         {shift.secondaryPhone === userPhone ? (
            <StyledSelectableShiftCard
               shiftName="Backup"
               assignedTo="You"
               selected={selectedState[1]}
               onClick={shiftClicked(1)}
            />
         ) : (
            <StyledAssignedShiftCard
               shiftName="Backup"
               name={shift.secondary}
               phone={shift.secondaryPhone}
            />
         )}

         <h3>All Day</h3>
         {dayBackup.phone === userPhone ? (
            <StyledSelectableShiftCard
               shiftName="Second Backup"
               assignedTo="You"
               selected={selectedState[2]}
               onClick={shiftClicked(2)}
            />
         ) : (
            <StyledAssignedShiftCard
               shiftName="Second Backup"
               name={dayBackup.name}
               phone={dayBackup.phone}
            />
         )}

         <CancelShiftButton
            onClick={() => {
               console.log('Shift Cancel Clicked');
            }}
            disabled={!selectedState.includes(true)}
         >
            Cancel Shift
         </CancelShiftButton>
      </div>
   );
};
