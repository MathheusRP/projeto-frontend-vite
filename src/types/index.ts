export interface IUserLogin {
    email: string
    password: string
}

export interface IUserRegister {
    name: string
    email: string
    password: string
    phone_number: string
}

export interface IContact {
    id: number
    name: string
    email: string
    phone_number: string
    createdAt: string
}

export interface ICreateContact {
    name: string
    email: string
    phone_number: string
}

export interface IUpdateContact {
    name?: string
    email?: string
    phone_number?: string
}

export interface IUserData {
    id: number
    name: string
    email: string
    phone_number: string
    is_admin: boolean
    createdAt: string
    updatedAt: string
    deletedAt: null | string
    contact: IContact[]
}