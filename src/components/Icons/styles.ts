import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ScreenIcon = styled.img`
  height: 60px;
  width: 60px;
  cursor: pointer;
  :hover {
    background-color: #E5ECF8;
    z-index: 999;
    border-radius: 100%;
    transition: width 0.5s;
    transition-property: all;
  }
`;
