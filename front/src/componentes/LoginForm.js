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

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired
}
