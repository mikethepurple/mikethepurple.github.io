import styled from "styled-components"
export const StyledBurger = styled.button`
  
  top: 50%
  
  position: absolute;
  right: 2%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3vw;
  height: 3vw;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #0057ff;
  }

  div {
    width: 3vw;
    height: 0.3vw;
    background: #353535;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
