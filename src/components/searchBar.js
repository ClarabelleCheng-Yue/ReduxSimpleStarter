import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />;
// };

class SearchBar extends Component {
  // initialize state in class based component
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return ( 
      <div className="search-bar">
      <input 
        value={ this.state.term }
        onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  // onInputChange(event) {
  //   // event arg is event object that has info of input
  //   console.log('event: ', event.target.value);
  // }
}

export default SearchBar;