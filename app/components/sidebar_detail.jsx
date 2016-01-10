import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';

export default class SidebarDetail extends React.Component {
  render() {
    return (
      <div className="centered">
        <h1>Tech Meetups Findr</h1>
        <p>Enter a city name to find local tech events.
        </p>
        <p>Powered by Meetup and Google Maps APIs.</p>
        <SearchBar />
      </div>
    );
  }
}
