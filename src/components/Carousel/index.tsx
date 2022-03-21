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

export default function Carousel() {
  const [propr, setProps] = useState(Data[3]);

  console.log(propr.wEffect);

  return (
    <>
      <Caroulsel>
        <Container>
          <Header
            Rowl={{ transform: propr.Transform }}
            ResizeRowl={{ transform: propr.TransformRsz }}
          >
            <ContainerButton
              onClick={() => setProps(Data[0])}
              resizer={{ width: Data[7].Width }}
            >
              <ImageButton
                src={Data[0].ImageIcon}
                GrayScale={propr.GrayScale}
              />
            </ContainerButton>

            <ContainerButton
              onClick={() => setProps(Data[1])}
              resizer={{ width: Data[7].Width }}
            >
              <ImageButton
                src={Data[1].ImageIcon}
                GrayScale={propr.GrayScale1}
              />
            </ContainerButton>

            <ContainerButton
              onClick={() => setProps(Data[2])}
              resizer={{ width: Data[7].Width }}
            >
              <ImageButton
                src={Data[2].ImageIcon}
                GrayScale={propr.GrayScale2}
              />
            </ContainerButton>

            <ContainerButton
              onClick={() => setProps(Data[3])}
              resizer={{ width: Data[7].Width }}
            >
              <ImageButton
                src={Data[3].ImageIcon}
                GrayScale={propr.GrayScale3}
              />
            </ContainerButton>

            <ContainerButton
              onClick={() => setProps(Data[4])}
              resizer={{ width: Data[7].Width }}
            >
              <ImageButton
                src={Data[4].ImageIcon}
                GrayScale={propr.GrayScale4}
              />
            </ContainerButton>

            <ContainerButton
              onClick={() => setProps(Data[5])}
              resizer={{ width: Data[7].Width }}
            >
              <ImageButton
                src={Data[5].ImageIcon}
                GrayScale={propr.GrayScale5}
              />
            </ContainerButton>

            <ContainerButton
              onClick={() => setProps(Data[6])}
              resizer={{ width: Data[7].Width }}
            >
              <ImageButton
                src={Data[6].ImageIcon}
                GrayScale={propr.GrayScale6}
              />
            </ContainerButton>
          </Header>
          <Tracinho src={propr.Traco} />
        </Container>

        <Screens windowEffect={propr.wEffect} efeito={propr.efeito}>
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
