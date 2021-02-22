import React from 'react'
import { Container } from "../styles/components/Tooltip";

interface TooltipProps {
  title: string
}
const Tooltip: React.FC<TooltipProps> = ({title, children}) => {
  return (
    <Container>
      {children}
      <span>{title}</span>
    </Container>
  )
}

export default Tooltip
