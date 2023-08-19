import React from 'react'
import styled from '@emotion/styled'
import gradient from '../../res/gradient.mp4'

const Header = () => {
  return (
    <HeaderContainer>
      <VideoBackground>
        <video autoPlay loop muted>
          <source src={gradient} type='video/mp4' />
        </video>
      </VideoBackground>

    

    </HeaderContainer>
  )
}

const HeaderContainer = styled.main`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
`
const VideoBackground = styled.div`
  > video {
    height: 1000px;
    width: 100vw;
    display: flex;
    object-fit: cover;
    position: absolute;
    z-index: 0;
    top: 0px;
  }
`

export default Header
