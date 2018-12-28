import React from 'react';
import GuestDropdown from './GuestDropdown.jsx';
import { BoldText, BoxText, BoxIcon, BoxWrapper, GuestMenuBtn } from './styled/Styled.jsx';

const Guests = ({dropdown, displayDropdown, handleChange}) => (
  <div>
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
      {(dropdown === 'guest') ? <GuestDropdown displayDropdown={displayDropdown} /> : null}
    </BoxWrapper>
  </div>
);

export default Guests;
