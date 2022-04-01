import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContain = styled.div`
  @media (max-width: 600px) {
    width: 90%;
  }
  width: 600px;
  margin-top: 200px;
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

interface Props {
  borda?: boolean
  larg?: boolean
}

export const Insert = styled.label<Props>`
  background-position: center center;
  background-size: 30px;
  background-repeat: no-repeat;

  border-radius: 10px;
  border: ${(props) => (props.borda ? '4px dashed rgb(229, 236, 248)' : '2px solid rgb(16, 130, 255);')};
  color: #000;
  cursor: pointer;

  align-items: center;
  justify-content: flex-end;
  display: flex;
  flex-direction: row-reverse;

  width: ${(props) => (props.larg ? `235px` : `450px`)};
  @media (max-width: 480px) {
  word-break: break-all;
  overflow-wrap: break-word;
  width: ${(props) => (props.larg ? `235px` : `95%`)};
  }
  /* width: 235px; */
  height: 72px;
  font-weight: 500;

  > img {
    width: 28px;
    margin-left: 20px;
    margin-right: 10px;
    display: block;
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

interface SpanProps {
  disp?: boolean
}

export const Remove = styled.span<SpanProps>`
  margin-left:30px;
  margin-top: 25px;

  display: ${(props) => (props.disp ? 'none;' : 'inline;')};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;

  color: #979EAF;
`;

export const BtnSubmit = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
  > button {
  width: 262px;
  height: 72px;
  background: #EB3340;
  color: #fff;

  border: 2px #EB3340 solid;
  border-radius: 12px;

  font-size: 20px;
  }
`;