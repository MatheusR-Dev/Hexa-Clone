import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Pasta from '../../assets/pasta.svg'
import newPasta from '../../assets/newpasta.svg'
import Linknd from '../../assets/linkend.svg'
import Web from '../../assets/web.svg'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
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
  FileDiv
} from './styles'
import { CountyProps, StateProps } from '../../services/receive'
import Profile from '../Profile'

interface PropsVagas {
  id?: number
  vaga?: string
}

interface Props {
  target?: any
  event?: React.ChangeEvent<HTMLInputElement>
}

export function Register() {
  const { register, handleSubmit } = useForm()
  const { id }: { id: string } = useParams()
  const [text, setText] = useState('Escolha o arquivo')
  const [inputValue, setInputValue] = useState('')
  const [formData, setFormData] = useState<any>()
  const [vaga, setVaga] = useState<PropsVagas[]>([])
  const [image, setImg] = useState(Pasta)
  const [border, setBorder] = useState(true)
  const [off, setOff] = useState(true)
  const [selectValue, setSelectValue] = useState('')
  const [state, setState] = useState<StateProps[]>([])
  const [city, setCity] = useState<CountyProps[]>([])
  const [open, setOpen] = useState(true)

  const getData = async () => {
    if (formData !== undefined) {
      setOpen(false)
      const {
        fullName,
        email,
        phoneNumber,
        state,
        city,
        linknd,
        website,
        curriculum
      } = formData
      // const Dados = new FormData();
      // Dados.append("curriculum", curriculum[0])
      const { data, error } = await (
        await api.services
      ).getData({
        fullName: fullName,
        email: email,
        phoneNumber: parseInt(phoneNumber),
        state: state,
        city: city,
        linknd: linknd,
        website: website,
        curriculum: curriculum
      })
    }
  }

  useEffect(() => {
    const getState = async () => {
      const { data, error } = await (await api.services).getState()
      if (data) {
        setState(data)
      } else {
        console.log(error)
      }
    }
    getState()
  }, [selectValue])

  useEffect(() => {
    const getCounty = async () => {
      const { data, error } = await (
        await api.services
      ).getCounty({ uf: selectValue })
      if (data) {
        setCity(data)
      } else {
        console.log(error)
      }
    }
    getCounty()
  }, [selectValue])

  useEffect(() => {
    const getVagas = async () => {
      const { data, error } = await (await api.services).getVagas({ id: id })
      if (data) {
        setVaga(data)
      } else {
        console.log(error)
      }
    }
    getVagas()
  }, [id])

  function handleChange(event: Props) {
    if (event.target.files[0].name.length > 33) {
      setInputValue(
        event.target.files[0].name.slice(0, 30) +
          '...' +
          event.target.files[0].name.slice(-6)
      )
    } else {
      setInputValue(event.target.files[0].name)
    }
  }

  function Switch() {
    if (off === false) {
      setText('Escolha o arquivo')
      setImg(Pasta)
      setBorder(true)
      setOff(true)
    }
  }

  useEffect(() => {
    if (inputValue !== '') {
      setText(inputValue)
      setImg(newPasta)
      setBorder(false)
      setOff(false)
    }
  }, [inputValue])

  useEffect(() => {
    formData && getData()
  }, [formData])

  return (
    <Container>
      <Profile hidden={open} onClick={() => setOpen(true)} />
      <FormContain>
        <div>
          <Align>
            <Regis>CANDIDATAR-SE PARA VAGA</Regis>
            <Need>
              Obrigatório<span> *</span>
            </Need>
          </Align>
          {vaga.map((data) => (
            <h2 key={data.id}>{data.vaga}</h2>
          ))}
        </div>

        <Form onSubmit={handleSubmit((formData) => setFormData(formData))}>
          <label>
            Nome Completo<span> *</span>
          </label>
          <Input
            required
            {...register('fullName')}
            placeholder="Nome Completo"
          ></Input>

          <label>
            Email<span> *</span>
          </label>
          <Input required {...register('email')} placeholder="E-mail"></Input>

          <label>
            Telefone com DDD<span> *</span>
          </label>
          <Input
            required
            {...register('phoneNumber')}
            placeholder="Telefone com DDD"
          ></Input>

          <div>
            <StateDiv>
              <label>
                Estado<span> *</span>
              </label>
              <SelectState
                required
                {...register('state')}
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
              >
                <option value="Placeholder">Selecione</option>
                {state.map((data) => (
                  <option key={data.id} value={data.sigla}>
                    {data.sigla}
                  </option>
                ))}
              </SelectState>
            </StateDiv>

            <CityDiv>
              <label>
                Cidade<span> *</span>
              </label>
              <SelectCity required {...register('city')}>
                <option value="Placeholder">Selecione</option>
                {city.map((data) => (
                  <option key={data.id} value={data.nome}>
                    {data.nome}
                  </option>
                ))}
              </SelectCity>
            </CityDiv>
          </div>

          <label style={{ padding: 0 }}>
            Curriculo <span> *</span>
          </label>
          <FileDiv>
            <Insert borda={border} larg={border}>
              {text}
              <input
                required
                {...register('curriculum')}
                type="file"
                accept=".pdf,.doc,.dox,.png,.jpg"
                style={{ display: `none` }}
                onChange={handleChange}
              />
              <img src={image} alt="icone" />
            </Insert>
            <Remove disp={off} onClick={Switch}>
              Remover
            </Remove>
          </FileDiv>

          <WebLabel>Perfil Linkedin</WebLabel>
          <MediaLinks>
            <Logo src={Linknd} alt="Linknd" />
            <InputUrl
              required
              {...register('linknd')}
              type="text"
              placeholder="URL"
            />
          </MediaLinks>

          <WebLabel>Website</WebLabel>
          <MediaLinks>
            <Logo src={Web} alt="Website" />
            <InputUrl
              required
              {...register('website')}
              type="text"
              placeholder="URL"
            />
          </MediaLinks>
          <BtnSubmit>
            <button>Enviar</button>
          </BtnSubmit>
        </Form>
      </FormContain>
    </Container>
  )
}
