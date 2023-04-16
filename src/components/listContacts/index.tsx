import { useContext, useEffect, useState } from "react"
import ListContactStyled from "./style"
import { AiOutlineUserAdd } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import { AuthContext } from "../../contexts/AuthContext"

const ListContacts = ({ contactList }: any) => {

    const [list, setList] = useState<any>(contactList)

    const updateList = () => {
        useEffect(() => {
            setList(contactList)
        }, [])
    }

    updateList()

    const [focuss, setFocus] = useState('')

    const teste = (id: string) => {
        setFocus(id)
        // console.log(focuss)
    }


    const addContact = () => {
        const contact = {
            id: list.length + 1,
            name: `contato ${list.length + 1}`,
            email: `contato${list.length + 1}@dev.com`,
            phone_number: '11 95656-5656'
        }

        setList([...list, contact])
    }


    return (
        <ListContactStyled focuss={focuss}>
            <div className="header">
                <button onClick={() => addContact()}><AiOutlineUserAdd /></button>
                <button ><AiFillEdit /></button>
                <button><AiFillDelete /></button>
            </div>

            <div className="containerList">
                <ul>
                    {
                        contactList ?
                            (
                                contactList.map((contact: any) => {
                                    return (
                                        <li id={`teste${contact.id}`} onClick={() => teste(`teste${contact.id}`)}>
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
        </ListContactStyled>
    )
}

export default ListContacts