import Home from "./pages/home"
import AuthProvider from './contexts/AuthContext'
import GlobalStyled from './style/globalStyled'
import Rotas from "./routes"

function App() {

  return (
    <>
      <GlobalStyled />
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </>
  )

}

export default App


