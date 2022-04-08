export interface StateProps {
  id: number
  nome: string
  sigla: string
  regiao: { id: number, nome:string, sigla:string }
}

export interface CountyProps {
  id: number
  nome: string
  mesorregiao: { id:number, nome:string, UF: StateProps}
}