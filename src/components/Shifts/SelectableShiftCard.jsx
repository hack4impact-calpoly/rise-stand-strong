import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

const SelectableShiftContainer = styled.div`
   background-color: #f5ffed;
   border-radius: 2px;
   border: 2px dashed ${(props) => (props.selected ? '#57B60C' : '#00000000')};

   color: #224407;
   height: 60px;

   display: flex;
   flex-direction: row;
`;

const IconContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   height: 57px;
   width: 60px;
`;

const VerticalCenter = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
`;

const SelectableShiftCard = (props) => {
   const { className, assignedTo, shiftName, selected, onClick } = props;

   return (
      <SelectableShiftContainer
         selected={selected}
         className={className}
         onClick={onClick}
      >
         <IconContainer>
            <FontAwesomeIcon icon={faCheckCircle} size="2x" />
         </IconContainer>

         <VerticalCenter>
            <div>
               <p style={{ marginBottom: 0 }}>{shiftName}</p>
               <p style={{ marginBottom: 0 }}>{assignedTo}</p>
            </div>
         </VerticalCenter>
      </SelectableShiftContainer>
   );
};

SelectableShiftCard.propTypes = {
   className: PropTypes.string,
   assignedTo: PropTypes.string.isRequired,
   shiftName: PropTypes.string.isRequired,
   selected: PropTypes.bool.isRequired,
   onClick: PropTypes.func,
};

SelectableShiftCard.defaultProps = {
   className: '',
   onClick: () => {},
};

export default SelectableShiftCard;
