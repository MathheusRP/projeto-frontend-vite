import DashboardStyled from "./styled"
import { ImExit } from 'react-icons/im'
import { CgProfile } from 'react-icons/cg'

import { MdOutlineContactPhone } from 'react-icons/md'
import ListContacts from "../../components/listContacts"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const Dashboard = () => {

    const { userData, getUserData } = useContext(AuthContext)

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <DashboardStyled>
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

        </DashboardStyled>
    )
}

export default Dashboard