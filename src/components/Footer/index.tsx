import React from "react";
import LogoHexa from "../../assets/logohexa.svg";
import { Container, Foooter, ContactInfo, Logo, About, Item, Address, Column, Content, Div, Itens, List, SubTitle, Texte, StyledLink } from "./styles";

const Footer: React.FC= () => {
  return (
    <Container>
      <Foooter>
        <ContactInfo>
          <Logo src={LogoHexa}/>
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
                <Itens>
                  <Item>epedido</Item>
                </Itens>

                <Itens>
                  <Item>hexad</Item>
                </Itens>

                <Itens>
                  <Item>hexapay</Item>
                </Itens>

                <Itens>
                  <Item>hexaplay</Item>
                </Itens>

                <Itens>
                  <Item>hexaradio</Item>
                </Itens>
              </List>
            </Content>
          </Column>

          <Column>
            <Content>
              <SubTitle>Hexalab</SubTitle>
              <List>
                <Itens>
                  <Item>Quem somos?</Item>
                </Itens>

                <Itens>
                  <StyledLink to="/vagas">Vagas</StyledLink>
                </Itens>

                <Itens>
                  <Item>Termos de Privacidade de Dados</Item>
                </Itens>
              </List>
            </Content>
          </Column>

          <Column>
            <Content>
              <SubTitle>Fale Conosco</SubTitle>
              <List>
                <Itens>
                  <Item>Nossa ouvidoria</Item>
                </Itens>
                <Itens>
                  <Item>0800 123 1234</Item>
                </Itens>
                <Itens>
                  <Item>ouvidoria@hexalab.com.br</Item>
                </Itens>
              </List>
            </Content>
          </Column>
        </About>
      </Foooter>
      <Div>
        <Texte>© 2020 hexaLAB</Texte>
      </Div>
    </Container>
  );
};

export default Footer;
