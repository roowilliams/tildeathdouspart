import React from 'react'
import styled from 'styled-components'

export const Spinner = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  margin-left: -17px;
  margin-top: -17px;

  &:after,
  &:before {
    content: '';
    position: absolute;
    border: 2px solid white;
    width: 30px;
    height: 30px;
  }
  &:after {
    animation: spinner 2.5s linear infinite;
  }

  &:before {
    width: 44px;
    height: 44px;
    margin-left: -7px;
    margin-top: -7px;
    animation: spinner 2.5s linear infinite;
    animation-direction: reverse;
  }

  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`
