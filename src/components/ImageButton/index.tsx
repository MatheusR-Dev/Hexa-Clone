import { Container, ImgButton } from './styles';

interface ImageButtonProps {
  src?: string | any
  GrayScale?: boolean| any
}

const ImageButton = ({src, GrayScale } : ImageButtonProps) => {
  return(
      <>
    <Container>
        <ImgButton src={src} GrayScale={GrayScale}/>
    </Container>
    </>
  )
}

export default ImageButton;