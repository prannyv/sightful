import React from 'react'
import styled from '@emotion/styled'
import ToggleSwitch from '../../components/ToggleSwitch';
const Setting = ({ currWord, setCurrWord, wordList, setWordList, checkboxes, handleCheckboxChange}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    setWordList([...wordList, currWord]);
    setCurrWord('');
  }

  return (
    <AnalysisContainer>
      <h1>Settings</h1>
      <Buttons>
        <InputContainer>
          <p>Hate/Violence</p>
          <ToggleSwitch name='checkbox1' checkbox={checkboxes.checkbox1} handleCheckboxChange={handleCheckboxChange}/>
        </InputContainer>

        <InputContainer className='second'>
          <p>Cussing</p>
          <ToggleSwitch name='checkbox2' checkbox={checkboxes.checkbox2} handleCheckboxChange={handleCheckboxChange}/>
        </InputContainer>
      </Buttons>

      <InputURL onSubmit={handleSubmit}>
        {/* title of song */}
        <input
          type="text"
          value={currWord}
          placeholder="Input Trigger"
          onChange={(e) => setCurrWord(e.target.value)}
        />
        <button type="button" onClick={() => setWordList([])}>Clear</button>
      </InputURL>
      <TriggerList>
        {wordList.map((item, index) => (
          <div key={index} className='word'>
            <p>{item}</p>
          </div>
        ))}
      </TriggerList>
      
    </AnalysisContainer>
  )
}

const AnalysisContainer = styled.div`
  width: 100vw;
  padding-bottom: 100px;
  background-color: #F9F8F8;
  display: flex;
  flex-direction: column;
  > h1 {
    font-weight: 600;
    font-family: Helvetica Now;
    font-size: 40px;
    align-self: center;
    margin-top: 50px;
    margin-bottom: 20px;
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    background-image: linear-gradient(to bottom right, #FCA27C, #FF5AB4);

  }
  label {
    font-size: 20px;
    width: 1370px;
    align-self: center;
    margin-bottom: 20px;

  }
`

const Buttons = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
`

const InputContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 300px;
  justify-content: center;
  font-family: Helvetica Now;
  > p {
    font-weight: 500;
    font-size: 20px;
    margin-right: 20px;
    margin-left: 30px;
   
  }

`

const InputURL = styled.form`
  align-self: center;
  > input {
    width: 600px;
    height: 50px;
    padding: 10px;
    padding-left: 30px;
    color: black;
    border: none;
    font-size: 18px;
    outline: none;
    border-radius: 35px;
    font-family: Helvetica Now;
    font-weight: 500;
    margin-top: 20px;
    background-color: white;
    ::placeholder {
      color: rgba(0, 0, 0, 0.562);
    }
  }

  > button {
    width: 100px;
    height: 50px;
    margin-left: 10px;
    padding: 10px;
    color: white;
    background-color: #1A1A1A;
    border: none;
    font-size: 18px;
    outline: none;
    cursor: pointer;
    border-radius: 35px;
    font-family: Helvetica Now;
    j
  }
`

const TriggerList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 700px;
  align-self: center;
  margin-left: 20px;
  font-size: 20px;
  .word {
    :nth-of-type(4n) {
      background-image: linear-gradient(to bottom right, #FF5AB4, #A684D6);
    }
    :nth-of-type(4n+3) {
      background-image: linear-gradient(to bottom right, #A684D6, #36B3FA);
    }
    :nth-of-type(4n+2) {
      background-image: linear-gradient(to bottom right, #36B3FA, #CEEB94);
    }
    :nth-of-type(4n+1) {
      background-image: linear-gradient(to bottom right, #FCA27C, #FF5AB4);
    }
    
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 30px;
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px;
    width: 160px;
    padding: 0px;
    border-radius: 30px;
    > p {
      display: block;
      color: rgb(20, 20, 20);
      inline-size: 100px;
      overflow-wrap: break-word;
      padding-left: 20px;
      padding-right: 20px;
      text-align: center;
      color: white;
    }
  }
  
`

export default Setting
