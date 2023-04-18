import LoginStyled from "./styled";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import { IUserLogin } from '../../types'

const schema = yup.object({
    email: yup.string().email('Deve ser um email valido').required('Insira seu email'),
    password: yup.string().required('Insira sua senha')
})

const Login = ({ openModal }: any) => {

    const { register, handleSubmit, formState: { errors } } = useForm<IUserLogin>({
        resolver: yupResolver(schema)
    })

    const { userLogin } = useContext(AuthContext)

    return (
        <LoginStyled onSubmit={handleSubmit(userLogin)}>
            <h1>LOGIN</h1>
            <div className=" input">
                <label htmlFor="email"> Seu E-mail </label>
                <input type="text" placeholder="Digite seu E-mail"
                    {...register('email')} />
                {errors.email?.message ? (<p>{errors.email?.message}</p>) : (<p></p>)}
            </div>
            <div className=" input">
                <label htmlFor="email"> Sua senha </label>
                <input type="text" placeholder="Digite seu E-mail"
                    {...register('password')} />
                {errors.password?.message ? (<p>{errors.password?.message}</p>) : (<p></p>)}
            </div>

            <div className="buttons">
                <button type="submit">Login</button>
                Or
                <button type="button" onClick={() => openModal()} >Register</button>
            </div>
        </LoginStyled>
    )
}

export default Login