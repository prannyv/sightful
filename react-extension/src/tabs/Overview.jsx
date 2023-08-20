import React from 'react'
import styled from '@emotion/styled';
const Overview = () => {
  return (
    <OverviewContainer>
      <h1>Video Analysis for this video.</h1>
      <Category>
        <h2>Category</h2>
        <p>Education, Comedy</p>
      </Category>

      <Rating color='red'>
        <div>
          <h2>Rating</h2>
          <p>52%</p>
        </div>
        <p>Some Triggering Content.</p>
      </Rating>

      <Triggers>
        <div>
          <h2>Potential Triggers</h2>
          <p>See More</p>
        </div>
        <p>1. Eating. </p>
        <p>2. Weight Loss. </p>
        <p>3. Cussing. </p>
      </Triggers>

    </OverviewContainer>
  )
}

const OverviewContainer = styled.div`
  display: flex;
  min-height: 400px;
  width: 100vw;
  margin-top: 80px;
  background-color: #F9F8F8;
  flex-direction: column;
  > h1 {
    font-weight: 600;
    font-size: 20px;
    padding-left: 30px;
    padding-top: 10px;
  }
`

const Category = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 88%;
  border-radius: 12px;
  padding-left: 25px;
  align-self: center;
  > h2 {
    font-family: Helvetica Now;
    font-weight: 500;
    font-size: 16px;
    color: black;
    margin-top: 20px;
    margin-bottom: -10px;
  }
  > p {
    margin-top: 0px;
    background-image: linear-gradient(to bottom right, #FCA27C, #FF5AB4);
    font-family: Helvetica Now;
    font-weight: 600;
    font-size: 21px;
    width: 80%;
    margin-top: 20px;
    background-color: #f3ec78;
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
`

const Rating = styled.div`
  margin-top: 20px;
  border-radius: 12px;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 88%;
  padding-left: 25px;
  align-self: center;
  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: -20px;
    padding-right: 20px;
    > h2 {
      font-family: Helvetica Now;
      font-weight: 500;
      font-size: 16px;
      margin-top: 20px;
      color: black;
      margin-bottom: -10px;
    }
    > p {
      font-weight: 400;
      font-size: 14px;
      color: ${props => props.color};
    }
  }
  > p {
    margin-top: 0px;
    background-image: linear-gradient(to bottom right, #FCA27C, #FF5AB4);
    font-family: Helvetica Now;
    font-weight: 600;
    font-size: 21px;
    width: 80%;
    margin-top: 20px;
    background-color: #f3ec78;
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
`

const Triggers = styled.div`
  margin-top: 20px;
  border-radius: 12px;
  background-color: white;
  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
  width: 88%;
  padding-left: 25px;
  align-self: center;
  > p {
    font-family: Helvetica Now;
    font-weight: 500;
    margin-top: 7px;
    font-size: 14px;
    margin-bottom: 7px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: -10px;
    margin-top: 4px;
    align-items: center;
    padding-right: 20px;
    > h2 {
      font-family: Helvetica Now;
      font-weight: 600;
      font-size: 21px;
      background-image: linear-gradient(to bottom right, #FCA27C, #FF5AB4);
      background-color: #f3ec78;
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent; 
      -moz-text-fill-color: transparent;
    }
    > p {
      font-weight: 400;
      font-size: 12px;
    }
  }
`


export default Overview
