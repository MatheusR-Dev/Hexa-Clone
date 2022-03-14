import styled, { keyframes } from 'styled-components';

export const EffectFrame = keyframes`
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

export const Header = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  transition: width 1s;
  transition-property: all;
  justify-content: center;
  @media (max-width: 768px) {
    width: 710px;
  }
`;

interface PropsGetz {
  resizer?: any
}

export const GetzFood = styled.button<PropsGetz>`
  height: 200px;
  /* width: 14%; */
  ${(props) => props.resizer ||`width: 14%`}

  margin-left: 10px;
  border: none;
  flex: 0 0 auto;
  
  background-color: white;

  @media (max-width: 768px) {
  width: 256px;
  height: 100%;
}
`;

export const Screens = styled.div`
  height: 55%; //1200
  width: 100vw;

  display: flex;

  /* background-color: #F5F8FD; */

  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-around;
  animation: ${EffectFrame} 2s;
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: none;
  }
`;

export const ScreenLayout = styled.div`
  width: 37.5rem;
  /* height: 100%; */
  
  @media (min-width: 769px){
    display: flex;
    flex-direction: column;
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
`;

export const ScreenRed = styled.a`
  font-weight: 400;
  font-size: 24px;
  margin-top: 20px;
  color: #16355A;

  :hover {
    cursor: pointer;
  }
`;

export const ScreenImg = styled.img`
  max-width: 100%;
  height: 100%;
  @media (max-width: 768px) {
  width: 200px;
  }
`;

export const ScreenIcon = styled.img`
  margin-top: 40px;
  height: 60px;
`;

export const Dive = styled.div`
@media (max-width: 768px) {
    display: block;
    text-align: center;
    width: 100%;
    right: 50%;
    transform: translateX(50%);
    position: absolute;
    bottom: -900px;
}
`;

interface PropsBtn {
  Filtro?: boolean
}

export const ImageButton = styled.img<PropsBtn>`
  background: white;
  max-width: 90%;
  height: auto;
  @media (max-width: 1300px) {
    width: 90px;
  }
`;

export const Teste = styled.div`
  width: 100vw;
  overflow-x: hidden;
  @media (max-width: 768px) {
  margin-top: 20px;
  margin-bottom: 70px;
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

