import styled from "styled-components"

export const StyledMenu = styled.nav`
  visibility: ${props => (props.show ? "visible" : "hidden")};
  transition: all 200ms ${props => (props.show ? "ease-in" : "ease-out")};
  transform: ${props => (props.show ? "none" : "translate(0, -100%)")};
`
