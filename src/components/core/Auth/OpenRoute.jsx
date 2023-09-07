// This will prevent authenticated users from accessing this route
// means that when the User is logged in and then he/she is trying to access the /login or /singup route then the below logic will prevent them and navigate them to their dashboard


import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function OpenRoute({ children }) {
  const { token } = useSelector((state) => state.auth)

  if (token === null) {
    return children
  } else {
    return <Navigate to="/dashboard/my-profile" />
  }
}

export default OpenRoute