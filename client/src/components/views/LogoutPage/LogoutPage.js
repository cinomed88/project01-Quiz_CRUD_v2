import { useEffect } from 'react'
// import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import axios from 'axios'

function LogoutPage(props) {

  // let history = useHistory();

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

export default withRouter(LogoutPage)
