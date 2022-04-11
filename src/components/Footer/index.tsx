import React from 'react'
import LogoHexa from '../../assets/logohexa.svg'
import {
  Container,
  FooterContent,
  ContactInfo,
  Logo,
  About,
  Item,
  Address,
  Column,
  Content,
  Items,
  List,
  SubTitle,
  StyledLink,
  FooterText,
  FooterTextDiv
} from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterContent>
        <ContactInfo>
          <Logo src={LogoHexa} />
          <Address>
            © 2020 hexaLAB - HEXALAB SOLUCOES EM SOFTWARE LTDA | CNPJ
            245463243/9098-00 | Rua Teófilo David Muzel, 639, Vila Ophelia,
            Itapeva/SP, Brasil.
          </Address>
        </ContactInfo>

        <About>
          <Column>
            <Content>
              <SubTitle>Produtos</SubTitle>
              <List>
                <Items>
                  <Item>epedido</Item>
                </Items>

                <Items>
                  <Item>hexad</Item>
                </Items>

                <Items>
                  <Item>hexapay</Item>
                </Items>

                <Items>
                  <Item>hexaplay</Item>
                </Items>

                <Items>
                  <Item>hexaradio</Item>
                </Items>
              </List>
            </Content>
          </Column>

          <Column>
            <Content>
              <SubTitle>Hexalab</SubTitle>
              <List>
                <Items>
                  <Item>Quem somos?</Item>
                </Items>

                <Items>
                  <StyledLink to="/vagas">Vagas</StyledLink>
                </Items>

                <Items>
                  <Item>Termos de Privacidade de Dados</Item>
                </Items>
              </List>
            </Content>
          </Column>

          <Column>
            <Content>
              <SubTitle>Fale Conosco</SubTitle>
              <List>
                <Items>
                  <Item>Nossa ouvidoria</Item>
                </Items>
                <Items>
                  <Item>0800 123 1234</Item>
                </Items>
                <Items>
                  <Item>ouvidoria@hexalab.com.br</Item>
                </Items>
              </List>
            </Content>
          </Column>
        </About>
      </FooterContent>
      <FooterTextDiv>
        <FooterText>© 2020 hexaLAB</FooterText>
      </FooterTextDiv>
    </Container>
  )
}

export default Footer
