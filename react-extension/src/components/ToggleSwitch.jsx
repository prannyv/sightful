import React from 'react'
import styled from '@emotion/styled';
const ToggleSwitch = ({ name, checkbox, handleCheckboxChange }) => {
  return (
    <Switch>
      <input 
        type="checkbox"
        name={name}
        checked={checkbox}
        onChange={handleCheckboxChange}
      />
      <span class="slider round"></span>
    </Switch>
  )
}
const Switch = styled.label`
  position: relative;
  display: flex;
  margin-top: 20px;
  width: 50px;
  height: 22px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  input:checked + .slider {
    background-color: #2196F3;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    border-radius: 34px;
    right: 0;
    bottom: 0;
    height: 22px;
    width: 50px;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(25px);
    -ms-transform: translateX(25px);
    transform: translateX(25px);
  }
  
  .slider:before {
    position: absolute;
    border-radius: 50%;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
`


export default ToggleSwitch
