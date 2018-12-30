import React from 'react';
import { GuestRowStyle, ButtonAddGuest } from './styled/Styled.jsx';


const GuestDropdownRow = ({ guests, group, ages, handleGuestCountChange }) => {
  const agesRow = (
    <div className="row font-weight-normal mt-1 text-muted small">
      <div className="col">
        {ages}
      </div>
    </div>
  );
  const adultsRow = (<div className="pt-3">{group}</div>);
  const adultsPadTop = 'row no-gutters pt-2';
  const noPad = 'row no-gutters';
  const ageGroup = group.toLowerCase();
  return (
    <GuestRowStyle>
      <div className="row no-gutters align-items-center h-100">
        <div className="col-7 h6">
          {group === 'Adults' ? adultsRow : group}
          {ages !== null ? agesRow : null}
        </div>
        <div className="col-5">
          <div className={group === 'Adults' ? adultsPadTop : noPad}>
            <div className="col">
              <ButtonAddGuest type="button" onClick={() => handleGuestCountChange(ageGroup, -1)}>
                <i className="fas fa-minus-circle" />
              </ButtonAddGuest>
            </div>
            <div className="col align-self-center text-center pr-2 h6">
              {guests[ageGroup]}
            </div>
            <div className="col">
              <ButtonAddGuest type="button" onClick={() => handleGuestCountChange(ageGroup, 1)}>
                <i className="fas fa-plus-circle" />
              </ButtonAddGuest>
            </div>
          </div>
        </div>
      </div>
    </GuestRowStyle>
  );
}

export default GuestDropdownRow;
