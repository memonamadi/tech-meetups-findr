import React, { Component } from 'react';
import SidebarDetail from './sidebar_detail';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="controls">
        <SidebarDetail />
      </div>
    );
  }
}
