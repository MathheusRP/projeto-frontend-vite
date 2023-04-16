import { createContext, useState } from 'react'
import Api from '../services/api'



interface IUserLogin {
    email: string
    password: string
}

interface IUserRegister {
    name: string
    email: string
    password: string
    phone_number: string
}

interface IContextProps {
    children: React.ReactNode;
}

interface IContact {
    id: number
    name: string
    email: string
    phone_number: string
    createdAt: string
}

interface IUserData {
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


export interface IAuthContext {
    userLogin(data: IUserLogin): void
    userRegister(data: IUserRegister): void
    userData: null | IUserData
    // setUserData: React.Dispatch<React.SetStateAction<IUserData | null>>;
    setUserData: any
    getUserData: any
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)


const AuthProvider = ({ children }: IContextProps) => {

    const [userData, setUserData] = useState<IUserData | null>(null)

    const userLogin = async (userData: IUserLogin) => {
        Api.post('/login', userData)
            .then((response) => {
                localStorage.setItem('userToken', response.data.token)
                Api.defaults.headers.authorization = `Bearer ${response.data.token}`;
                getUserData()

            })
            .catch((error) => {
                console.log(error)
            })
    }

    const userRegister = (userData: IUserRegister): void => {
        Api.post('/users', userData)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getUserData = async () => {
        const token = localStorage.getItem('userToken')
        Api.defaults.headers.authorization = `Bearer ${token}`;

        await Api.get('/contacts')
            .then((response) => {
                setUserData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <AuthContext.Provider value={{ userLogin, userRegister, userData, setUserData, getUserData }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider