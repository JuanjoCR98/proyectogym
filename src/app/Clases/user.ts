export interface User {
    id?: number
    email?: string
    password?: string
    usuario?: string
    nombre?: string
    apellidos?: string
    fechanac?: Date
    altura?: number
    peso?: number
    foto?: string
    imc?: number
    rol?: string

}

export interface accesoUsuario{
    email:string
    password:string
}
