import Menu from './componentes/Menu'
import Pie from './componentes/Pie'
import Notification from './componentes/Notification.js'

import LoginService from './servicios/LoginService'
import { MENUS } from './constantes/menus'
import { REDES } from './constantes/redes'
import { useEffect, useState } from 'react'
import { ProductoService, TokenService } from './servicios/ProductoService'
import LoginForm from './componentes/LoginForm.js'
import ProductForm from './componentes/ProductForm.js'
import Togglable from './componentes/Togglable.js'

export default function App () {
  const [productos, setProductos] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function pedirProductos () {
      const productos = await ProductoService.getProductos()
      setProductos(productos)
    }

    pedirProductos()
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('LoggedProductAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      TokenService.setToken(user.token)
    }
  }, [])

  const handleLogout = () => {
    window.localStorage.removeItem('LoggedProductAppUser')
    setUser(null)
    TokenService.setToken(user.token)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('THIS IS SUBMIT')
    try {
      const user = await LoginService.LoginUser({
        username,
        password
      })

      window.localStorage.setItem(
        'LoggedProductAppUser', JSON.stringify(user)
      )

      TokenService.setToken(user.token)

      setUser(user)
      setUsername('')
      setPassword('')
      console.log('USER', user)
      console.log('USER TOKEN', user.token)
      console.log('Username', user.username)
      console.log('Password', user.password)
    } catch (e) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <>
      <Menu menus={MENUS} />
      <Togglable>
      <Notification message={errorMessage} />
      </Togglable>
      {
        user
          ? <ProductForm
              handleLogout={handleLogout}
              productos={productos}
              setProductos={setProductos}
              />
          : <LoginForm
              username={username}
              password={password}
              handleSubmit={handleLogin}
              handleUsernameChange={({ target }) => setUsername(target.value)}
              handlePasswordChange={({ target }) => setPassword(target.value)}
          />
      }
      <Pie redes={ REDES } />
    </>
  )
}
