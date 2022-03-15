import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, ImgButton } from './styles';

interface ImageButtonProps {
  src?: string | any
  GrayScale?: boolean| any
}

const ImageButton = ({src, GrayScale} : ImageButtonProps) => {
  const [ altFilter, setAltFilter ] = useState(true)

  function handleAltFilter(){
    if(altFilter === true) {
        setAltFilter(false)
    }
  }

  return(
      <>
    <Container>
        <ImgButton src={src} GrayScale={altFilter} onClick={handleAltFilter}/>
    </Container>
    </>
  )
}

export default ImageButton;