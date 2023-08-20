import React, { useState } from 'react'
import styled from '@emotion/styled';
import ToggleSwitch from '../components/ToggleSwitch';

const Setting = ({ currWord, setCurrWord, wordList, setWordList, checkboxes, handleCheckboxChange}) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setWordList([...wordList, currWord]);
    setCurrWord('');
  }

  return (
    <SettingContainer>
      <h1>Settings: Filters</h1>
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
        <div>
          <button type="button" onClick={() => setWordList([])}>Clear</button>
          <button type="submit" >Submit</button>
        </div>
      </InputURL>
      <TriggerList>
        {wordList.map((item, index) => (
          <div key={index} className='word'>
            <p>{item}</p>
          </div>
        ))}
      </TriggerList>
      
    </SettingContainer>
  )
}

const SettingContainer = styled.div`
  display: flex;
  min-height: 400px;
  width: 100vw;
  margin-top: 80px;
  background-color: #F9F8F8;
  flex-direction: column;
  > h1 {
    font-weight: 600;
    font-size: 20px;
    padding-left: 30px;
    padding-top: 10px;
  }
`

const Buttons = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 100vw;
`

const InputContainer = styled.div`
  display: flex;
  margin-top: 0px;
  width: 210px;
  justify-content: center;
  font-family: Helvetica Now;
  > p {
    font-weight: 500;
    font-size: 18px;
    margin-right: 20px;
    margin-left: 30px;
   
  }

`

const InputURL = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  > input {
    width: 340px;
    height: 40px;
    padding: 10px;
    padding-left: 30px;
    color: black;
    border: none;
    font-size: 16px;
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

  > div {
    display: flex;
    justify-content: space-between;
    > button {
      width: 120px;
      height: 40px;
      margin-top: 20px;
      margin-left: 10px;
      padding: 10px;
      color: white;
      background-color: #1A1A1A;
      border: none;
      font-size: 16px;
      outline: none;
      cursor: pointer;
      border-radius: 15px;
      font-family: Helvetica Now;
      
    }
  }

`

const TriggerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 390px;
  align-self: center;
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
    margin-top: 20px;
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px;
    padding: 0px;
    border-radius: 30px;
    > p {
      display: block;
      font-size: 14px;
      color: rgb(20, 20, 20);
      inline-size: 90px;
      overflow-wrap: break-word;
      padding-left: 10px;
      padding-right: 10px;
      text-align: center;
      color: white;
    }
  }
  
`

export default Setting
