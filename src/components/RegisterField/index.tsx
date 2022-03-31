import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Pasta from "../../assets/pasta.svg";
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
} from "./styles";

interface Props {
  target?: any;
  event?: React.ChangeEvent<HTMLInputElement>
}

export function Register() {
  //   const {register, handleSubmit} = useForm();
  const [ teste, setTeste ] = useState('')
  function handleChange(event: Props) {
    setTeste(event.target.value);
  }
  


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
            <Insert>
             {true ? 'Escolha o arquivo' : teste }
              <input
                type="file"
                accept=".pdf,.doc,.dox,.png,.jpg"
                style={{ display: `none` }}
                onChange={handleChange}
              />
              <img src={Pasta} alt="icone" />
            </Insert>
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
        </Form>
      </FormContain>
    </Container>
  );
}
