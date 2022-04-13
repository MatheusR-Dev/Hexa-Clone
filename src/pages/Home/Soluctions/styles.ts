import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 1200px;
`

export const TextBox = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 38px;
  }
`

export const SubTextBox = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 28px;
  color: #979eaf;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`
