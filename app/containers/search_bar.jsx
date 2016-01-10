import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMeetups } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
    // this (instance of searchBar) has an onInputChange function
    // so we bind that function to the SearchBar component context
    // and replace onInputChange by this.onInputChange
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchMeetups(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          placeholder="Enter your postcode"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMeetups }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
