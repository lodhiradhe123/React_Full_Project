import {Navigate,Outlet} from 'react-router-dom'

function PrivateComponent() {
    const auth = localStorage.getItem("user")
  return (
    <div>
        {auth?<Outlet/>:<Navigate to="/signup" />}
        
    </div>
  )
}

export default PrivateComponent