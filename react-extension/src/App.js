import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Overview from './tabs/Overview';
import Detail from './tabs/Detail';
import Setting from './tabs/Setting';

function App() {
  const [ currTab, setCurrTab ] = useState(1); 

  return (
    <ExtensionContainer>
      <Header/>
      {currTab === 1 && <Overview/>}
      {currTab === 2 && <Detail/>}
      {currTab === 3 && <Setting/>}
      <NavBar currTab={currTab} setCurrTab={setCurrTab}/>
    
    </ExtensionContainer>
  );
}

const ExtensionContainer = styled.div`
  width: 450px;
  overflow: scroll;
  padding-bottom: 110px;
  padding-top: 10px;
  background-color: #F9F8F8;
`



export default App;
