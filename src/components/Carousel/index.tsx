import React, { useState } from "react";
import {
  Caroulsel,
  IconContainer,
  ContainerButton,
  Header,
  ScreenImg,
  ScreenLayout,
  ScreenP,
  ScreenRed,
  Screens,
  ScreenTitle,
  Container,
  Tracinho,
} from "./styles";
import { Data } from "./CarouselData";
import ImageButton from "../ImageButton";
import { ScreenIcon } from "../Icons/styles";
import { useEffect } from "react";



export default function Carousel() {
  const [propr, setProps] = useState(Data[3]);
  const [itemIndex, setItemIndex] = useState(3);
  const [itemEffect, setItemEffect] = useState(false);
  
  useEffect(() => {
  setItemEffect(true)
  setTimeout(() => {
  setItemEffect(false)
  }, 500)
  }, [itemIndex])

  return (
    <>
      <Caroulsel>
        <Container>
          <Header
          Rowl={{ transform: propr.Transform }}
          ResizeRowl={{ transform: propr.TransformRsz }}
        >
          {Data.map((datas, index) => (
            <ContainerButton
              onClick={() => {
              setProps(datas);
              setItemIndex(index);
              }}
              disabled={itemEffect}
            >
              <ImageButton
                src={datas.ImageIcon}
                GrayScale={itemIndex === index}
              />
            </ContainerButton>
          ))}
          
          </Header>
          <Tracinho src={propr.Traco} />
        </Container>

        <Screens windowEffect={itemEffect}>
          <ScreenLayout>
            <ScreenTitle>{propr.Title}</ScreenTitle>
            <ScreenP>{propr.Text}</ScreenP>
            <ScreenRed style={{ color: propr.Color }}>
              Entrar em contato
            </ScreenRed>
            <div>
              <ScreenIcon src={propr.IconGPlay} />
              <ScreenIcon src={propr.IconMac} />
              <ScreenIcon src={propr.IconWeb} />
            </div>
          </ScreenLayout>
          <ScreenImg src={propr.Image} />
          <IconContainer>
            <ScreenIcon src={propr.IconGPlay} />
            <ScreenIcon src={propr.IconMac} />
            <ScreenIcon src={propr.IconWeb} />
          </IconContainer>
        </Screens>
      </Caroulsel>
    </>
  );
}
