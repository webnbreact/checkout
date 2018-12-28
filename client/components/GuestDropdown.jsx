import React from 'react';

const GuestDropdown = ({ displayDropdown }) => (
  <div>
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
  </div>
);

export default GuestDropdown;
