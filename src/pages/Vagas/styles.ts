import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: auto;
  /* background-color: aqua; */
`;

export const Main = styled.div`
  width: 100%;
  height: 1250px;
  /* background-color: aqua; */
  display: grid;
  grid-template-columns: [first] 5% [second] 20% [third] 50% [fourth] 20% [last] 5%;
  grid-template-rows: [row1] 6.5rem [row2] auto [lastrow] 8.5rem;
`;

export const Content = styled.div`
  grid-column: third;
  grid-row: row2;

  /* background-color: #ff0000; */

  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding-top: 100px;
`

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
`

export const Message = styled.p`
  font-size: 28px;
  font-weight: 400;
  /* color: #979EAF; */
`;

export const Dive = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /* background: cyan; */
  padding: 5% 10% 2% 10%;
  column-gap: 4%;
`;

