import styled from "styled-components";

export const Help = styled.a`
  width: 12.5rem;
  z-index: 9999;
  font-weight: 500;

  color: #231F20;
  background: #FFFFFF;
  border-radius: 40px;
  box-shadow: rgb(33 47 72 / 20%) 0px 3px 10px;

  transition: all .2s ease-in-out;
  :hover{ 
    transform: scale(1.1); 
  }

  cursor: pointer;

  padding: 1.5rem 2.1rem;
  position: fixed;

  right: 5%;
  bottom: 5%;

  transition: all 0.3s ease 0s;
`;