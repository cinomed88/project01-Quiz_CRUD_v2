import React, { useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

function LandingPage(props) {

  // useEffect(() => {
  //   axios.get('/api/v3/hello')
  //   .then( res => console.log(res.data))
  // }, [])

  const onLogoutHandler = () => {
    axios.get('/api/v3/users/logout')
      .then(res => {
        console.log(res.data)
        if(res.data.logoutSuccess) {
          props.history.push('/login')
      }})
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
                  width: '100%', height: '100vh' }}>
      <h1>Landing page</h1>
      <br/>
      <div>
        <button onClick={onLogoutHandler}>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default withRouter(LandingPage)
