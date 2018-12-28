import React from 'react';
import { GuestDropdownStyle } from './styled/Styled.jsx';

const GuestDropdown = ({ displayDropdown }) => (
  <GuestDropdownStyle>
    <div>
      <div>
        [Adult count]
      </div>
      <div>
        [Children count]
      </div>
      <div>
        [Infants count]
      </div>
      <div>
        <div>
          [guest maximum note]
        </div>
        <div>
          <button type="button" onClick={() => displayDropdown('none')}>Close</button>
        </div>
      </div>
    </div>
  </GuestDropdownStyle>
);

export default GuestDropdown;
