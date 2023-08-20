import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import { TriggersContainer } from './Triggers';

const TriggerRatingList = [
  {
    rating: 50,
    message: 'This video has some Triggering Content.',
    color: '#F6C035',
  },
  {
    rating: 92,
    message: 'This video has little Triggering Content.',
    color: '#AEDB54',
  },
  {
    rating: 6,
    message: 'This video has a lot of Triggering Content.',
    color: '#FF3D54',
  },
]

const Rating = () => {
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
    <TriggersContainer>
      <Title color={TriggerRatingList[currIndex].color}>
        <h1>Potential Triggers</h1>
        <p className={isTransition ? 'transition' : ''}>
          {TriggerRatingList[currIndex].rating}%
        </p>
      </Title>

      <Triggered className={isTransition ? 'transition' : ''}>
        {TriggerRatingList[currIndex].message}
      </Triggered>

    </TriggersContainer>
  )
}

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
    font-weight: 500;
    font-size: 18px;
    color: ${props => props.color};
    transition: opacity 300ms;
    opacity: 1;
    &.transition {
      opacity: 0;
    }
  }

`

const Triggered = styled.p`
  background-image: linear-gradient(to bottom right, #FCA27C, #FF5AB4);
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

export default Rating
