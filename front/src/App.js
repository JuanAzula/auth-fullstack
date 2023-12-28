import Admin from './componentes/admin/Admin'
import Menu from './componentes/Menu'
import Pie from './componentes/Pie'
import Notification from './componentes/Notification.js'

import LoginService from './servicios/LoginService'
import { MENUS } from './constantes/menus'
import { REDES } from './constantes/redes'
import { useEffect, useState } from 'react'
import { ProductoService, TokenService } from './servicios/ProductoService'

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
      console.log('después del try', user)

      console.log('USER', user)
      console.log('USER TOKEN', user.token)
      console.log('Username', user.username)
      console.log('Password antes de setToken', user.password)

      window.localStorage.setItem(
        'LoggedProductAppUser', JSON.stringify(user)
      )

      TokenService.setToken(user.token)
      console.log('USER TOKEN después de setToken', user.token)

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

  const renderLoginForm = () => {
    return (
      <form onSubmit={handleLogin} className='login-form'>
        <input className='input'
          type='text'
          value={username}
          name='Username'
          placeholder='Username'
          onChange={({ target }) => setUsername(target.value)}
        /><br />
        <input className='input'
          type='text'
          value={password}
          password={password}
          name='Password'
          placeholder='password'
          onChange={({ target }) => setPassword(target.value)}
        /><br />
        <button>
          Login
        </button>
      </form>

    )
  }

  const renderCreateProductForm = () => {
    return (
      <main className="container">
        <div>
          <button onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>

          <Admin productos={productos} setProductos={setProductos} />

        </main>

    )
  }

  return (
    <>
      <Menu menus={MENUS} />
      <Notification message={errorMessage} />

      {
        user
          ? renderCreateProductForm()
          : renderLoginForm()
      }

      {/* { user === null && renderLoginForm()} */}
      {/* <form onSubmit={handleLogin}>
        <input
          type='text'
          value={username}
          name='Username'
          placeholder='Username'
          onChange={({ target }) => setUsername(target.value)}
        /><br />
        <input
          type='text'
          value={password}
          password={password}
          name='Password'
          placeholder='password'
          onChange={({ target }) => setPassword(target.value)}
        /><br />
        <button>
          Login
        </button>
      </form> */}

      {/* { user !== null && renderCreateProductForm()} */}
      {/* <main className="container"> */}
        {/* <Fichas productos={PRODUCTOS} /> */}
        {/* <Admin productos={productos} setProductos={setProductos} /> */}
      {/* </main> */}
      {/* <Anuncios anuncios={ANUNCIOS} /> */}
      <Pie redes={ REDES } />
    </>
  )
}
