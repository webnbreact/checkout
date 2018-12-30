import React from 'react';
import GuestDropdown from './GuestDropdown.jsx';
import { GuestsStyle, BoldText, BoxText, BoxIcon, BoxWrapper, GuestMenuBtn } from './styled/Styled.jsx';

const Guests = ({guests, dropdown, displayDropdown, handleGuestCountChange}) => {
  const guestCount = guests.adults + guests.children;
  const infantCount = guests.infants;
  const infantDisplay = (<span>, {infantCount} infant{infantCount > 1 ? 's' : null}</span>);
  return (
    <GuestsStyle>
      <div style={{ marginBottom: '5px' }}>
        <BoldText>Guests</BoldText>
      </div>
      <BoxWrapper>
        <GuestMenuBtn type="button" onClick={() => displayDropdown('guest')}>
          <div>
            <BoxText>
              <span>
                {guestCount} guest{guestCount > 1 ? 's' : null}
              </span>
              {infantCount > 0 ? infantDisplay : null}
            </BoxText>
            <BoxIcon>
              <i className="fas fa-angle-down" style={{ fontSize: '1.4em' }} />
            </BoxIcon>
          </div>
        </GuestMenuBtn>
        {(dropdown === 'guest') ? <GuestDropdown guests={guests} displayDropdown={displayDropdown} handleGuestCountChange={handleGuestCountChange} /> : null}
      </BoxWrapper>
    </GuestsStyle>
  );
}

export default Guests;
