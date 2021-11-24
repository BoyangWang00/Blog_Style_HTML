import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Component/headerComp/header';
import Footer from './Component/footerComp/footer';
import ColContainer from './Component/colContainerComp/colContainer';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Content extends Component {
  render() {
    return (
        <div className = "Content">
        <Header /> 
        <ColContainer />
        <Footer />
        </div>
    );
  }
}


ReactDOM.render(
    <Content />,
    document.getElementById('root')
);