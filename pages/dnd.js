import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Header from '../components/Header'
import Dustbin from '../components/Dustbin';
import Box from '../components/Box';

export default () => (
  <div style={{height: '100%'}}>
    <Header />
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
    <DragDropContextProvider backend={HTML5Backend}>
      <div style={{maxWidth: '50%'}}>
        <Dustbin />          
        <div style={{ display: 'flex' }}>
          <Box name="Glass" />
          <Box name="Banana" />
          <Box name="Paper" last={true}/>
        </div>
      </div>
    </DragDropContextProvider>
    </div>
    </div>
)