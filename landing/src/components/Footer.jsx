import styled from '@emotion/styled'
import React from 'react'
import { ReactComponent as Star } from '../res/white-star.svg';
import { ReactComponent as Github } from '../res/github-mark-white.svg';
import { ReactComponent as Devpost } from '../res/devpost.svg';
const Footer = () => {
  return (
    <FooterContainer>
      <h1>Sightful</h1>
      <p><Star className='star'/> Stanley <Star className='star'/> Pranav <Star className='star'/> Bryant <Star className='star'/> Daniel.</p>
      <Logos>
        <Github width="70px" className='github'/>
        <Devpost width="80px"/>
      </Logos>
      
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  background-color: #1A1A1A;
  height: 300px;
  display: flex;
  position: relative;
  flex-direction: column;
  font-family: Helvetica Now;
  > h1 {
    color: white;
    font-weight: 800;
    margin-bottom: 30px;
    font-size: 45px;
    margin-top: 60px;
    padding-left: 90px;
  }
  > p {
    color: white;
    font-weight: 500;
    padding-left: 90px;
    font-size: 22px;
    font-style: italic;
    display: flex;
    align-items: center;
    .star {
      margin-left: 50px;
      margin-right: 20px;
      :nth-of-type(1) {
        margin-left: 0px;
      }
    }
  }
`

const Logos = styled.div`
  position: absolute;
  display: flex;
  
  right: 60px;
  top: 100px;
  .github {
    margin-right: 30px;
  }


`
export default Footer
