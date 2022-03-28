import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  max-width: 258px;
  height: 45%;
  background: #FFF;
  
  padding: 3% 3% 3% 3%;

  /* border: 2px solid red; */
  border-radius: 14px;
  box-shadow: rgba(33, 47, 72, 0.12) 0px 2px 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Vaga = styled.p`
  font: 20px 'Museo Sans', sans-serif;
  font-weight: 500;
  text-align: center;
  line-height: 24px;
  height: 20%;
`;

export const CardIcon = styled.img`
  margin-top: 18%;
  width: 50px;
  height: 50px;
`;

export const CardBtn = styled.button`
  width: 142px;
  height: 52px;
  
  font-size: 20px;
  cursor: pointer;

  :hover {
    background: #EB3340;
    color: #FFF;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s;
  }

  margin-top: 10%;
  color: #EB3340;
  background: #FFF;

  border: 2px solid #EB3340;
  border-radius: 14px;
`;
