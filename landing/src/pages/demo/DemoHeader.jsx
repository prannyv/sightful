import React, { useState } from 'react'
import styled from '@emotion/styled'
import gradient from '../../res/gradient.mp4'

const DemoHeader = () => {
  const [url, setUrl] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (url === '') {
      setFormError('Please enter a URL');
    }
    setUrl('');
  }

  return (
    <HeaderContainer>
      <VideoBackground>
        <video autoPlay loop muted>
          <source src={gradient} type='video/mp4' />
        </video>
      </VideoBackground>
      <TextContainer>
        <h1>Enter the video URL to analyze!</h1>
        <InputURL onSubmit={handleSubmit}>
          {/* title of song */}
          <input
            type="text"
            value={url}
            placeholder="Video URL"
            onChange={(e) => setUrl(e.target.value)}
          />
        </InputURL>
      </TextContainer>

    </HeaderContainer>
  )
}

const HeaderContainer = styled.main`
  position: relative;
  height: 70vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
`
const VideoBackground = styled.div`
  > video {
    height: 70vh;
    width: 100vw;
    display: flex;
    object-fit: cover;
    position: absolute;
    z-index: 0;
    top: 0px;
  }
`

const TextContainer = styled.div`
  display: flex;
  position: absolute;
  top: 280px;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  > h1 {
    color: white;
    font-family: Helvetica Now;
    font-size: 40px;
    font-weight: 600;
  }
`

const InputURL = styled.form`
  > input {
    width: 600px;
    height: 50px;
    padding: 10px;
    padding-left: 30px;
    color: black;
    border: none;
    font-size: 18px;
    outline: none;
    border-radius: 35px;
    font-family: Helvetica Now;
    font-weight: 500;
    margin-top: 20px;
    background-color: white;
    ::placeholder {
      color: rgba(0, 0, 0, 0.562);
    }
  }
`



export default DemoHeader
