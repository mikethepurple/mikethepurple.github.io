import styled from "styled-components"
export const StyledBurger = styled.button`
  position: fixed;
  top: 3.33vh;
  right: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 5vh;
  height: 5vh;
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
    width: 5vh;
    height: 0.5vh;
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
