import React from 'react'
import styled from '@emotion/styled'
import InfiniteSlider from '../../components/InfiniteSlider.tsx'
import Triggers from './carousel/Triggers.jsx'
import Youtube from './carousel/Youtube.jsx'
import Enter from './carousel/Enter.jsx'
import Rating from './carousel/Rating.jsx'
import Safety from './carousel/Safety.jsx'

const Features = () => {
  return (
    <FeaturesContainer>
        <h1>Key Features</h1>
        <p>All in One Extension</p>
       <InfiniteSlider speed="50" direction="right" className='dance'>
        <ContentBlock color1='#A684D6' color2='#36B3FA'>
          <Youtube />
          <p>
            An Easy-to-Use Extension for Youtube.
          </p>
        </ContentBlock>

        <ContentBlock color1='#36B3FA' color2='#CEEB94' >
          <Triggers />
          <p>
            Flags videos with triggering, harmful content.
          </p>
        </ContentBlock>

        <ContentBlock color1='#CEEB94' color2='#FCA27C' >
          <Enter/>
          <p>
            Filter content based on your preferences.
          </p>
        </ContentBlock>
        
        <ContentBlock color1='#FCA27C' color2='#FF5AB4' >
          <Rating />
          <p>
            Make Informed Watching Decisions With Video Ratings.
          </p>
        </ContentBlock>

        <ContentBlock color1='#FF5AB4' color2='#A684D6' >
          <Safety />
          <p>
            Enjoy videos comfortably & safely.
          </p>
        </ContentBlock>

       </InfiniteSlider>
      
    </FeaturesContainer>
  )
}

const FeaturesContainer = styled.div`
  align-items: contain;
  padding-top: 80px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  place-items: center;
  overflow: auto;
  background-color: #F9F8F8;
  > h1 {
    font-family: Helvetica Now;
    font-weight: 800;
    color: black;
    font-size: 55px;
    padding-bottom: 0px
    margin-bottom: 0px;
  }
  > p {
    font-family: Helvetica Now;
    font-weight: 500;
    font-size: 22px;
    margin-top: -20px;
    margin-bottom: 70px;
  }
`
const ContentBlock = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  justify-content: center;
  width: 500px;
  height: 600px;
  margin: 10px;
  border-radius: 18px;
  padding: 0px;
  margin-bottom: 80px;
  margin-right: 50px;
  margin-left: 50px;
  flex-direction: column;
  transition: all 500ms;
  background-image: linear-gradient(to bottom right, ${props => props.color1}, ${props => props.color2});
  :hover {
    transform: translateY(-10px);
  }
  position: relative;
  > p {
    color: white;
    font-family: Helvetica Now;
    font-weight: 800;
    font-size: 36px;
    padding-left: 40px;
    padding-right: 40px;
    position: absolute;
    top: 360px;
    height: 140px;
    display: flex;
    align-items: center;
  }
`


export default Features
