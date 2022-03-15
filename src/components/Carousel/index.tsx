import React, { useState } from "react";
import {
  Caroulsel,
  Dive,
  GetzFood,
  Header,
  ScreenIcon,
  ScreenImg,
  ScreenLayout,
  ScreenP,
  ScreenRed,
  Screens,
  ScreenTitle,
  Teste,
  Tracinho,
} from "./styles";
import { Data } from "./CarouselData";
import Micro from "../../assets/micrologo.svg";
import Getz from "../../assets/logogetz.svg";
import Gestor from "../../assets/gestor.svg";
import Entrega from "../../assets/entrega.svg";
import WhiteL from "../../assets/whitel.svg";
import Rdio from "../../assets/hexaradio.svg";
import Epedidos from "../../assets/epedido.svg";
import Tracinhoo from "../../assets/tracinho.svg";
import ImageButton from "../ImageButton";

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
  const [icon, setIcon] = useState(Data.GetzFood[0].Icon);
  const [text, setText] = useState(Data.GetzFood[0].Text);
  const [image, setImage] = useState(Data.GetzFood[0].Image);
  const [color, setColor] = useState(`#16355A`);
  const [change, setChange] = useState(Effect);
  const [resizeChange, setResizeChange] = useState(ResizeEffect);
  const [wEffect, setwEffect] = useState(true);
  const [wSize] = useState(WindowSize);

  function Switch() {
    setTitle(Data.GetzEntrega[0].Title);
    setIcon(Data.GetzEntrega[0].Icon);
    setImage(Data.GetzEntrega[0].Image);
    setText(Data.GetzEntrega[0].Text);
    setColor(`#1082FF`);
    setChange({ transform: `translateX(calc(-44.5%)) translateZ(0px)` });
    setResizeChange({ transform: `translateX(calc(-104%)) translateZ(0px)` });
    setwEffect(true);
  }

  function Switch2() {
    setTitle(Data.GetzGestor[0].Title);
    setIcon(Data.GetzGestor[0].Icon);
    setImage(Data.GetzGestor[0].Image);
    setText(Data.GetzGestor[0].Text);
    setColor(`#7438FF`);
    setChange({ transform: `translateX(calc(-15%)) translateZ(0px)` });
    setResizeChange({ transform: `translateX(calc(-35%)) translateZ(0px)` });
    setwEffect(true);
  }

  function Switch3() {
    setTitle(Data.GetzFood[0].Title);
    setIcon(Data.GetzFood[0].Icon);
    setImage(Data.GetzFood[0].Image);
    setText(Data.GetzFood[0].Text);
    setColor(`#EB3340`);
    setChange({ transform: `translateX(calc(100% - 100%)) translateZ(0px)` });
    setResizeChange({
      transform: `translateX(calc(100% - 100%)) translateZ(0px)`,
    });
    setwEffect(true);
  }

  function Switch4() {
    setTitle(Data.EPedido[0].Title);
    setIcon(Data.EPedido[0].Icon);
    setImage(Data.EPedido[0].Image);
    setText(Data.EPedido[0].Text);
    setColor(`#F9B61B`);
    setChange({ transform: `translateX(calc(14.5%)) translateZ(0px)` });
    setResizeChange({ transform: `translateX(calc(35%)) translateZ(0px)` });
    setwEffect(true);
  }

  function Switch5() {
    setTitle(Data.HexaRadio[0].Title);
    setImage(Data.HexaRadio[0].Image);
    setText(Data.HexaRadio[0].Text);
    setColor(`#EB3340`);
    setChange({ transform: `translateX(calc(44%)) translateZ(0px)` });
    setResizeChange({ transform: `translateX(calc(104%)) translateZ(0px)` });
    setwEffect(true);
  }

  function Switch6() {
    setTitle(Data.MicroBank[0].Title);
    setIcon(Data.MicroBank[0].Icon);
    setImage(Data.MicroBank[0].Image);
    setText(Data.MicroBank[0].Text);
    setColor(`#16355A`);
    setChange({ transform: `translateX(calc(-29.5%)) translateZ(0px)` });
    setResizeChange({ transform: `translateX(calc(-69%)) translateZ(0px)` });
    setwEffect(true);
  }

  function Switch7() {
    setTitle(Data.Whitelabel[0].Title);
    setIcon(Data.Whitelabel[0].Icon);
    setImage(Data.Whitelabel[0].Image);
    setText(Data.Whitelabel[0].Text);
    setColor(`#1082FF`);
    setChange({ transform: `translateX(calc(29%)) translateZ(0px)` });
    setResizeChange({ transform: `translateX(calc(69%)) translateZ(0px)` });
    setwEffect(true);
  }

  return (
    <>
      <Caroulsel>
        <Teste>
          <Header
            Rowl={{ transform: change.transform }}
            ResizeRowl={{ transform: resizeChange.transform }}
            onMouseOut={() => setwEffect(false)}
          >
            <GetzFood onClick={Switch5} resizer={wSize}>
              <ImageButton src={Rdio} />
            </GetzFood>

            <GetzFood onClick={Switch7} resizer={wSize}>
              <ImageButton src={WhiteL} />
            </GetzFood>

            <GetzFood onClick={Switch4} resizer={wSize}>
              <ImageButton src={Epedidos} />
            </GetzFood>

            <GetzFood onClick={Switch3} resizer={wSize}>
              <ImageButton src={Getz} />
            </GetzFood>

            <GetzFood onClick={Switch2} resizer={wSize}>
              <ImageButton src={Gestor} />
            </GetzFood>

            <GetzFood onClick={Switch6} resizer={wSize}>
              <ImageButton src={Micro} />
            </GetzFood>

            <GetzFood onClick={Switch} resizer={wSize}>
              <ImageButton src={Entrega} />
            </GetzFood>
          </Header>
          <Tracinho src={Tracinhoo} />
        </Teste>

        <Screens windowEffect={wEffect}>
          <ScreenLayout>
            <ScreenTitle>{title}</ScreenTitle>
            <ScreenP>{text}</ScreenP>
            <ScreenRed style={{ color }}>Entrar em contato</ScreenRed>
          </ScreenLayout>
          <ScreenImg src={image} />
            <Dive>
              <ScreenIcon src={icon} />
            </Dive>
        </Screens>
      </Caroulsel>
    </>
  );
}
