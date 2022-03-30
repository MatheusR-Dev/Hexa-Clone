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
  @media (max-width: 1042px){
  display: block;
}
  grid-template-columns: [first] 5% [second] 20% [third] 50% [fourth] 20% [last] 5%;
  grid-template-rows: [row1] 6.5rem [row2] auto [lastrow] 8.5rem;
  
  @media (max-width: 520px) {
    margin-bottom: 300px;
  }
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
  text-align: center;
  @media screen and (max-width: 768px) {
  font-size: 2em;
  }
`

export const Message = styled.p`
  font-size: 28px;
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 768px) {
  font-size: 1.4em;
  }
  /* color: #979EAF; */
`;

export const Dive = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;

  /* background: cyan; */
  padding: 5% 2% 2% 2%;

@media (max-width: 1411px){
  padding: 15% 2% 2% 2%;
}

  > div{
    margin: 1.8%;
  }
`;

