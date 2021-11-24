import React, {Component} from 'react';
import Con from './mainComp/Con';
import Nav from './navComp/nav';


class ColContainer extends Component {
  render() {
    return (
        <div className = "ColContainer">
        <Con />
        </div>
    );
  }
}

export default ColContainer;