import { createContext, useEffect, useState } from 'react'
import Api from '../services/api'
import { useNavigate } from 'react-router-dom'



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

interface ICreateContact {
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
    loading: boolean
    addContact: any
    deleteContact: any
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)


const AuthProvider = ({ children }: IContextProps) => {

    const [userData, setUserData] = useState<IUserData | null>(null)
    const [loading, setLoding] = useState<boolean>(true)

    const navigate = useNavigate()


    useEffect(() => {
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

                // .then((response) => {
                //     setUserData(response.data)
                // })
                // .catch((error) => {
                //     console.log(error)
                // })

            }
            setLoding(false)
        }
        console.log('ok')
        loadUser()
    }, [])


    const userLogin = async (userData: IUserLogin) => {
        Api.post('/login', userData)
            .then((response) => {
                localStorage.setItem('userToken', response.data.token)
                Api.defaults.headers.authorization = `Bearer ${response.data.token}`;
                navigate(`/dashboard`, { replace: true });

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

    const addContact = async (data: ICreateContact) => {
        const token = localStorage.getItem('userToken')
        try {
            Api.defaults.headers.authorization = `Bearer ${token}`;
            return { data } = await Api.post('/contacts', data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const deleteContact = async (id: number) => {
        const token = localStorage.getItem('userToken')
        try {
            Api.defaults.headers.authorization = `Bearer ${token}`;
            await Api.delete(`/contacts/${id}`)
        }
        catch (error) {
            console.log(error)
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
                deleteContact
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider