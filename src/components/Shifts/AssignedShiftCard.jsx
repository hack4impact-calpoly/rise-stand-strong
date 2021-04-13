import React from 'react';
import PropTypes from 'prop-types';

const AssignedShiftCard = (props) => {
   const { className, shiftName, name, phone } = props;

   return (
      <div className={className}>
         <h4>{shiftName}</h4>
         <p>{`${name}-${phone}`}</p>
      </div>
   );
};

AssignedShiftCard.propTypes = {
   className: PropTypes.string,
   name: PropTypes.string.isRequired,
   shiftName: PropTypes.string.isRequired,
   phone: PropTypes.string.isRequired,
};

AssignedShiftCard.defaultProps = {
   className: '',
};

export default AssignedShiftCard;
