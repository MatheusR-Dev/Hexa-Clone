import React, { useState, useRef } from 'react';
import { AnimationEventHandler } from 'react';
import { EffectFrame, Caroulsel, Dive, GetzFood, Header, ImageButton, ScreenIcon, ScreenImg, ScreenLayout, ScreenP, ScreenRed, Screens, ScreenTitle, Teste } from './styles';
import { Data } from './CarouselData'
import Micro from '../../assets/micrologo.svg'
import Getz from '../../assets/logogetz.svg'
import Gestor from  '../../assets/gestor.svg'
import Entrega from '../../assets/entrega.svg'
import WhiteL from '../../assets/whitel.svg'
import Rdio from '../../assets/hexaradio.svg'
import Epedidos from '../../assets/epedido.svg'

const Effect = {
  transform: `translateX(-30px) translateZ(0px)`
}

export default function Carousel() {
  const [ title, setTitle ] = useState(Data.GetzFood[0].Title)
  const [ icon, setIcon ] = useState(Data.GetzFood[0].Icon)
  const [ text, setText ] = useState(Data.GetzFood[0].Text)
  const [ image, setImage ] = useState(Data.GetzFood[0].Image)
  const [ color, setColor ] = useState(`#16355A`)
  const [ change, setChange] = useState(Effect)

  function Switch (){
    setTitle(Data.GetzEntrega[0].Title)
    setIcon(Data.GetzEntrega[0].Icon)
    setImage(Data.GetzEntrega[0].Image)
    setText(Data.GetzEntrega[0].Text)
    setColor(`#1082FF`)
    setChange({transform: `translateX(-980.857px) translateZ(0px)`})
  }

  function Switch2 (){
    setTitle(Data.GetzGestor[0].Title)
    setIcon(Data.GetzGestor[0].Icon)
    setImage(Data.GetzGestor[0].Image)
    setText(Data.GetzGestor[0].Text)
    setColor(`#7438FF`)
    setChange({transform: `translateX(-320.286px) translateZ(0px)`})
  }

  function Switch3 (){
    setTitle(Data.GetzFood[0].Title)
    setIcon(Data.GetzFood[0].Icon)
    setImage(Data.GetzFood[0].Image)
    setText(Data.GetzFood[0].Text)
    setColor(`#EB3340`)
    setChange({transform: `translateX(-10px) translateZ(0px)`})
  }

  function Switch4 (){
    setTitle(Data.EPedido[0].Title)
    setIcon(Data.EPedido[0].Icon)
    setImage(Data.EPedido[0].Image)
    setText(Data.EPedido[0].Text)
    setColor(`#F9B61B`)
    setChange({transform: `translateX(330px) translateZ(0px)`})
  }

  function Switch5 (){
    setTitle(Data.HexaRadio[0].Title)
    setImage(Data.HexaRadio[0].Image)
    setText(Data.HexaRadio[0].Text)
    setColor(`#EB3340`)
    setChange({transform: `translateX(970px) translateZ(0px)`})
  }

  function Switch6 (){
    setTitle(Data.MicroBank[0].Title)
    setIcon(Data.MicroBank[0].Icon)
    setImage(Data.MicroBank[0].Image)
    setText(Data.MicroBank[0].Text)
    setColor(`#16355A`)
    setChange({transform: `translateX(-660px) translateZ(0px)`})
  }

  function Switch7 (){
    setTitle(Data.Whitelabel[0].Title)
    setIcon(Data.Whitelabel[0].Icon)
    setImage(Data.Whitelabel[0].Image)
    setText(Data.Whitelabel[0].Text)
    setColor(`#1082FF`)
    setChange({transform: `translateX(630px) translateZ(0px)`})
  }

  window.addEventListener('resize',function(){
  var largura = window.screen.width
  var altura = window.screen.height
  console.log(largura, altura)
  })

  const changeCarousel = useRef<HTMLDivElement>(null)

  function onButtonClick(id: number) {
    setChange({transform: `translateX(${50 - id}px)`})
  }


  return(
    <>
        <Caroulsel>
       <Teste>
        <Header ref={changeCarousel} style={{transform:`${change.transform}`}}>
            <GetzFood onClick={() => onButtonClick(1)}>
              <ImageButton src={Rdio}/>
            </GetzFood>

            <GetzFood onClick={() => onButtonClick(2)}>
              <ImageButton src={WhiteL}/>
             </GetzFood>

            <GetzFood onClick={() => onButtonClick(3)}>
              <ImageButton src={Epedidos}/>
            </GetzFood>

            <GetzFood onClick={() => onButtonClick(4)}>
              <ImageButton src={Getz}/>
            </GetzFood>

            <GetzFood onClick={() => onButtonClick(5)}>
              <ImageButton src={Gestor}/>
            </GetzFood>

            <GetzFood onClick={() => onButtonClick(6)}>
              <ImageButton src={Micro}/>
            </GetzFood>

            <GetzFood onClick={() => onButtonClick(7)}>
              <ImageButton src={Entrega}/>
            </GetzFood>
        </Header>
      </Teste>     

        <Screens>
            <ScreenLayout>
                <ScreenTitle>{title}</ScreenTitle>
                <ScreenP>{text}</ScreenP>
                <ScreenRed style={{color}}>Entrar em contato</ScreenRed>
                <Dive>
                  <ScreenIcon src={icon}/>
                </Dive>
            </ScreenLayout>
            <ScreenImg src={image}/>

        </Screens>

        </Caroulsel>
    </>
  )
}