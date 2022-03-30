import { Link } from "react-router-dom";
import styled from "styled-components";

interface MainProps {
  active?: boolean;
}

export const Container = styled.div``;

export const HContain = styled.div`
  width: 100%;
  height: 6.5rem;

  padding-left: 4.5%;
  padding-right: 4%;

  z-index: 999;

  display: flex;
  background: #ffffff;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Icon = styled.img`
  width: 175px;
  height: 32px;

  cursor: pointer;

  @media (max-width: 768px) {
    width: 140px;
    height: 32px;
  }
`;

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Redirect = styled.a`
  color: #231f20;

  margin-right: 25px;
  margin-left: 25px;

  display: block;
  position: relative;
  padding: 0.2em 0;

  ::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: -15px;
    width: 100%;
    height: 0.2em;
    background-color: rgb(235, 51, 64);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
  }

  :hover::after,
  :focus::after {
    opacity: 1;
    transform: translateX(15px);
  }

  cursor: pointer;

  /* padding-top: 20px; */

  font-size: 16px;
  font-weight: 500;
`;

export const Hamburguer = styled.div`
  height: 50px;
  width: 50px;
  border: 1px white solid;
  z-index: 1000;
  position: fixed;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const AnimContain = styled.div<MainProps>`
  width: 100%;
  background-color: white;
  height: 100%;
  transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  padding-left: 10px;
  padding-top: 5px;
  ${(props) => props.active && "box-shadow: #FFFFFF 0px 0px 0px 130vh;"}
`;

interface MostrarProps {
  show?: boolean;
}

export const Items = styled.div<MostrarProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 200px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => props.show && "display: none;"}
`;

export const Links = styled.a`
  cursor: pointer;
  padding-top: 20px;

  font-size: 20px;
  font-weight: 500;

  color: #eb3340;
  -webkit-font-smoothing: antialiased;

  margin-right: 25px;
  margin-left: 25px;
`;

export const HLink = styled(Link)`
  cursor: pointer;
  padding-top: 20px;
  text-decoration: none;

  font-size: 20px;
  font-weight: 500;

  color: #eb3340;
  -webkit-font-smoothing: antialiased;

  margin-right: 25px;
  margin-left: 25px;
`;

interface AnimeProps {
  animate?: boolean;
  change?: boolean;
}

export const Animations = styled.div<AnimeProps>`
  width: 25px;
  height: 2px;
  background-color: #eb3340;
  margin-top: 20px;
  z-index: 1000;
  transform-origin: center;
  ${(props) => props.animate && `transform: rotateZ(45deg);`}
  ${(props) => props.animate && `transition: all 0.5s ease-in-out 0s;`}
  ::after {
    ${(props) => props.change && `background: white`}
    width: 25px;
    bottom: 30px;
    height: 2px;
    background-color: #eb3340;
    content: "";
    position: absolute;
    transition: all 0.5s ease-in-out 0s;
    display: block;
    ${(props) => props.animate && `transform: rotateZ(95deg);`}
  }

  ::before {
    ${(props) => props.change && `display: none`}
    bottom: 11px;
    height: 2px;
    width: 25px;
    background-color: #eb3340;
    content: "";
    position: absolute;
    transition: all 0.5s ease-in-out 0s;
    display: block;
    ${(props) => props.animate && `transform: rotateZ(90deg);`}
  }
`;

export const StyledLink = styled(Link)`
  color: #231f20;

  margin-right: 25px;
  margin-left: 25px;
  text-decoration: none;

  display: block;
  position: relative;
  padding: 0.2em 0;

  ::after {
    cursor: pointer;
    content: "";
    position: absolute;
    bottom: -10px;
    left: -15px;
    width: 100%;
    height: 0.2em;
    background-color: rgb(235, 51, 64);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
  }

  :hover::after,
  :focus::after {
    opacity: 1;
    transform: translateX(15px);
  }

  cursor: pointer;

  /* padding-top: 20px; */

  font-size: 16px;
  font-weight: 500;
`;
