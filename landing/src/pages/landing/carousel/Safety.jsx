import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import { AiFillPlayCircle } from "react-icons/ai";

const TriggerRatingList = [
  {
    message: 'Safe Video ✅',
    color: '#AEDB54',
  },
  {
    message: 'Triggering Video ❌',
    color: '#FF5AB4',
  }
]

const Safety = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransition(true);
      setTimeout(() => {
        setCurrIndex(prevIndex => 
          (prevIndex + 1) % TriggerRatingList.length 
        );
        setIsTransition(false);
      }, 300);   
    }, 1500);

    return () => clearInterval(interval);   
  }, []);
  
  return (
    <SafetyContainer>
      <VideoBox color={TriggerRatingList[currIndex].color}>
        <AiFillPlayCircle className='play'/>
      </VideoBox>
      <p className={isTransition ? 'transition' : ''}>{TriggerRatingList[currIndex].message}</p>
      
    </SafetyContainer>
  )
}

const SafetyContainer = styled.div`
  height: 250px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -150px;
  > p {
    color: white;
    font-family: Helvetica Now;
    font-weight: 600;
    font-size: 25px;
    transition: opacity 300ms;
    opacity: 1;
    &.transition {
      opacity: 0;
    }
  }

`
const VideoBox = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 220px;
  border-radius: 15px;
  .play {
    transition: color 300ms;
    color: ${props => props.color};
    font-size: 50px;
  }

`

export default Safety
