import { useContext, useState } from "react"
import ContactModalStyled from "./styled"
import { AuthContext } from "../../contexts/AuthContext"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import { ICreateContact, IContact } from '../../types'
import { AxiosResponse } from "axios"

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone_number: yup.string().required()
})

const AddContactModal = ({ modal, setModal, list, setList }: any) => {

    const { register, handleSubmit, formState: { errors } } = useForm<ICreateContact>({
        resolver: yupResolver(schema)
    })

    const { addContact } = useContext(AuthContext)

    const createContact = async (data: ICreateContact) => {
        const newContact: AxiosResponse<IContact, any> | undefined = await addContact(data)
        if (newContact?.data) {
            setTimeout(() => {
                setList([...list, newContact.data])
                setModal('modalOff')
            }, 500)
        }
    }

    return (
        <ContactModalStyled className={modal}>
            <div className="modalContainer">
                <form onSubmit={handleSubmit(createContact)}>
                    <button type="button" onClick={() => setModal('modalOff')} className="closeButton">X</button>
                    <h2>Adicionar contato</h2>
                    <div className="input">
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Nome do contato"
                            {...register('name')} />
                    </div>
                    <div className="input">
                        <label htmlFor="">E-mail</label>
                        <input type="text" placeholder="Nome do contato"
                            {...register('email')} />
                    </div>
                    <div className="input">
                        <label htmlFor="">Telefone</label>
                        <input type="text" placeholder="Nome do contato"
                            {...register('phone_number')} />
                    </div>
                    <button className="buttonAdd" type="submit">Adicionar</button>
                </form>
            </div>
        </ContactModalStyled>
    )
}

export default AddContactModal
