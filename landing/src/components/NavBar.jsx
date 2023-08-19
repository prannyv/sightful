import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <NavContainer>
      <LeftBar>
        <p>Sightful</p>
      </LeftBar>
      <RightBar/>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  margin-top: 50px;
  width: 100vw;
  z-index: 9999;
`

const LeftBar = styled.div`
  width: 15vw;
  background-color: black;
  height: 70px;
  clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
  clip-path: path('M 5% 2% 
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    color: white;
    font-family: Helvetica Now;
    font-weight: 800;
    font-size: 20px;
  }
`

const RightBar = styled.div`
  clip-path: polygon(4% 0%, 100% 0%, 100% 100%, 0% 100%);
  
  width: 75vw;
  height: 70px;
  background-color: white;
  border-radius: 12px;
`

const Filter = styled.svg`
  visibility: hidden; 
  position: absolute;
`

export default NavBar
