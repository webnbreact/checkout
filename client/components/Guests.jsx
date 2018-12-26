import React from 'react';
import GuestDropdown from './GuestDropdown.jsx';

const Guests = ({dropdown, displayDropdown, handleChange}) => (
  <div>
    <label>
      <span>Guests</span>
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
