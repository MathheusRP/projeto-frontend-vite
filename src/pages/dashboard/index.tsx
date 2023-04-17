import DashboardStyled from "./styled"
import { ImExit } from 'react-icons/im'
import { CgProfile } from 'react-icons/cg'

import { MdOutlineContactPhone } from 'react-icons/md'
import ListContacts from "../../components/listContacts"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"

import { Navigate } from "react-router-dom"

import AddContactModal from "../../components/addContactModal"

const Dashboard = () => {

    const { userData, loading } = useContext(AuthContext)

    // useEffect(() => {
    //     getUserData()
    // }, [])

    if (loading) {
        return (
            <DashboardStyled>

            </DashboardStyled>
        )
    }

    return (
        <>
            <DashboardStyled>
                {
                    userData ?
                        (
                            <section className="container">
                                <header>
                                    <h1>{userData?.name}</h1>
                                </header>
                                <section className="display">
                                    <ListContacts contactList={userData?.contact} />
                                </section>
                                <div className="buttons">
                                    <button> <ImExit /> </button>
                                    <button> <CgProfile /> </button>
                                    <button> <MdOutlineContactPhone /> </button>
                                </div>
                            </section>

                        )
                        :
                        (

                            <Navigate to='/' />

                        )
                }


            </DashboardStyled>
        </>
    )
}

export default Dashboard