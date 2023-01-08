import React, {useState} from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { clearStore, toggleSidebar } from '../features/user/userSlice';


const Navbar = () => {

  const {user} = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  const [showLogout, setShowLogout] = useState(false);

  return (

    <Wrapper>

        <div className="nav-center">

            <button 
                className='toggle-btn' 
                type='button'
                onClick={toggle}
            >
                <FaAlignLeft/>
            </button>

            <div>
                <Logo/>
                <h3 className="logo-text">dashboard</h3>
            </div>

            <div className="btn-container">

                <button 
                    type='button' 
                    className='btn'
                    onClick={() => setShowLogout(!showLogout)}
                >
                    <FaUserCircle/>
                    {user?.name}
                    <FaCaretDown/>
                </button>

                <div className={showLogout? "dropdown show-dropdown" : "dropdown"}>
                    <button 
                        className="dropdown-btn"
                        type='button'
                        onClick={() => dispatch(clearStore('Logging Out...'))}
                    >
                        Logout
                    </button>
                </div>

            </div>

        </div>

    </Wrapper>

  )

};

export default Navbar;