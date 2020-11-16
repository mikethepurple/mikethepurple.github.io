import styled from "styled-components"

export const StyledSide = styled.div`
  visibility: ${props => (props.show ? "visible" : "hidden")};
`
