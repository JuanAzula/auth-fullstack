// import React from 'react'
// import Togglable from './Togglable.js'
import PropTypes from 'prop-types'

export default function LoginForm ({ handleSubmit, ...props }) {
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

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string

}
