import { useContext, useState } from "react"
import ContactModalStyled from "./styled"
import { AuthContext } from "../../contexts/AuthContext"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"

const schema = yup.object({
    name: yup.string().optional(),
    email: yup.string().email().optional(),
    phone_number: yup.string().optional()
})

interface ICreateContact {
    name?: string
    email?: string
    phone_number?: string
}

const UpdateContactModal = ({ modal, setModal, list, setList, contactId }: any) => {

    const { register, handleSubmit, formState: { errors } } = useForm<ICreateContact>({
        resolver: yupResolver(schema)
    })

    const { updateContact } = useContext(AuthContext)

    const createContact = async (data: ICreateContact) => {

        let newdata: ICreateContact = {}

        if (data.name) {
            newdata['name'] = data.name
        }
        if (data.email) {
            newdata['email'] = data.email
        }
        if (data.phone_number) {
            newdata['phone_number'] = data.phone_number
        }

        const contact = await updateContact(newdata, contactId)
        if (contact) {
            setTimeout(() => {
                const newList = list.filter((contact: any) => {
                    if (contact.id != contactId) {
                        return contact
                    }
                })
                setList([...newList, contact])
                setModal('modalOff')
            }, 500)


        }
    }

    return (
        <ContactModalStyled className={modal}>
            <div className="modalContainer">
                <form onSubmit={handleSubmit(createContact)}>
                    <button type="button" onClick={() => setModal('modalOff')} className="closeButton">X</button>
                    <h2>Atualizar contato</h2>
                    <div className="input">
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Nome do contato"
                            {...register('name')} />
                    </div>
                    <div className="input">
                        <label htmlFor="">E-mail</label>
                        <input type="text" placeholder="E-mail do contato"
                            {...register('email')} />
                    </div>
                    <div className="input">
                        <label htmlFor="">Telefone</label>
                        <input type="text" placeholder="Telefone do contato"
                            {...register('phone_number')} />
                    </div>
                    <button className="buttonAdd" type="submit">Atualizar</button>
                </form>
            </div>
        </ContactModalStyled>
    )
}

export default UpdateContactModal
