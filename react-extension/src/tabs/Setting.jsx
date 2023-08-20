import React from 'react'
import styled from '@emotion/styled';

const Setting = () => {
  return (
    <SettingContainer>
      <h1>Settings</h1>
    </SettingContainer>
  )
}

const SettingContainer = styled.div`
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

export default Setting
