import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  z-index: 1000;
  top: 0px;
  left: 0px;

  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);
`

export const Content = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 40px;
  border-radius: 15px;
  width: 536px;
  height: 256px;
  text-align: left;
  @media (max-width: 670px) {
    width: 80%;
    height: 34%;
  }
  @media (max-width: 600px) {
    width: 80%;
    height: 38%;
  }
  @media (max-width: 400px) {
    width: 80%;
    height: 40%;
    text-align: center;
    padding: 20px 20px 0 20px;
  }
`

export const ProfileText = styled.div`
  font-size: 25px;
  font-weight: 600;
`

export const ProfileSubText = styled.div`
  font-size: 1.1em;
  font-weight: 300;
  margin-top: 30px;
  color: #979eaf;
`
export const BtnDiv = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 580px) {
    margin-top: 30px;
    align-items: center;
  }
`

export const ConfirmButton = styled.button`
  width: 184px;
  height: 56px;
  border: 2px solid red;
  border-radius: 10px;
  background-color: #eb3340;
  color: white;
  font-size: 24px;
  @media (max-width: 670px) {
  }
`
