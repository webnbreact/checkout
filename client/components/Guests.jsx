import React from 'react';
import GuestDropdown from './GuestDropdown.jsx';
import { Text } from './styled/Styled.jsx';

const Guests = ({dropdown, displayDropdown, handleChange}) => (
  <div>
    <label>
      <Text>Guests</Text>
    </label>
    <div>
      <button type="button" onClick={() => displayDropdown('guest')}>
        <div>
          <div>
            <span>1 guest</span>
          </div>
          <div>
            [^]
          </div>
        </div>
      </button>
      {(dropdown === 'guest') ? <GuestDropdown displayDropdown={displayDropdown} /> : null}
    </div>
  </div>
);

export default Guests;
