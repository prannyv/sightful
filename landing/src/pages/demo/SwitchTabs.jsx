import React from 'react'
import styled from '@emotion/styled'

const SwitchTabs = ({ setTab }) => {
  return (
    <OuterContainerContainer>
      <button onClick={e => setTab(1)}>Analysis</button>
      <button onClick={e => setTab(2)}>Settings</button>
    </OuterContainerContainer>
  )
}

const OuterContainerContainer = styled.div`
  height: 90px;
  display: flex;
  width: 1370px;
  align-self: center;
  > button {
    width: 200px;
    height: 50px;
    color: white;
    font-family: Helvetica Now;
    font-size: 20px;
    font-style: italic;
    border-radius: 25px;
    border: none;
    align-self: center;
    margin-top: 40px;
    transition: 300ms;
    cursor: pointer;
    :first-of-type {
      background-image: linear-gradient(to bottom right, #FCA27C, #FF5AB4);
    }
    :nth-of-type(2) {
      margin-left: 30px;
      background-image: linear-gradient(to bottom right, #36B3FA, #A684D6);
    }
    :hover {
      filter: brightness(1.1);
    }
  }
  

`


export default SwitchTabs
