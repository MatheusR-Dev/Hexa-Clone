import styled from 'styled-components'

export const Container = styled.div`
  width: 232px;
  height: 45%;
  height: 296px;
  background: #fff;

  padding: 3% 2% 3% 3%;

  border-radius: 14px;
  box-shadow: rgba(33, 47, 72, 0.12) 0px 2px 6px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    width: 200px;
    height: 257px;
  }
`

export const CardText = styled.p`
  font: 20px 'Museo Sans', sans-serif;
  font-weight: 500;
  text-align: center;
  line-height: 24px;
  height: 20%;

  @media (max-width: 480px) {
    font-size: 18px;
    margin-top: 8px;
  }
`

export const CardIcon = styled.img`
  margin-top: 25%;
  width: 50px;
  height: 50px;

  @media (max-width: 480px) {
    margin-top: 20%;
  }
`

export const CardBtn = styled.button`
  width: 142px;
  height: 52px;

  font-size: 20px;
  cursor: pointer;

  :hover {
    background: #eb3340;
    color: #fff;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s;
  }

  margin-top: 20%;
  color: #eb3340;
  background: #fff;

  border: 2px solid #eb3340;
  border-radius: 14px;
`
