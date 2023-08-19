import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const TriggerList = [
  '0:02 - Violence Detected',
  '0:08 - Weight Loss Mentioned',
  '1:28 - Eating Mentioned',
  '2:13 - Alcohol Detected',
]
const Triggers = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransition(true);
      setTimeout(() => {
        setCurrIndex(prevIndex => 
          (prevIndex + 1) % TriggerList.length 
        );
        setIsTransition(false);
      }, 300);   
    }, 1500);

    return () => clearInterval(interval);   
  }, []);

  return (
    <TriggersContainer>
      <Title>
        <h1>Potential Triggers</h1>
        <p>Show more</p>
      </Title>

      <Triggered className={isTransition ? 'transition' : ''}>
        {TriggerList[currIndex]}
      </Triggered>

    </TriggersContainer>
  )
}

export const TriggersContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  position: absolute;
  top: 90px;
  width: 400px;
  height: 220px;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 35px;
  padding-right: 35px;
  font-family: Helvetica Now;
  align-items: center;
  padding-top: 10px;
  > h1 {
    font-weight: 600;
    font-size: 22px;
    color: black;
  }
  > p {
    font-weight: 400;
    font-size: 14px;
    color: black;
  }

`

const Triggered = styled.p`
  background-image: linear-gradient(to bottom right, #36B3FA, #CEEB94);
  font-family: Helvetica Now;
  font-weight: 800;
  font-size: 30px;
  width: 80%;
  margin-top: 20px;
  background-color: #f3ec78;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
  align-self: center;
  transition: opacity 300ms;
  opacity: 1;
  &.transition {
    opacity: 0;
  }
`

export default Triggers
