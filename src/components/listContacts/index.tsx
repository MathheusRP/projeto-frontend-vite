import { useContext, useEffect, useState } from "react"
import ListContactStyled from "./style"
import { AiOutlineUserAdd } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import { AuthContext } from "../../contexts/AuthContext"
import AddContactModal from "../addContactModal"



const ListContacts = ({ contactList }: any) => {


    const [list, setList] = useState<any>(contactList)
    const [modal, setModal] = useState<string>('modalOff')

    const updateList = () => {
        useEffect(() => {
            setList(contactList)
        }, [])
    }

    updateList()

    const [focuss, setFocus] = useState('')
    const [contactId, setContact] = useState('')

    const selectContact = (id: string) => {
        setFocus(`teste${id}`)
        setContact(id)
        // console.log(focuss)
    }


    // const addContact = () => {
    //     const contact = {
    //         id: list.length + 1,
    //         name: `contato ${list.length + 1}`,
    //         email: `contato${list.length + 1}@dev.com`,
    //         phone_number: '11 95656-5656'
    //     }
    //     console.log('ok')
    //     setList([...list, contact])
    // }

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
        <ListContactStyled focuss={focuss}>
            <div className="header">
                <button onClick={() => setModal('modalOn')}><AiOutlineUserAdd /></button>
                <button ><AiFillEdit /></button>
                <button onClick={() => contactDelete(Number(focuss))}><AiFillDelete /></button>
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
        </ListContactStyled>
    )
}

export default ListContacts