import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"

// react tooltip
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {
            console.log('user logged out successfully.')
        })
        .catch(error => {
            console.log(error)
        })
    }

    const navlink = <>
            <li><NavLink to='/'>Home</NavLink> </li>
            <li><NavLink to='/all-tourist-spot'>All Tourists Spot</NavLink> </li>
            <li><NavLink to='/add-tourist-spot'>Add Tourists Spot</NavLink></li>
            <li><NavLink to='/my-list'>My List</NavLink></li>
    </>
  return (
    <>
        <div className="p-5">
            {/* navbar start */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlink}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl"><p>Dream<span className="text-accent">Tour</span></p></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end space-x-5">
                    {
                        user ? <>
                            <div className="">
                                <a className="my-anchor-element">
                                    <div className="p-2">
                                        <img className="rounded-full w-12 h-12" src={user.photoURL} alt="" />
                                    </div>
                                </a>
                                <Tooltip anchorSelect=".my-anchor-element" place="bottom">
                                    {user.displayName}
                                </Tooltip>
                            </div>
                            <a onClick={handleLogOut} className="btn btn-sm btn-accent">Sign Out</a>
                        </>
                        :
                        <>
                            <NavLink to='/login'>Login</NavLink>
                            <NavLink to='/register'>Register</NavLink>
                        </>
                    }
                    
                </div>
            </div>
            {/* navbar end */}
        </div>
    </>
  )
}

export default Header