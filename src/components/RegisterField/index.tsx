import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Pasta from "../../assets/pasta.svg";
import newPasta from "../../assets/newpasta.svg"
import Linknd from "../../assets/linkend.svg";
import Web from "../../assets/web.svg";
import {
  Container,
  FormContain,
  Need,
  Regis,
  Form,
  Align,
  Input,
  Insert,
  SelectCity,
  SelectState,
  StateDiv,
  CityDiv,
  WebLabel,
  Logo,
  InputUrl,
  MediaLinks,
  Remove,
  BtnSubmit,
} from "./styles";
import { useEffect } from "react";

interface Props {
  target?: any;
  event?: React.ChangeEvent<HTMLInputElement>
}

export function Register() {
  //   const {register, handleSubmit} = useForm();
  const [ text, setText ] = useState('Escolha o arquivo')
  const [ inputValue, setInputValue ] = useState('')
  const [ image, setImg ] = useState(Pasta)
  const [ borda, setBorda ] = useState(true)
  const [ off, setOff ] = useState(true)

  function handleChange(event: Props) {
    if(event.target.files[0].name.length > 33){
    setInputValue(event.target.files[0].name.slice(0, 35) + '...' + event.target.files[0].name.slice(-6));
  } else {
    setInputValue(event.target.files[0].name)
  }
}

  function Switch () {
    if (off === false){
      setText('Escolha o arquivo')
      setImg(Pasta)
      setBorda(true)
      setOff(true)
    }
  }

  useEffect(() => {
    if(inputValue !== ''){
      setText(inputValue)
      setImg(newPasta)
      setBorda(false)
      setOff(false)
    }
  }, [inputValue])


  return (
    <Container>
      <FormContain>
        <div>
          <Align>
            <Regis>CANDIDATAR-SE PARA VAGA</Regis>
            <Need>
              Obrigatório<span> *</span>
            </Need>
          </Align>
          <h2>Desenvolvedor Back-End Junior</h2>
        </div>

        <Form>
          <label>
            Nome Completo<span> *</span>
          </label>
          <Input placeholder="Nome Completo"></Input>

          <label>
            Email<span> *</span>
          </label>
          <Input placeholder="E-mail"></Input>

          <label>
            Telefone com DDD<span> *</span>
          </label>
          <Input placeholder="Telefone com DDD"></Input>

          <div>
            <StateDiv>
              <label>
                Estado<span> *</span>
              </label>
              <SelectState>
                <option value="Placeholder">Selecione</option>
                <option value=""></option>
              </SelectState>
            </StateDiv>

            <CityDiv>
              <label>
                Cidade<span> *</span>
              </label>
              <SelectCity>
                <option value="Placeholder">Selecione</option>
                <option value=""></option>
              </SelectCity>
            </CityDiv>
          </div>

          <label style={{ padding: 0 }}>
            Curriculo <span> *</span>
          </label>
          <div>
            <Insert borda={borda} larg={borda}>
              {text}
              <input
                type="file"
                accept=".pdf,.doc,.dox,.png,.jpg"
                style={{ display: `none` }}
                onChange={handleChange}
              />
              <img src={image} alt="icone" />
            </Insert>
            <Remove disp={off} onClick={Switch}>Remover</Remove>
          </div>

          <WebLabel>Perfil Linkedin</WebLabel>
          <MediaLinks>
            <Logo src={Linknd} alt="Linknd" />
            <InputUrl type="text" placeholder="URL" />
          </MediaLinks>

          <WebLabel>Website</WebLabel>
          <MediaLinks>
            <Logo src={Web} alt="Linknd" />
            <InputUrl type="text" placeholder="URL" />
          </MediaLinks>
          <BtnSubmit>
            <button>Enviar</button>
          </BtnSubmit>
        </Form>
      </FormContain>
    </Container>
  );
}
