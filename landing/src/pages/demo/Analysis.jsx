import React from 'react'
import styled from '@emotion/styled'

const Analysis = () => {
  return (
    <AnalysisContainer>
      <h1>Video Analysis for “Stanley&rsquo;s Mukbang” </h1>
      <TopRow color='red'>
        <div className='category'>
          <h2>Category</h2>
          <Triggered>Food, Comedy</Triggered>
        </div>
        <div className='review'>
          <div>
            <h2>Rating</h2>
            <p>52%</p>
          </div>
          <Triggered>This video has some Triggering Content.</Triggered>
        </div>
      </TopRow>
      <BottomRow>
        <h2>Potential Triggers and Timestamps</h2>
        <TriggerTable>
          <thead>
            <tr>
              <th>Trigger</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Trigger 1</td>
              <td>0:53</td>
            </tr>
            <tr>
              <td>Trigger 2</td>
              <td>1:28</td>
            </tr>
            <tr>
              <td>Trigger 3</td>
              <td>2:12</td>
            </tr>
          </tbody>
        </TriggerTable>
      </BottomRow>
    </AnalysisContainer>
  )
}

const AnalysisContainer = styled.div`
  width: 100vw;
  padding-bottom: 50px;
  background-color: #F9F8F8;
  display: flex;
  flex-direction: column;
  > h1 {
    font-weight: 600;
    font-family: Helvetica Now;
    font-size: 30px;
    width: 1370px;
    align-self: center;
    margin-top: 50px;
    margin-bottom: 20px;
  }
`

const TopRow = styled.div`
  width: 1370px;
  height: 220px;
  display: flex;
  align-self: center;
  justify-content: space-between;
  .category {
    width: 500px;
    background-color: white;
    padding-left: 50px;
    padding-top: 40px;
    > h2 {
      font-weight: 600;
      font-size: 22px;
      color: black;
    }
  }
  .review {
    width: 700px;
    padding-left: 50px;
    padding-top: 40px;
    padding-right: 50px;
    background-color: white;
    > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: -20px;
      > h2 {
        font-weight: 600;
        font-size: 22px;
        color: black;
      }
      > p {
        font-weight: 500;
        font-size: 22px;
        color: ${props => props.color};
        transition: opacity 300ms;
        opacity: 1;
        &.transition {
          opacity: 0;
        }
      }

    }
  }
`

const TriggerTable = styled.table`
  padding-right: 50px;
  padding-left: 50px;
  > thead > tr > th {
    padding-bottom: 20px;
    font-weight: 600;
    font-size: 25px;
    background-color: #f3ec78;
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    :first-of-type {
      text-align: left;
      background-image: linear-gradient(to bottom right, #FCA27C, #FF5AB4);
    }
    :nth-of-type(2) {
      text-align: right;
      background-image: linear-gradient(to bottom right, #FCA27C, #FF5AB4);
    }
  }
  > tbody > tr > td {
    font-size: 18px;
    font-weight: 400;
    padding-bottom: 10px;
    :nth-of-type(odd) {
      text-align: left;
    }
    :nth-of-type(even) {
      text-align: right;
    }
  }

`

const BottomRow = styled.div`
  width: 1370px;
  min-height: 300px;
  display: flex;
  align-self: center;
  background-color: white;
  margin-top: 20px;
  padding-top: 40px;
  flex-direction: column;
  > h2 {
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 30px;
    color: black;
    padding-left: 50px;
  }
`

const Triggered = styled.p`
  background-image: linear-gradient(to bottom right, #FCA27C, #FF5AB4);
  font-family: Helvetica Now;
  font-weight: 600;
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

export default Analysis
