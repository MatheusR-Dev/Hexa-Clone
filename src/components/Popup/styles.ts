import styled from 'styled-components'

interface Props {
  Hidden?: boolean
}

export const Container = styled.div<Props>`
  width: 100vw;
  height: 100vh;

  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  overflow: hidden;

  display: ${(props) => (props.Hidden ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PopDiv = styled.div`
  height: 95%;
  width: 40vw;
  overflow-y: scroll;
  @media (max-width: 768px) {
    width: 80vw;
    padding: 8%;
  }

  padding: 4%;
  z-index: 1000;

  display: flex;
  flex-direction: column;

  border-radius: 14px;
  background: #fff;

  > div {
    width: 100%;
    > img {
      padding-bottom: 30px;
    }
  }
`

export const PopBtn = styled.button`
  width: 25px;
  height: 25px;

  padding-top: 2px;

  cursor: pointer;

  background: none;
  border: none;
  float: right;

  > img {
    width: 100%;
  }
`

export const About = styled.div`
  width: 100%;
  margin-top: 50px;
`

export const SubT = styled.p`
  padding-bottom: 20px;
`

export const TitleVaga = styled.h3`
  font-family: 'Commissioner', sans-serif;
  font-size: 1.25rem; //20px
  font-weight: 400;
  padding-bottom: 10px;
`

export const Vaga = styled.h2`
  padding-bottom: 20px;
`

export const Require = styled.ul`
  padding-bottom: 20px;
`

export const ReqItems = styled.li`
  margin: 0 40px;
  margin-bottom: 15px;
  line-height: 24px;
`

export const SendButton = styled.button`
  width: 218px;
  height: 56px;

  float: right;
  cursor: pointer;
  color: #fff;
  font-family: 'Commissioner' sans-serif;
  font-size: 1.25rem; //20px

  :hover {
    text-decoration: underline;
  }

  border-radius: 16px;
  background: #eb3340;
  border: 2px solid #eb3340;
`
