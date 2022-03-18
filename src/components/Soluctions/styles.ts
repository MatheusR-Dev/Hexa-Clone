import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 1200px;
`;

export const TextBox = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 48px;
  margin-bottom: 20px;
`;

export const SubTextBox = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 28px;
  color: #979EAF;
`;

export const Footer = styled.div`
  width: 100%;
  height: 35.5rem;
  
  display: flex;
  flex-direction: column;
  
  margin-top: 40px;
  padding-top: 90px;

  background-color: #F5F8FD;
  @media (max-width: 768px) {
  height: 55.5rem;
  }
`;

export const ContactInfo = styled.div`
  width: 100%;
  height: 6rem;

  padding: 0 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
  flex-direction: column;
}
`;

export const Logo = styled.img`
  @media (max-width: 768px) {
  padding-bottom: 5%;
}
`;

export const Address = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #979EAF;
  width: 30rem;
  text-align: right;
  @media (max-width: 768px) {
  text-align: center;
  width: 80vw;
}
`;

export const About = styled.div`
  width: 100%;
  height: 385px;

  margin-top: 90px;

  display: grid;
  flex-direction: row;

  grid-template-columns: repeat(4, 1fr);

  padding: 0 6rem 0 6rem;
  
  @media (max-width: 768px) {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  text-align: center;

}
@media (max-width: 600px) {
  padding: 0;
  }
  
`;

export const SubTitle = styled.h5`
  font-weight: 500;
  font-size: 20px;

  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const Itens = styled.li``;

export const Item = styled.a`
  font-weight: 200;
  font-size: 20px;

  :hover{
  cursor: pointer;
  text-decoration: underline;
  }
`;

export const Column = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;

  align-items: auto;
`;

export const Div = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Texte = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  color: #979EAF;
`;