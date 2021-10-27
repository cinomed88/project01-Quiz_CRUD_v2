import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/user_action'
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {
  
  const dispatch = useDispatch("")
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPasword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = e => {
    setEmail(e.target.value)
  }
  const onNameHandler = e => {
    setName(e.target.value)
  }
  const onPasswordHandler = e => {
    setPasword(e.target.value)
  }
  const onConfirmPasswordHandler = e => {
    setConfirmPassword(e.target.value)
  }
  const onSubmitHandler = e => {
    e.preventDefault()

    if(password !== confirmPassword) {
      return alert('The passwords are not coincident')
    }

    const body= {
      email: email,
      password: password,
      name: name
    }
    
    dispatch(registerUser(body))
      .then(res => {
        if(res.payload.registerSuccess) {
          props.history.push('/login')
        } 
      })
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
                  width: '100%', height: '100vh' }}>

      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />
        <label>Name</label>
        <input type="text" value={name} onChange={onNameHandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <label>Confirm Password</label>
        <input type="password" value={confirmPassword} onChange={onConfirmPasswordHandler} />
        <br />
        <button> Login </button>
      </form>

    </div>
  )
}

export default withRouter(RegisterPage)