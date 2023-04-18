import ModalStyled from "./styled"
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import { IUserRegister } from '../../types'

const schema = yup.object({
    name: yup.string().required('Insira seu nome'),
    email: yup.string().email('Deve ser um email valido').required('Insira seu email'),
    password: yup.string().required('Insira sua senha'),
    phone_number: yup.string().required('Insira seu telefone')
})

const ModalRegister = ({ openModal, modal, modalAnimation }: any) => {

    const { register, handleSubmit, formState: { errors } } = useForm<IUserRegister>({
        resolver: yupResolver(schema)
    })

    const { userRegister } = useContext(AuthContext)

    return (
        <ModalStyled className={modal} >
            <form onSubmit={handleSubmit(userRegister)} className={modalAnimation} >
                <h1>REGISTER</h1>
                <div className=" input">
                    <label htmlFor="name"> Name </label>
                    <input id="name" type="text" placeholder="Digite seu E-mail"
                        {...register('name')} />
                    {errors.name?.message ? (<p>{errors.name?.message}</p>) : (<p></p>)}
                </div>
                <div className=" input">
                    <label htmlFor="email"> E-mail </label>
                    <input id="email" type="email" placeholder="Digite seu E-mail"
                        {...register('email')} />
                    {errors.email?.message ? (<p>{errors.email?.message}</p>) : (<p></p>)}
                </div>
                <div className=" input">
                    <label htmlFor="password"> Senha </label>
                    <input id="password" type="password" placeholder="Digite seu E-mail"
                        {...register('password')} />
                    {errors.password?.message ? (<p>{errors.password?.message}</p>) : (<p></p>)}
                </div>
                <div className=" input">
                    <label htmlFor="phone"> Telefone </label>
                    <input id="phone" type="string" placeholder="Digite seu E-mail"
                        {...register('phone_number')} />
                    {errors.phone_number?.message ? (<p>{errors.phone_number?.message}</p>) : (<p></p>)}
                </div>

                <div className="buttons">
                    <button className="button">Register</button>
                    Or
                    <button type="button" className="button" onClick={() => openModal()}>Login</button>
                </div>
            </form>
        </ModalStyled>
    )
}

export default ModalRegister