import React from 'react';

import HistoryExperience from '../../components/History/HistoryExperience';

import './History.css';


const History = () => {
    return(
        <div>
           <div className='mainHistoryBG'>
                <div className='mainContainerHistory'>
                    <div className='historyTitle'>
                        <h1>Your History</h1>
                    </div>

                    <div className='experiencesContainer'> 
                        <HistoryExperience />
                    </div>
                </div>

           </div>
        </div>
    )
}

export default History;