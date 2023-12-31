import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { ReactComponent as Star } from '../res/star.svg';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  return (
    <NavContainer>
      <LeftBarContainer>
        <LeftBar>
          <p>Sightful</p>
        </LeftBar>
        <svg class="flt_svg" xmlns="http://www.w3.org/2000/svg" className='hide'>
          <defs>
              <filter id="flt_tag">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />    
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                  <feComposite in="SourceGraphic" in2="flt_tag" operator="atop"/>
              </filter>
          </defs>
        </svg>
      </LeftBarContainer>
      
      <RightBarContainer>
        <RightBar>
          <Link to='/' className='link'>
            <p>
              <Star className={location.pathname === '/' ? 'star active' : 'star'}/>
              Landing
            </p>
          </Link>

          <Link to='/demo' className='link'>
            <p>
              <Star className={location.pathname === '/demo' ? 'star active' : 'star'}/>
              Demo
            </p>
          </Link>
          <p>
            <Star className='star'/>
            Download
          </p>
        </RightBar>
        <svg class="flt_svg" xmlns="http://www.w3.org/2000/svg" className='hide'>
          <defs>
              <filter id="flt_tag">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />    
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                  <feComposite in="SourceGraphic" in2="flt_tag" operator="atop"/>
              </filter>
          </defs>
        </svg>
      </RightBarContainer>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  margin-top: 50px;
  width: 100vw;
  z-index: 9999;
  .hide {
    display: none;
  }
`

const LeftBarContainer = styled.div`
  width: 15vw;
  height: 70px;
  filter: url('#flt_tag');
`
const LeftBar = styled.div`
  width: 15vw;
  background-color: black;
  height: 70px;
  clip-path: polygon(5% 0%, 100% 0%, 90% 100%, 0% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    font-family: Helvetica Now;
    font-size: 21px;
    font-weight: 500;
    font-style: italic;
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
  }
`
const RightBarContainer = styled.div`
  width: 75vw;
  height: 70px;
  filter: url('#flt_tag');
`
const RightBar = styled.div`
  clip-path: polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%);
  
  width: 75vw;
  height: 70px;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .link {
    text-decoration: none;
  }
  p {
    font-family: Helvetica Now;
    font-weight: 500;
    font-style: italic;
    font-size: 18px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .star {
      width: 28px;
      height: 28px;
      margin-right: 15px;
      fill: white;
    }
    :hover {
      .star {
        transition: fill 0.5s ease;
        fill: black;
      }
    }
    .active {
      fill: black;
    }
  }

`

const Filter = styled.svg`
  visibility: hidden; 
  position: absolute;
`

export default NavBar
