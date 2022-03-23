import styled from 'styled-components';

interface Props {
  hidden?: boolean
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: inline;
`;

export const ScreenIcon = styled.img<Props>`
  height: 60px;
  width: 60px;
  cursor: pointer;
  display: ${(props) => (props.hidden ? 'none' : 'inline-block')};
  :hover {
    background-color: #E5ECF8;
    z-index: 999;
    border-radius: 100%;
    transition: width 0.5s;
    transition-property: all;
  }
`;
