import React from 'react'
import styled from '@emotion/styled'
const BlackBar = () => {
  return (
    <BlackBarContainer>
      <p>
        Now Downloadable as a Chrome Extension
      </p>
    </BlackBarContainer>
  )
}

const BlackBarContainer = styled.div`
  background-color: #1A1A1A;
  height: 180px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    font-family: Helvetica Now;
    font-weight: 800;
    color: white;
    font-size: 38px;
  }
`

export default BlackBar
