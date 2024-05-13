import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {

  const {user,logOutUser} = useContext(AuthContext);

  const handleSignOut = () => {
    logOutUser()
    toast.success('Logged out successfully')
    
  }

  const nav = <>
    <NavLink to='/'> <li>Home</li> </NavLink>
    <NavLink to='/rooms'> <li>Rooms</li> </NavLink>
    <NavLink to='/bookings'> <li>My Bookings</li> </NavLink>
    {!user && <NavLink to='register'> <li>Register</li> </NavLink>}
  
  </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="font-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {nav}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-semibold">
            {nav}
          </ul>
        </div>
        <div className="navbar-end">

        
    </div>

         {user ? <a onClick={handleSignOut} className="btn bg-[#FEA116] text-white">Log Out</a>: <Link to='/login'><a onClick={handleSignOut} className="btn bg-[#FEA116] text-white">Login</a> </Link> }
          <Toaster />
        </div>
      
    );
};

export default Navbar;