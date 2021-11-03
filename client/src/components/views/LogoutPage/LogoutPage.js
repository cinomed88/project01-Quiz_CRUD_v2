import { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'

function LogoutPage() {

  let history = useHistory();

  useEffect(() => {
    axios.get('/api/v3/users/logout')
    .then(res => {
      console.log(res.data)
      if(res.data.logoutSuccess) {
        history.push('/login')
    }})
  })

  return (
    <div>
    </div>
  )

}

export default LogoutPage
