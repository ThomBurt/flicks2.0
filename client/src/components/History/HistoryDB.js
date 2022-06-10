import React, { useState, useEffect } from 'react';

import './HistoryExperience.css';

//import { useQuery } from "@apollo/client";

//import { PROFILE_W_EXPERIENCES } from '../../utils/queries';


const HistoryExperience = (props) => {

    //const {data} = useQuery(PROFILE_W_EXPERIENCES);
    console.log(props)
    // const experiences = props.experience.experiences;


    const [movieValues, setMovieValues] = useState({
        title: '',
        plot: '',
        image_url: '',
        year: '',
        streaming: ''
    });
    const [restaurantValues, setRestaurantValues] = useState({
        name: '',
        rating: '',
        image_url: '',
        locationAddress: '',
        locationCity: '',
        locationState: '',
        locationZip: '',
        url: ''
    });
    const [drinkValues, setDrinkValues] = useState({
        name: '',
        description: '',
        image_url: '',
    });

    // useEffect(()=> {
    //     if (data) {
    //        // console.log(data.profile)
    //         setValues({
    //             username: data.profile.username,
    //             firstName: data.profile.firstName,
    //             lastName: data.profile.lastName,
    //             email: data.profile.email,
    //             images: data.profile.images,
    //             headline: data.profile.headline,
    //             createdAt: data.profile.createdAt
    //         });
    //     }
    // }, [data]);



    return(
        <div className='experience'>
            <div className='createdAtHeading'>
                <h3>3rd June 2022</h3>
            </div>
            <div className='selection-container'> 
                 <div className='selection-div'>
                      <div>
                        <h4>
                       
                        </h4>
                      </div>
                      <div>
                          <img className="moviePosterHistory" src="" alt="movieposter"></img>
                      </div>
                 </div>

                <div className='selection-div'>
                      <h4>
                        
                      </h4>
                      <div>
                          <img className='restaurantHistoryImage' src="" alt="restaurantpic"></img>
                      </div>
                </div>

                <div className='selection-div'>
                    <div>
                        <h4>
                          
                        </h4>
                        <div>
                          <img className='drinkHistoryImage' src="" alt="drinkpic"></img>
                      </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HistoryExperience;