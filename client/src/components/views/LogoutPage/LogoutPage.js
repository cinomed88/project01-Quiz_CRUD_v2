import { useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../../_actions/user_action'

function LogoutPage(props) {
  const dispatch = useDispatch("")

  useEffect(() => {
    dispatch(logoutUser()).then(res => {
      console.log(res.payload)
      if(!res.payload.isAuth) {
        props.history.push('/login')
      }
    })
  })

  return (
    <div>
    </div>
  )

}

export default withRouter(LogoutPage)
