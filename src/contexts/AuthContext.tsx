import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react'
import Api from '../services/api'
import { useNavigate } from 'react-router-dom'
import { AxiosResponse } from 'axios'
import { IUserLogin, IUserRegister, IContact, ICreateContact, IUpdateContact, IUserData } from '../types'
import { notify_success, notify_error } from '../components/toast'

interface IContextProps {
    children: React.ReactNode;
}

export interface IAuthContext {
    userLogin(data: IUserLogin): void
    userRegister(data: IUserRegister): void
    userData: null | IUserData
    setUserData: Dispatch<SetStateAction<IUserData | null>>
    loading: boolean
    addContact: (data: ICreateContact) => Promise<AxiosResponse<IContact> | undefined>
    updateContact: (contactData: IUpdateContact, id: string) => Promise<IContact>
    deleteContact: (id: string) => Promise<void>
    loadUser: () => Promise<void>
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)


const AuthProvider = ({ children }: IContextProps) => {

    const [userData, setUserData] = useState<IUserData | null>(null)
    const [loading, setLoding] = useState<boolean>(true)

    const navigate = useNavigate()

    async function loadUser() {
        const token = localStorage.getItem('userToken')

        if (token) {
            Api.defaults.headers.authorization = `Bearer ${token}`;
            try {
                const { data } = await Api.get('/contacts')

                setUserData(data)
            }
            catch (error) {
                console.log(error)
            }
        }
        setLoding(false)
    }

    useEffect(() => {
        loadUser()
    }, [])

    const userLogin = async (userData: IUserLogin) => {
        Api.post('/login', userData)
            .then((response) => {
                localStorage.setItem('userToken', response.data.token)
                notify_success('Login')
                navigate('/dashboard', { replace: true });
            })
            .catch((error) => {
                notify_error(error.response.data.message || 'Erro')
            })
    }

    const userRegister = (userData: IUserRegister): void => {
        Api.post('/users', userData)
            .then((response) => {
                notify_success('Conta criada')
                setTimeout(() => {
                    location.reload()
                }, 1500)
            })
            .catch((error) => {
                notify_error(error.response.data.message || 'Erro')
            })
    }

    const addContact = async (data: ICreateContact) => {
        const token = localStorage.getItem('userToken')
        try {
            Api.defaults.headers.authorization = `Bearer ${token}`;
            return await Api.post('/contacts', data)
        }
        catch (error) {
            notify_error('Erro')
        }
    }

    const updateContact = async (contactData: any, id: string) => {

        const token = localStorage.getItem('userToken')
        try {
            Api.defaults.headers.authorization = `Bearer ${token}`;
            const response = await Api.patch(`/contacts/${id}`, contactData)
            return response.data
        }
        catch (error) {
            notify_error('Erro')
        }
        console.log(id)
    }

    const deleteContact = async (id: string) => {
        const token = localStorage.getItem('userToken')
        try {
            Api.defaults.headers.authorization = `Bearer ${token}`;
            await Api.delete(`/contacts/${id}`)
        }
        catch (error) {
            notify_error('Erro')
        }
    }

    return (
        <AuthContext.Provider value={
            {
                userLogin,
                userRegister,
                userData,
                setUserData,
                loading,
                addContact,
                updateContact,
                deleteContact,
                loadUser
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider