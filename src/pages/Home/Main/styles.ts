import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  @media (max-width: 2000px) {
    max-width: 1600px;
  }
  @media (max-width: 768px) {
    height: 1500px;
  }
  @media (max-width: 480px) {
    height: 900px;
  }
`

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
`

export const Box = styled.div`
  @media (max-width: 1370px) {
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: center;
  }
  padding-top: 10rem;
  @media (max-width: 768px) {
    padding-top: 6rem;
  }
  @media (max-width: 480px) {
    padding-top: 3rem;
  }
`

export const Content = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
  }
`

export const Message = styled.h1`
  font-weight: bold;
  font-size: 7.5rem; //120px
  padding-bottom: 15%;
  max-width: 1125px;
  @media (max-width: 768px) {
    padding-right: 0;
    font-size: 6.875rem; //110px
    padding-bottom: 15%;
  }
  @media (max-width: 700px) {
    font-size: 5.625rem; //90px
  }
  @media (max-width: 600px) {
    font-size: 4.5rem; //72px
  }
  @media (max-width: 480px) {
    font-size: 3rem; //48px
  }
`

export const Soluctions = styled.a`
  width: 15.1rem;
  padding: 25px 50px;
  margin-right: 20px;
  font-weight: 500;

  color: #eb3340;
  border: solid #eb3340 2px;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`

export const Join = styled.span`
  background: #eb3340;
  color: #ffffff;
  border-radius: 10px;
  font-weight: 500;

  :hover {
    cursor: pointer;
    background-color: #bf0010;
  }

  padding: 25px 60px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 15.1rem;
    margin-top: 2rem;
    padding: 25px 50px;
  }
`

export const Cup = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1369px) {
    grid-row: 2;
  }

  @media (max-width: 1370px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`

export const CupImage = styled.img`
  @media (max-width: 600px) {
    width: 50%;
  }
`
