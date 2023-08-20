import React, { useState } from 'react'
import styled from '@emotion/styled'
const Setting = () => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes(prevCheckboxes => ({
      ...prevCheckboxes,
      [name]: checked
    }));
  };

  return (
    <AnalysisContainer>
      <h1>Settings</h1>
      <label> Checkbox 1
        <input
          type="checkbox"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={handleCheckboxChange}
        />
        <span class="checkmark"></span>
        
      </label>
      <label>
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
        />
        Checkbox 2
      </label>
      <label>
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={handleCheckboxChange}
        />
        Checkbox 3
      </label>
    </AnalysisContainer>
  )
}

const AnalysisContainer = styled.div`
  width: 100vw;
  padding-bottom: 50px;
  background-color: #F9F8F8;
  display: flex;
  flex-direction: column;
  > h1 {
    font-weight: 600;
    font-family: Helvetica Now;
    font-size: 30px;
    width: 1370px;
    align-self: center;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  label {
    font-size: 20px;
    width: 1370px;
    align-self: center;
    margin-bottom: 20px;

  }
`

export default Setting
