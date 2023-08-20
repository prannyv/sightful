import React, { useState} from 'react'
import styled from '@emotion/styled'
import DemoHeader from './DemoHeader'
import Analysis from './Analysis'
import SwitchTabs from './SwitchTabs'
import Setting from './Setting'

const Demo = () => {
  const [tab, setTab] = useState(1);
  const [currWord, setCurrWord] = useState('');
  const [ wordList, setWordList ] = useState([]);
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes(prevCheckboxes => ({
      ...prevCheckboxes,
      [name]: checked
    }));
  };

  return (
    <DemoContainer>
      <DemoHeader/>
      <SwitchTabs setTab={setTab}/>
      {tab === 1 ? <Analysis /> : <Setting currWord={currWord} setCurrWord={setCurrWord} wordList={wordList} setWordList={setWordList} checkboxes={checkboxes} handleCheckboxChange={handleCheckboxChange}/> }
    </DemoContainer>
  )
}

const DemoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default Demo
