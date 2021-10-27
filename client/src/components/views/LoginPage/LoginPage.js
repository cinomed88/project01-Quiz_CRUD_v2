import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'
import { withRouter } from 'react-router-dom';

function LoginPage(props) {

  const dispatch = useDispatch("")
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const onEmailHandler = e => {
    setEmail(e.target.value)
  }
  const onPasswordHandler = e => {
    setPasword(e.target.value)
  }
  const onSubmitHandler = e => {
    e.preventDefault()

    const body= {
      email: email,
      password: password
    }
    
    dispatch(loginUser(body))
      .then(res => {
        if(res.payload.loginSuccess) {
          props.history.push('/')
        } 
      })
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
                  width: '100%', height: '100vh' }}>

      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <br />
        <button> Login </button>
      </form>

    </div>
  )
}

export default withRouter(LoginPage)
