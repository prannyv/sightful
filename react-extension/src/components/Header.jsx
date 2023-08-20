import React from 'react'
import styled from '@emotion/styled';
import { ReactComponent as Logo } from '../res/logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        <Logo className='logo'/>
        <h1>Sightful</h1>
      </Title>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background-image: linear-gradient(to bottom right, #FE5DB7, #36B3FA);
  height: 80px;
  width: 100vw;
  position: fixed;
  top: 0px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  > h1 {
    color: white;
    font-family: Helvetica Now;
    font-size: 28px;
    font-weight: 600;
    font-style: italic;
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
    margin-left: 30px;
  }
  .logo {
    width: 30px;
    margin-left: 40px;
  }
`

export default Header
