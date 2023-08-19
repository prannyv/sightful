import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled';

const TriggerWordsList = [
  'Eating Disorders',
  'Weight Loss',
  'Spiders',
  'Violence',
]
const Enter = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransition(true);
      setTimeout(() => {
        setCurrIndex(prevIndex => 
          (prevIndex + 1) % TriggerWordsList.length 
        );
        setIsTransition(false);
      }, 300);   
    }, 1500);

    return () => clearInterval(interval);   
  }, []);

  return (
    <EnterContainer>
      <h1>
        Enter Your Triggers Here:
      </h1>

      <Input >
        <p className={isTransition ? 'transition' : ''}>
          {TriggerWordsList[currIndex]}
        </p>
       
      </Input>

    </EnterContainer>
  )
}

const EnterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -220px;
  > h1 {
    font-family: Helvetica Now;
    font-size: 24px;
    font-weight: 600;
    color: black;

  }
`

const Input = styled.div`
  background-color: white;
  width: 350px;
  height: 60px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  > p {
    font-family: Helvetica Now;
    font-size: 20px;
    font-weight: 500;
    padding-left: 30px;
    color: black;
    transition: opacity 300ms;
    opacity: 1;
    &.transition {
      opacity: 0;
    }
  }
`

export default Enter
