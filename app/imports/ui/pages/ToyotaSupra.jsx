import React from 'react';
import Stickynavbar from '../components/StickyNavbar';
import Middlemenu from '../components/Middlemenu';
import Exterior from '../components/exterior';
import Interior from '../components/interior';
import SupraSpec from '../components/SupraSpec';

export default class ToyotaSupra extends React.Component {
  render() {
    return (
      <div>
        <Middlemenu/>
        <br/>
        <Exterior/>
        <br/>
        <Interior/>
        <br/>
        <SupraSpec/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}