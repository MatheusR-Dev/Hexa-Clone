import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

interface ImageProps {
  GrayScale?: boolean
}

export const ImgButton = styled.img<ImageProps>`
  background: white;
  max-width: 90%;
  height: auto;

  @media (max-width: 480px) {
    width: 70%;
  }

  ${(props) => (props.GrayScale ? 'filter: none' : 'filter: grayscale(1);')}
  @media (max-width: 1300px) {
    width: 90px;
  }
`
