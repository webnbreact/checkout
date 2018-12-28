import React from 'react';
import GuestDropdown from './GuestDropdown.jsx';
import { GuestsStyle, BoldText, BoxText, BoxIcon, BoxWrapper, GuestMenuBtn } from './styled/Styled.jsx';

const Guests = ({dropdown, displayDropdown, handleChange}) => (
  <GuestsStyle>
    <div style={{ marginBottom: '5px' }}>
      <BoldText>Guests</BoldText>
    </div>
    <BoxWrapper>
      <GuestMenuBtn type="button" onClick={() => displayDropdown('guest')}>
        <div>
          <BoxText>
            <span>1 guest</span>
          </BoxText>
          <BoxIcon>
            <i className="fas fa-angle-down" style={{ fontSize: '2em' }} />
          </BoxIcon>
        </div>
      </GuestMenuBtn>
      {(dropdown === 'guest') ? <GuestDropdown displayDropdown={displayDropdown} handleChange={handleChange} /> : null}
    </BoxWrapper>
  </GuestsStyle>
);

export default Guests;
