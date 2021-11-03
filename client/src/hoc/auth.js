import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {
  /*option:
    null -> anyone
    true -> only login users
    false -> only users who didnt login yet
  */
  function AuthenticationCheck(props){

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(authUser()).then(res => {
        // did not login
        if(!res.payload.isAuth){
          if(option){
            props.history.push('/login')
          }
        } else {
        // did login
          if(adminRoute && !res.payload.isAdmin) {
            // The route requires admin role, but user dont have admin role 
            props.history.push('/')
          } else {
            // The route is for only users who didnt login
            if (!option) {
              props.history.push('/')
            }
          }
        }
      })

    }, [])

    return <SpecificComponent />
  }

  return AuthenticationCheck
}