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

const Effect = {
  transform: `translateX(calc(-1px)) translateZ(0px)`,
};

const ResizeEffect = {
  transform: `translateX(calc(-1px)) translateZ(0px)`,
};

const WindowSize = {
  width: `calc(100% / 7)`,
};

export default function Carousel() {
  const [title, setTitle] = useState(Data.GetzFood[0].Title);
  const [icon, setIcon] = useState(true);
  const [text, setText] = useState(Data.GetzFood[0].Text);
  const [image, setImage] = useState(Data.GetzFood[0].Image);
  const [traco, setTraco] = useState(Data.GetzFood[0].Traco)
  const [color, setColor] = useState(`#16355A`);
  const [change, setChange] = useState(Effect);
  const [resizeChange, setResizeChange] = useState(ResizeEffect);
  const [wEffect, setwEffect] = useState(true);
  const [wSize] = useState(WindowSize);
  const [active, setActive] = useState(false)
  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(true)
  const [active3, setActive3] = useState(false)
  const [active4, setActive4] = useState(false)
  const [active5, setActive5] = useState(false)
  const [active6, setActive6] = useState(false)

  function GetzEntrega() {
    setTitle(Data.GetzEntrega[0].Title);
    setIcon(true);
    setImage(Data.GetzEntrega[0].Image);
    setText(Data.GetzEntrega[0].Text);
    setColor(`#1082FF`);
    setChange({ transform: `translateX(calc(14.5%)) translateZ(0px)` });
    setResizeChange({ transform: `translateX(calc(35%)) translateZ(0px)` });
    setwEffect(true);
    setActive(true)
    setActive1(false)
    setActive2(false)
    setActive3(false)
    setActive4(false)
    setActive5(false)
    setActive6(false)
    setTraco(Data.GetzEntrega[0].Traco)
  }

  function GetzGestor() {
    setTitle(Data.GetzGestor[0].Title);
    setIcon(true);
    setImage(Data.GetzGestor[0].Image);
    setText(Data.GetzGestor[0].Text);
    setColor(`#7438FF`);
    setChange({ transform: `translateX(calc(-15%)) translateZ(0px)` });
    setResizeChange({ transform: `translateX(calc(-35%)) translateZ(0px)` });
    setwEffect(true);
    setActive1(true)
    setActive(false)
    setActive2(false)
    setActive3(false)
    setActive4(false)
    setActive5(false)
    setActive6(false)
    setTraco(Data.GetzGestor[0].Traco)
  }

  function GetzFood() {
    setTitle(Data.GetzFood[0].Title);
    setIcon(true);
    setImage(Data.GetzFood[0].Image);
    setText(Data.GetzFood[0].Text);
    setColor(`#EB3340`);
    setChange({ transform: `translateX(calc(100% - 100%)) translateZ(0px)` });
    setResizeChange({
      transform: `translateX(calc(100% - 100%)) translateZ(0px)`,
    });
    setwEffect(true);
    setActive2(true)
    setActive1(false)
    setActive(false)
    setActive3(false)
    setActive4(false)
    setActive5(false)
    setActive6(false)
    setTraco(Data.GetzFood[0].Traco)
  }

  function EPedido() {
    setTitle(Data.EPedido[0].Title);
    setIcon(true);
    setImage(Data.EPedido[0].Image);
    setText(Data.EPedido[0].Text);
    setColor(`#F9B61B`);
    setChange({ transform: `translateX(calc(-29.5%)) translateZ(0px)` });
    setResizeChange({ transform: `translateX(calc(-69%)) translateZ(0px)` });
    setwEffect(true);
    setActive3(true)
    setActive1(false)
    setActive2(false)
    setActive(false)
    setActive4(false)
    setActive5(false)
    setActive6(false)
    setTraco(Data.EPedido[0].Traco)
  }

  function Hexaradio() {
    setTitle(Data.HexaRadio[0].Title);
    setImage(Data.HexaRadio[0].Image);
    setText(Data.HexaRadio[0].Text);
    setColor(`#EB3340`);
    setIcon(false);
    setChange({ transform: `translateX(calc(-44.5%)) translateZ(0px)` });
    setResizeChange({ transform: `translateX(calc(-104%)) translateZ(0px)` });
    setwEffect(true);
    setActive4(true)
    setActive1(false)
    setActive2(false)
    setActive3(false)
    setActive(false)
    setActive5(false)
    setActive6(false)
    setTraco(Data.HexaRadio[0].Traco)
  }

  function MicroBank() {
    setTitle(Data.MicroBank[0].Title);
    setIcon(true);
    setImage(Data.MicroBank[0].Image);
    setText(Data.MicroBank[0].Text);
    setColor(`#16355A`);
    setChange({ transform: `translateX(calc(44%)) translateZ(0px)` });
    setResizeChange({ transform: `translateX(calc(104%)) translateZ(0px)` });
    setwEffect(true);
    setActive5(true)
    setActive1(false)
    setActive2(false)
    setActive3(false)
    setActive4(false)
    setActive(false)
    setActive6(false)
    setTraco(Data.MicroBank[0].Traco)
  }

  function Whitelabel() {
    setTitle(Data.Whitelabel[0].Title);
    setIcon(true);
    setImage(Data.Whitelabel[0].Image);
    setText(Data.Whitelabel[0].Text);
    setColor(`#1082FF`);
    setChange({ transform: `translateX(calc(29%)) translateZ(0px)` });
    setResizeChange({ transform: `translateX(calc(69%)) translateZ(0px)` });
    setwEffect(true);
    setActive6(true)
    setActive1(false)
    setActive2(false)
    setActive3(false)
    setActive4(false)
    setActive5(false)
    setActive(false)
    setTraco(Data.Whitelabel[0].Traco)
  }

  return (
    <>
      <Caroulsel>
        <Container>
          <Header
            Rowl={{ transform: change.transform }}
            ResizeRowl={{ transform: resizeChange.transform }}
            onMouseOut={() => setwEffect(false)}
          >
            <ContainerButton onClick={MicroBank} resizer={wSize}>
              <ImageButton src={Data.MicroBank[0].ImageIcon} GrayScale={active5}/>
            </ContainerButton>

            <ContainerButton onClick={Whitelabel} resizer={wSize}>
              <ImageButton src={Data.Whitelabel[0].ImageIcon} GrayScale={active6}/>
            </ContainerButton>

            <ContainerButton onClick={GetzEntrega} resizer={wSize}>
              <ImageButton src={Data.GetzEntrega[0].ImageIcon} GrayScale={active}/>
            </ContainerButton>
            
            <ContainerButton onClick={GetzFood} resizer={wSize}>
              <ImageButton src={Data.GetzFood[0].ImageIcon} GrayScale={active2}/>
            </ContainerButton>
            
            <ContainerButton onClick={GetzGestor} resizer={wSize}>
              <ImageButton src={Data.GetzGestor[0].ImageIcon} GrayScale={active1}/>
            </ContainerButton>
            
            <ContainerButton onClick={EPedido} resizer={wSize}>
              <ImageButton src={Data.EPedido[0].ImageIcon} GrayScale={active3}/>
            </ContainerButton>
            
            <ContainerButton onClick={Hexaradio} resizer={wSize}>
              <ImageButton src={Data.HexaRadio[0].ImageIcon} GrayScale={active4}/>
            </ContainerButton>
          </Header>
          <Tracinho src={traco}/>
        </Container>

        <Screens windowEffect={wEffect}>
          <ScreenLayout>
            <ScreenTitle>{title}</ScreenTitle>
            <ScreenP>{text}</ScreenP>
            <ScreenRed style={{ color }}>Entrar em contato</ScreenRed>
            <div>
              <ScreenIcon src={icon ? Data.MicroBank[0].IconGPlay : Data.MicroBank[0].Blank}/>
              <ScreenIcon src={icon ? Data.MicroBank[0].IconWeb : Data.MicroBank[0].Blank}/>
              <ScreenIcon src={icon ? Data.MicroBank[0].IconMac : Data.MicroBank[0].Blank}/>
            </div>
          </ScreenLayout>
          <ScreenImg src={image}/>
          <IconContainer>
            <ScreenIcon src={icon ? Data.MicroBank[0].IconGPlay : Data.MicroBank[0].Blank}/>
            <ScreenIcon src={icon ? Data.MicroBank[0].IconWeb : Data.MicroBank[0].Blank}/>
            <ScreenIcon src={icon ? Data.MicroBank[0].IconMac : Data.MicroBank[0].Blank}/>
          </IconContainer>
        </Screens>
      </Caroulsel>
    </>
  );
}
