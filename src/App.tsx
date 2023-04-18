import AuthProvider from './contexts/AuthContext'
import GlobalStyled from './style/globalStyled'
import Rotas from "./routes"
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <GlobalStyled />
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </>
  )

}

export default App


