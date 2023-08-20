import React from 'react'
import styled from '@emotion/styled';
import { ReactComponent as Overview } from '../res/overview.svg';
import { ReactComponent as Detail } from '../res/detail.svg';
import { ReactComponent as Setting } from '../res/setting.svg';
const NavBar = ({ currTab, setCurrTab }) => {
  return (
    <NavBarContainer>
      <TabButton onClick={() => setCurrTab(1)}
      className={currTab === 1 && 'active'} color1="#FCA27C" color2="#FF5AB4">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FCA27C" />
              <stop offset="100%" stop-color="#FF5AB4" />
            </linearGradient>
          </defs>
        </svg>

        <Overview fill={currTab === 1 && 'url(#myGradient)'} className='svg'/>
        <p>Overview</p>
      </TabButton>

      <TabButton onClick={() => setCurrTab(2)} className={currTab === 2 && 'active'} color1="#FF5AB4" color2="#A684D6">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="myGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FF5AB4" />
              <stop offset="100%" stop-color="#A684D6" />
            </linearGradient>
          </defs>
        </svg>
        <Detail className='svg' fill={currTab === 2 && 'url(#myGradient2)'}/>
        <p>Detail</p>
      </TabButton>

      <TabButton onClick={() => setCurrTab(3)}>
        <Setting className='svg'/>
        <p>Settings</p>
      </TabButton>
      
    </NavBarContainer>
  )
}

const NavBarContainer = styled.div`
  position: fixed;
  bottom: 0px;
  background-color: white;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
  width: 100vw;
  padding-top: 14px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const TabButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  :hover {
    transform: scale(1.01);
  }
  cursor: pointer;
  width: 60px;
  .svg {
    width: 25px;
    height: 25px;
  }
  > p {
    font-weight: 500;
    font-size: 14px;
    margin-top: 5px;
  }
  &.active {
    > p {
      background-image: linear-gradient(to bottom right, ${props => props.color1}, ${props => props.color2});
      background-color: #f3ec78;
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent; 
      -moz-text-fill-color: transparent;
    }
  }

`
export default NavBar
