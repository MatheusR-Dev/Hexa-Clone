import styled, { keyframes, css } from "styled-components";

const EffectFrame = keyframes`
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`;

export const Caroulsel = styled.div`
  width: 100%;
  height: 950px;

  margin-top: 50px;
`;

interface HeaderProps {
  Rowl?: string | any;
  ResizeRowl?: string | any;
}

export const Header = styled.div<HeaderProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-box-align: center;
  transition: width 1s;
  transition-property: all;
  justify-content: center;
  ${(props) => props.ResizeRowl || "translateX(calc(29%)) translateZ(0px)"};

  @media (min-width: 769px) {
    ${(props) => props.Rowl || "translateX(calc(29%)) translateZ(0px)"};
  }
`;

interface PropsGetz {
  resizer?: any;
}

export const ContainerButton = styled.button<PropsGetz>`
  height: 200px;
  width: calc(100% / 7);

  margin-left: 10px;
  border: none;
  flex: 0 0 auto;

  background-color: #FFF;

  @media (max-width: 768px) {
    width: 33.4%;
    height: 100%;
  }
`;

const Animation = css`
  animation: ${EffectFrame} 2s;
`;

interface ScreensProps {
  windowEffect?: boolean;
}

export const Screens = styled.div<ScreensProps>`
  height: 55%; //1200
  width: 100vw;

  display: flex;

  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-around;
  ${(props) => (props.windowEffect ? Animation : "")}
  @media (max-width: 768px) {
    height: 80%;
    width: 90vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: none;
  }
`;

export const ScreenLayout = styled.div`
  @media (min-width: 770px) {
    width: 37.5rem;
    /* height: 100%; */
  }

  > div {
    margin-top: 40px;
    align-items: flex-start;
    height: 64px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const ScreenTitle = styled.h1`
  font-weight: 600;
  font-size: 48px;
`;

export const ScreenP = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: #979EAF;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ScreenRed = styled.a`
  font-weight: 400;
  font-size: 24px;
  color: #16355A;

  :hover {
    cursor: pointer;
  }
`;

export const ScreenImg = styled.img`
  max-width: 50%;
  height: 100%;
  margin-right: 30px;
  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const IconContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 30px;
    height: 150px;
  }
`;

export const Tracinho = styled.img`
  display: block;
  margin: auto;
  @media (max-width: 768px) {
    display: none;
  }
`;
