import React from 'react';
import GuestDropdownRow from './GuestDropdownRow.jsx';
import { GuestDropdownStyle, ButtonClose } from './styled/Styled.jsx';

const GuestDropdown = ({ displayDropdown }) => {
  const ageGroup = ['Adults', 'Children', 'Infants'];
  const ages = [null, 'Ages 2-12', 'Under 2'];
  return (
    <GuestDropdownStyle>
      <div className="container-fluid">
        {ageGroup.map((group, index) => {
          return (<GuestDropdownRow group={group} ages={ages[index]} />);
        })}
        <div className="row no-gutters">
          <div>
            4 guests maximum. Infants don&#39;t count
            <br />
            toward the number of guests.
          </div>
          <div>
            <ButtonClose onClick={() => displayDropdown('none')}>
              Close
            </ButtonClose>
          </div>
        </div>
      </div>
    </GuestDropdownStyle>
  );
};

export default GuestDropdown;
