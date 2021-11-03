import { useEffect } from 'react'
import axios from 'axios'

function LogoutPage(props) {

  useEffect(() => {
    axios.get('/api/v3/users/logout')
    .then(res => {
      console.log(res.data)
      if(res.data.logoutSuccess) {
        props.history.push('/login')
    }})
  })

  return (
    <div>
      
    </div>
  )
}

export default LogoutPage
