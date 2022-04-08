import axios, { AxiosInstance } from 'axios';
import { CountyProps, StateProps } from './receive';
import { getCountySend } from './send';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const apiGov = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/',
});

interface dataProps {
  fullName?: string
  email?: string
  phoneNumber?: number
  state?: string
  city?: string
  linknd?: string
  website?: string
  curriculum?: any
}

const apiService = async (api: AxiosInstance, apiGov: AxiosInstance) => ({
  getData: async ({ fullName, email, phoneNumber, state, city, linknd, website, curriculum}: dataProps) => {
    let data = null
    let error = null
    try {
      data = await api.post(`dados`,{fullName, email, phoneNumber, state, city, linknd, website, curriculum}, {
        headers:{
          'Content-Type': 'application/json',
        },
      })
    }
    catch (err: any) {
      error = err
    }
    return {
      data: data?.data, error: error
    }
  },
  getCounty: async ({ uf }: getCountySend) => {
  let data = null
  let error = null
  try {
    data = await apiGov.get<CountyProps[]>(`localidades/estados/${uf}/municipios`)
  }
  catch (err: any) {
    error = err
  }
  return {
    data: data?.data, error: error
  }
},
getState: async () => {
  let data = null
  let error = null
  try {
    data = await apiGov.get<StateProps[]>(`localidades/estados/`)
  }
  catch (err: any) {
    error = err
  }
  return {
    data: data?.data, error: error
  }
},
getVagas: async ({ id }: { id: string }) => {
  let data = null
  let error = null
  try {
    data = await api.get(`vagas/`, { params: { id } })
  }
  catch (err: any) {
    error = err
  }
  return {
    data: data?.data, error: error
  }
},
})

export default { services: apiService(api, apiGov) }