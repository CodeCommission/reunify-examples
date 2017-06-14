import React from 'react'
import styled from 'styled-components'

export const Box = ({className, text}) => <p className={className}>{text}</p>

export default styled(Box)`
  font: 26px Consolas, monaco, monospace;
  background: #eee;
  padding: 80px;
  text-align: center;
  transition: 200ms ease-in background;

  &:hover {
    background: #ccc;
  }
`