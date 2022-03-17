import { Container, ImgButton } from './styles';

interface ImageButtonProps {
  src?: string | any
  GrayScale?: boolean| any
  Ativo?: boolean | any
  id?: string | undefined
}

const ImageButton = ({src, GrayScale, Ativo, id} : ImageButtonProps) => {
  return(
      <>
    <Container>
        <ImgButton src={src} GrayScale={GrayScale} Ativo={Ativo} id='id'/>
    </Container>
    </>
  )
}

export default ImageButton;