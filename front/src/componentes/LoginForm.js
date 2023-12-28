// import React from 'react'
// import Togglable from './Togglable.js'
import PropTypes from 'prop-types'

export default function LoginForm ({ handleSubmit, username, password, handleUsernameChange, handlePasswordChange, ...props }) {
  return (
        <form onSubmit={handleSubmit} className='login-form'>
          <input className='input'
            type='text'
            value={username}
            name='Username'
            placeholder='Username'
            onChange={handleUsernameChange}
          /><br />
          <input className='input'
            type='text'
            value={password}
            password={password}
            name='Password'
            placeholder='password'
            onChange={handlePasswordChange}
          /><br />
          <button>
            Login
          </button>
        </form>

  )
}
