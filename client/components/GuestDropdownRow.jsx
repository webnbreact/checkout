import React from 'react';
import { GuestRowStyle } from './styled/Styled.jsx';


const GuestDropdownRow = ({ group, ages }) => (
  <GuestRowStyle>
    <div className="row no-gutters align-items-center h-100">
      <div className="col-7">
        {group}
      </div>
      <div className="col-5">
        <div className="row no-gutters">
          <div className="col">
            [-]
          </div>
          <div className="col">
            [X]
          </div>
          <div className="col">
            [+]
          </div>
        </div>
      </div>
    </div>
  </GuestRowStyle>
);

export default GuestDropdownRow;
