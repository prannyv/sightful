import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react';
import youtube from '../../../res/youtube.png';
import cursor from '../../../res/cursor.png';
const Youtube = () => {
  return (
    <YoutubeContainer>
      <img src={youtube} alt='YouTube logo.' className='youtube'/>
      <img src={cursor} alt='Cursor.' className='cursor'/>
    </YoutubeContainer>
  )
}

const scaleAnimation = keyframes`
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
`;
const scaleAnimation2 = keyframes`
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
`;
const YoutubeContainer = styled.div`
  position: relative;
  width: 230px;
  height: 200px;
  margin-top: -200px;
  .youtube {
    width: 230px;
    animation: ${scaleAnimation} 0.5s ease-in-out infinite alternate;
  }
  .cursor {
    width: 22px;
    position: absolute;
    bottom: 2px;
    right: 2px;
    animation: ${scaleAnimation2} 0.5s ease-in-out infinite alternate;
  }

`

export default Youtube
