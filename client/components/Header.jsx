import React from 'react';
import { Button, Text, Price, StarStyle } from './styled/Styled.jsx';

const Header = ({ state }) => {
  const numStars = Math.floor(state.avgRating / 2);
  const numHalfStars = state.avgRating % 2;
  const star = <i className="fas fa-star" />;
  const halfStar = <i className="fas fa-star-half" />;

  return (
    <div style={{ marginBottom: '15px' }}>
      <div>
        <Price>${state.nightlyPrice}</Price>
        <Text> per night</Text>
      </div>
      <div>
        <Button>
          <span>
            {[...Array(numStars)].map((item, index) => {
              return (
                <StarStyle key={index}>
                  {star}
                </StarStyle>
              );
            })}
            {[...Array(numHalfStars)].map((item, index) => {
              return (
                <StarStyle key={index + 5}>
                  {halfStar}
                </StarStyle>
              );
            })}
            <Text>{state.reviewCount}</Text>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
