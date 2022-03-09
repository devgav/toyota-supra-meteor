import React from 'react';
import Middlemenu from '../components/Middlemenu';
import Exterior from '../components/Exterior';
import Interior from '../components/Interior';
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
