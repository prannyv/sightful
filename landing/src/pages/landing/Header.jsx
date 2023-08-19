import React from 'react'
import styled from '@emotion/styled'
import gradient from '../../res/gradient.mp4'

const Header = () => {
  return (
    <HeaderContainer>
      <VideoBackground>
        <video autoPlay loop muted>
          <source src={gradient} type='video/mp4' />
        </video>
      </VideoBackground>
      <TextContainer>
        <p>
           It&#39;s time to meet
        </p>
        <h1>
         Sightful, an AI Video Analyzer for Triggering & Negative Content.
        </h1>

        <button>
          <p>
            Get Started
          </p>
        </button>
        

      </TextContainer>

    </HeaderContainer>
  )
}

const HeaderContainer = styled.main`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
`
const VideoBackground = styled.div`
  > video {
    height: 1000px;
    width: 100vw;
    display: flex;
    object-fit: cover;
    position: absolute;
    z-index: 0;
    top: 0px;
  }
`

const TextContainer = styled.div`
  display: flex;
  position: absolute;
  top: 280px;
  width: 100vw;
  flex-direction: column;
  z-index: 10;
  > p {
    z-index: 1;
    font-size: 24px;
    text-align: left;
    font-family: Helvetica Now;
    font-weight: 500;
    font-style: italic;
    color: white;
    width: 70%;
    margin-left: 15%;
    margin-right: 10%;
  }
  > h1 {
    font-family: Helvetica Now;
    font-size: 4.4rem;
    font-weight: 900;
    text-align: left;
    color: white;
    width: 70vw;
    font-size: 70px;
    margin-top: 0px;
    margin-left: 15%;
    margin-right: 10%;
  }
  > button {
    width: 300px;
    height: 80px;
    background-color: black;
    color: white;
    font-family: Helvetica Now;
    font-size: 20px;
    font-style: italic;
    border-radius: 12px;
    border: none;
    align-self: center;
    margin-top: 40px;
    transition: 300ms;
    cursor: pointer;
    :hover {
      background-color: white;
      color: black;
    }
  }
  
`


export default Header
