import DashboardStyled from "./styled"
import { ImExit } from 'react-icons/im'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineContactPhone } from 'react-icons/md'
import ListContacts from "../../components/listContacts"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Profile from "../../components/profile"

const Dashboard = () => {
    const navigate = useNavigate()

    const { userData, loading, loadUser } = useContext(AuthContext)

    const [display, setDisplay] = useState<string>('displayOff')

    useEffect(() => {
        loadUser()
    }, [])

    const exit = () => {
        localStorage.setItem('userToken', '')
        navigate('/', { replace: true })
    }

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
                    userData ? (
                        <section className="container">
                            <header>
                                <h1>{userData?.name}</h1>
                            </header>
                            <section className="display">
                                <ListContacts contactList={userData?.contact} />
                                <Profile userData={userData} display={display} />
                            </section>
                            <div className="buttons">
                                <button onClick={() => exit()}> <ImExit /> </button>
                                <button onClick={() => setDisplay('displayOn')}> <CgProfile /> </button>
                                <button onClick={() => setDisplay('displayOff')}> <MdOutlineContactPhone /> </button>
                            </div>
                        </section>
                    )
                        :
                        (
                            <h1>Error</h1>
                        )
                }

            </DashboardStyled>
        </>
    )
}

export default Dashboard