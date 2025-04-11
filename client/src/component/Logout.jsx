import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Authprovidor';

const Logout = () => {
  const { logout } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleLogout = () => {
    logout().then(() => {
      alert("Logout Sucessfully")
      navigate(from, { replace: true });
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
      <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
