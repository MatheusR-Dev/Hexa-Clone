import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

import {
  About,
  Animations,
  Container,
  Hamburguer,
  Icon,
  Items,
  Links,
  Redirect,
  AnimContain,
  HContain,
  StyledLink,
  HLink
} from './styles'

const Header: React.FC = () => {
  const [playAnimation, setPlayAnimation] = useState(false)
  const [hiddenList, setHiddenList] = useState(true)
  const [animate, setAnimate] = useState(false)
  const [change, setChange] = useState(false)

  function handleAnimation() {
    if (playAnimation === false && hiddenList === true) {
      setPlayAnimation(true)
      setHiddenList(false)
      setAnimate(true)
      setChange(true)
    } else {
      setPlayAnimation(false)
      setHiddenList(true)
      setAnimate(false)
      setChange(false)
    }
  }
  return (
    <Container>
      <Hamburguer>
        <AnimContain active={playAnimation} onClick={handleAnimation}>
          <Animations animate={animate} change={change}></Animations>
        </AnimContain>

        <Items show={hiddenList}>
          <HLink to="/">Home</HLink>
          <Links>Sobre Nós</Links>
          <Links>Contato</Links>
          <HLink to="/vagas">Vagas</HLink>
        </Items>
      </Hamburguer>

      <HContain>
        <Link to="/">
          <Icon src={Logo} alt="Logo"></Icon>
        </Link>
        <About>
          <Redirect>Soluções</Redirect>
          <Redirect>Sobre Nós</Redirect>
          <Redirect>Contato </Redirect>
          <StyledLink to="/vagas">Vagas</StyledLink>
        </About>
      </HContain>
    </Container>
  )
}

export default Header
