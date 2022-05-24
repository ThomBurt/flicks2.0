import React from 'react';

import { Link } from 'react-router-dom';

import { RiLockPasswordLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { FaUserFriends } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { BsHouseDoor } from 'react-icons/bs';
import { VscEdit } from 'react-icons/vsc';

import './Profilenav.css';



const ProfileNav = () => {
    return (
        <div className='main-div-updateProfile'>
            <div>
                <nav class="menu" tabindex="0">
                        <div class="smartphone-menu-trigger"></div>
                    <header class="avatar">
                            <img className='profile-img' src="https://ucarecdn.com/98a2c335-a1af-4262-bf9c-c8f76898f5f6/Untitleddesign.png" alt="profile-pic"/>
                        <h2>Thom Burt</h2>
                    </header>
                        <ul className='updateProfileUl'>

                            <li tabindex="0" className='updateProfileLi'>
                                <Link to="/my-profile" style={{color: 'black', textDecoration: 'none'}} onClick={event => window.location.href='/my-profile'}>
                                    <span>Profile</span> <span><CgProfile /></span>
                                </Link>
                            </li>

                            <li tabindex="0" className='updateProfileLi'>
                                <Link to="/update-profile" style={{color: 'black', textDecoration: 'none'}} onClick={event => window.location.href='/update-profile'}>
                                    <span>Update Profile</span> <span><VscEdit /></span>
                                </Link>
                            </li>

                            <li tabindex="0" className='updateProfileLi'>
                                <Link to="/history" style={{color: 'black', textDecoration: 'none'}} onClick={event => window.location.href='/history'}>
                                    <span>Experiences</span> <span><BsHouseDoor/></span>
                                </Link>
                            </li>

                            <li tabindex="0" className='updateProfileLi'>
                                <Link to="/forgot-password" style={{color: 'black', textDecoration: 'none'}} onClick={event => window.location.href='/forgot-password'}>
                                    <span>Password</span> <span><RiLockPasswordLine /></span>
                                </Link>
                            </li>

                            <li tabindex="0" className='updateProfileLi'>
                                <Link to="/friends" style={{color: 'black', textDecoration: 'none'}}  onClick={event => window.location.href='/friends'}>
                                    <span>Friends</span> <span><FaUserFriends /></span>
                                </Link>
                            </li>

                            <li tabindex="0" className='updateProfileLi'>
                                <Link to="/settings" style={{color: 'black', textDecoration: 'none'}} onClick={event => window.location.href='/settings'}>
                                    <span>Settings</span> <span><FiSettings/></span>
                                </Link>
                            </li>
                        </ul>
                </nav>
            </div>
        </div>
    )
}

export default ProfileNav;