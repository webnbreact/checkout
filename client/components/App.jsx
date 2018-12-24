import React from 'react';
import Header from './Header.jsx';
import Book from './Book.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <Header />
          <Book />
          <div>
            <span>Report this listing</span>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
