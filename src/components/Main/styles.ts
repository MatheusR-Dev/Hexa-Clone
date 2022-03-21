import styled from 'styled-components';

interface MainProps {
  active?: boolean;
}

export const Container = styled.div`
  height: 100vh;
  @media (max-width: 2000px){
  max-width: 1600px;
}
  @media (max-width: 768px) {
  height: 1500px;
  }
`;

/* Header */

export const Header = styled.div`
  width: 100%;
  height: 5rem;

  padding-left: 5%;
  padding-right: 5%;

  z-index: 999;

  display: flex;
  background: #FFFFFF;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  @media (max-width: 768px){
  justify-content: center;
}
`;

export const Icon = styled.img`
  width: 175px;
  height: 32px;

  cursor: pointer;

  @media (max-width: 768px){
    width: 140px;
    height: 32px;
  }
`;

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;

  @media (max-width: 768px){
    display: none;
  }
`;

export const Redirect = styled.a`
  color: #231F20;

  margin-right: 25px;
  margin-left: 25px;

  display: block;
  position: relative;
  padding: 0.2em 0;

  ::after {
  content: '';
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

  padding-top: 20px;

  font-size: 16px;
  font-weight: 500;
  `;

/* Header */

/* Body */

export const Grid = styled.div`
  height: 100%;
  width: 100%;
  /* max-width: 2000px; */
  margin: 0 auto;

  padding-left: 5%;
  padding-right: 5%;
  align-items: center;

  display: grid;  
  grid-template-columns: 1fr 1fr;
`;

export const Box = styled.div`
  padding-top: 10rem;
  @media (max-width: 768px) {
  padding-top: 6rem;
  }
`;

export const Content = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Message = styled.h1`
  font-weight: bold;
  font-size: 120px;
  padding-bottom: 15%;
  @media (max-width: 768px){
  padding-right: 0;
  font-size: 110px;
  padding-bottom: 15%;
  }
  @media (max-width: 700px) {
    font-size: 90px;
  }
  @media (max-width: 600px) {
    font-size: 80px;
  }
  @media (max-width: 500px) {
    font-size: 60px;
  }
`;

export const Soluctions = styled.a`
  width: 15.1rem;
  padding: 25px 50px;
  margin-right: 20px;

  color: #EB3340;
  border: solid #EB3340 2px;
  border-radius: 10px;

  :hover{
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Join = styled.a`
  background: #EB3340;
  color: #FFFFFF;
  border-radius: 10px;

  :hover{
    cursor: pointer;
    background-color: #BF0010;
  }

  padding: 25px 60px;

  @media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  width: 15.1rem;
  margin-top: 2rem;
  padding: 25px 50px;
  }
`;

export const Cup = styled.div`
  @media (max-width: 1369px) {
  grid-row: 2;
  }
  
  @media (min-width: 1370px) {
  grid-column: 2;
  } 
`;

export const CupImage = styled.img`
  position: relative;
  left: 50%;

  @media (max-width: 768px) {
  top: 4rem;
  left: 12rem;
  }
  @media (max-width: 600px) {
  top: 4rem;
  left: 4rem;
  }
  @media (max-width: 400px) {
  width: 70%;
  }
`;

export const Help = styled.a`
  width: 12.5rem;
  z-index: 9999;

  color: #231F20;
  background: #FFFFFF;
  border-radius: 40px;
  box-shadow: rgb(33 47 72 / 20%) 0px 3px 10px;

  transition: all .2s ease-in-out;
  :hover{ 
    transform: scale(1.1); 
  }

  cursor: pointer;

  padding: 1.5rem 2.2rem;
  position: fixed;

  right: 5%;
  bottom: 5%;

  transition: all 0.3s ease 0s;
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
  @media (min-width: 769px) {
    display: none;
  }
`;

export const Tesen = styled.div<MainProps>`
  width: 100%;
  background-color: white;
  height: 100%;
  transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  padding-left: 10px;
  padding-top: 5px;
  ${(props) => props.active && 'box-shadow: #FFFFFF 0px 0px 0px 130vh;'}
`;

interface MostrarProps {
  show?: boolean
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
  ${(props) => props.show && 'display: none;'}
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

interface AnimeProps {
  animate?: boolean
  change?: boolean
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
  ::after{
    ${(props) => props.change && `background: white`}
    width: 25px;
    bottom: 30px;
    height: 2px;
    background-color: #eb3340;
    content: '';
    position: absolute;
    transition: all 0.5s ease-in-out 0s;
    display: block;
    ${(props) => props.animate && `transform: rotateZ(95deg);`}
  }
  


  ::before{
    ${(props) => props.change && `display: none`}
    bottom: 11px;
    height: 2px;
    width: 25px;
    background-color: #eb3340;
    content: '';
    position: absolute;
    transition: all 0.5s ease-in-out 0s;
    display: block;
    ${(props) => props.animate && `transform: rotateZ(90deg);`}
  }
`;