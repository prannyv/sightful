import React from 'react'
import styled from '@emotion/styled';

const Detail = () => {
  return (
    <DetailContainer>
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
      
    </DetailContainer>
  )
}

const DetailContainer = styled.div`
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
const TriggerTable = styled.table`
  padding-right: 20px;
  padding-left: 30px;
  padding-top: 30px;
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
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 10px;
    :nth-of-type(odd) {
      text-align: left;
    }
    :nth-of-type(even) {
      text-align: right;
    }
  }

`
export default Detail
