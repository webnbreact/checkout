import React from 'react';

const Book = () => (
  <form action="">
    <div>
      <Dates />
      <Guests />
    </div>
    <div>
      <button type="submit">
        <span>Request to Book</span>
      </button>
    </div>
    <div>
      <span>You won't be charged yet</span>
    </div>
  </form>
);

export default Book;
