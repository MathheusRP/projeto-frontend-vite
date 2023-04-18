import { useContext, useEffect, useState } from "react"
import ListContactStyled from "./style"
import { AiOutlineUserAdd } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import { AuthContext } from "../../contexts/AuthContext"
import AddContactModal from "../addContactModal"
import UpdateContactModal from "../updateContactModal"


const ListContacts = ({ contactList }: any) => {
    const [list, setList] = useState<any>(contactList)
    const [modal, setModal] = useState<string>('modalOff')
    const [updateModal, setUpdateModal] = useState<string>('modalOff')

    const updateList = () => {
        useEffect(() => {
            setList(contactList)
        }, [contactList])
    }

    updateList()

    const [contactFocus, setFocus] = useState('')
    const [contactId, setContact] = useState<string>('')

    const selectContact = (id: string) => {
        setFocus(`teste${id}`)
        setContact(id)
    }

    const { deleteContact } = useContext(AuthContext)

    const contactDelete = () => {

        if (contactId) {
            deleteContact(contactId)

            const newList = list.filter((contact: any) => {
                if (contact.id != contactId) {
                    return contact
                }
            })
            setList([...newList])
        }
    }

    return (
        <ListContactStyled contactFocus={contactFocus}>
            <div className="header">
                <button onClick={() => setModal('modalOn')}><AiOutlineUserAdd /></button>
                <button onClick={() => setUpdateModal('modalOn')} ><AiFillEdit /></button>
                <button onClick={() => contactDelete()}><AiFillDelete /></button>
            </div>

            <div className="containerList">
                <ul>
                    {
                        list ?
                            (
                                list.map((contact: any) => {
                                    return (
                                        <li id={`teste${contact.id}`} onClick={() => selectContact(contact.id)}>
                                            <h3>{contact.name}</h3>
                                            <p>E-mail: {contact.email}</p>
                                            <p>Telefone: {contact.phone_number}</p>
                                        </li>
                                    )
                                })
                            )
                            :
                            (
                                <></>
                            )
                    }
                </ul>
            </div>
            <AddContactModal modal={modal} setModal={setModal} setList={setList} list={list} />
            <UpdateContactModal modal={updateModal} setModal={setUpdateModal} setList={setList} list={list} contactId={contactId} />

        </ListContactStyled>
    )
}

export default ListContacts