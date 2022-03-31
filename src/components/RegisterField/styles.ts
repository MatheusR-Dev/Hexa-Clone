import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 120vh;
  padding-top: 200px;
`;

export const FormContain = styled.form`
  width: 25%;
  margin: auto;
  background: #fff;

  > div {
    margin-bottom: 35px;
    > h2 {
      font-size: 24px;
    }
  }
`;

export const Align = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const Need = styled.h4`
  font-weight: 300;
  > span {
    color: rgb(241, 81, 27);
  }
`;

export const Regis = styled.h3`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  margin: 0px auto;

  > label {
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 16px;

    > span {
      color: rgb(241, 81, 27);
    }
  }

  > div {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
  }
`;

export const StateDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  > label {
    width: auto;
    margin-bottom: 10px;
    > span {
      color: rgb(241, 81, 27);
    }
  }
`;

export const SelectState = styled.select`
  border: 2px solid rgb(229, 236, 248);
  border-radius: 15px;

  color: #979eaf;
  background: #fff;

  padding: 12px 24px;
  margin-bottom: 40px;

  font-size: 16px;
`;

export const CityDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  > label {
    margin-left: 20px;
    margin-bottom: 10px;
    > span {
      color: rgb(241, 81, 27);
    }
  }
`;

export const SelectCity = styled(SelectState)`
  margin-left: 20px;
`;

export const Input = styled.input`
  border: 2px solid rgb(229, 236, 248);
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 16px;
  margin-bottom: 10px;
  color: #979eaf;
`;

export const Insert = styled.label`
  background-position: center center;
  background-size: 30px;
  background-repeat: no-repeat;

  border-radius: 10px;
  border: 4px dashed rgb(229, 236, 248);
  
  color: #000;
  cursor: pointer;

  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  text-align: right;

  width: 235px;
  height: 72px;
  padding-top: 20px;
  padding-right: 40px;

  font-weight: 500;

  > img {
    width: 28px;
    display: block;
    margin-top: -25px;
    margin-left: 20px;
  }
`;

export const WebLabel = styled.label`

`;

export const Logo = styled.img`
  margin: 6px 20px 10px 0;

  width: 44px;
  height: 44px;
`;

export const InputUrl = styled(Input)`
  width: 100%;
  margin-top: 0;
`;

export const MediaLinks = styled.div`
  margin: 0;
  padding: 0;
`;