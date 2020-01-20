import styled from "styled-components"

export const StyledMenu = styled.nav`
  z-index: 100;
  display: flex;
  position: fixed;
  flex-direction: column;
  font-family: "RobotoCondensedBold";
  overflow: Auto;
  //   transform: translateX(-100%);
  justify-content: center;
  background: white;
  height: 100%;
  width: 100vw;
  //   text-align: left;
  //   padding: 2rem;
  // position: absolute;
  top: 0px;
  left: 100vw;
  transition: transform 0.3s ease-in-out;

  transform: ${({ open }) => (open ? "translateX(-100%)" : "translateX(0)")};

  a {
    overflow: hidden;
    font-size: 12.8vw;
    text-transform: uppercase;
    margin-left: -1vw;
    margin-top: -10px;
    font-weight: bold;
    color: #353535;
    // margin-block-end: 0;
    line-height: 0.9;
    text-decoration: none;
    // transition: color 0.3s linear;

    @media (orientation: portrait) {
      font-size: 17vw;
      // text-align: center;
      line-height: 1;
      width: 100%;
    }

    &:hover {
      color: #0057ff;
    }
  }
`
