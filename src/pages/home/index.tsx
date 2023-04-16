import HomeStyled from '../../style/homeStyled'
import Login from '../../components/login'
import ModalRegister from '../../components/modalRegister'
import { useState } from 'react'

const Home = () => {
    const [modal, setModal] = useState<string>('modalOff')
    const [modalContainer, setModalContainer] = useState<string>('closeModal')

    const openModal = () => {

        if (modal == 'modalOff') {
            setModal('modalOn')
            setModalContainer('openModal')
        }
        else if (modal == 'modalOn') {
            setModal('modalOff')
            setTimeout(() => {
                setModalContainer('closeModal')
            }, 1000)
        }
    }

    return (
        <HomeStyled>
            <div className='container'>
                <Login openModal={openModal} />
                <ModalRegister modalAnimation={modal} modal={modalContainer} openModal={openModal} />
            </div>
        </HomeStyled>
    )

}

export default Home