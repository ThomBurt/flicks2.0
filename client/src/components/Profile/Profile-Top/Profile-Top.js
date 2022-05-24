import React from 'react'

import { RiPencilFill } from 'react-icons/ri';

import './profile-top.css';


const ProfileTop = () => {
    return (
        <div className='main-my-profile-div'>
            <div className='my-profile-main'>
                <div className='top-profile-bar'>
                    <div className='image-and-header'>
                        <div>
                            <img className="my-profile-img" src="https://ucarecdn.com/98a2c335-a1af-4262-bf9c-c8f76898f5f6/Untitleddesign.png" alt="profile-pic"></img>
                        </div>
                        <div> 
                            <div>
                                <h1>Thom Burt</h1>
                                <h5>1.5k friends</h5>
                                <div>
                                    <img className='friend-profile-img' src="https://via.placeholder.com/40" alt="friends"></img>
                                    <img className='friend-profile-img' src="https://via.placeholder.com/40" alt="friends"></img>
                                    <img className='friend-profile-img' src="https://via.placeholder.com/40" alt="friends"></img>
                                    <img className='friend-profile-img' src="https://via.placeholder.com/40" alt="friends"></img>
                                    <img className='friend-profile-img' src="https://via.placeholder.com/40" alt="friends"></img>
                                </div>
                                <p>"Probably thinking of pasta 90% of the day!"</p>
                            </div>
                        </div>
                    </div>
                    <div className='overall-button-div'>
                        <div className='button-div-header'>
                            <button className='button-edit-profile'     onClick={(e) => {
                                e.preventDefault();
                                window.location.href='/update-profile';
                                }}><span><RiPencilFill/> </span>Edit Profile
                            </button>
                            <p>Been 'Flicks-ing' since 2022</p>
                        </div>
                    </div>

                </div>
             </div>
        </div>
    )
}

export default ProfileTop;