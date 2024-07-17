import React from 'react';

function Cards() {
  return (
    <div className='Cards-container'>
        <div className='card'>
            <h2>Team Builder</h2>
            <p>
                Scans our talent network to create the
                optimal team for your project
            </p>
            <div className='logo-1'></div>
        </div>  
        <div className='card'>
            <h2>Supervisor</h2>
            <p>        
                Monitors activity to identify project
                roadblocks
            </p>
            <img src='../images' alt='a'/>
        </div>  
        <div className='card'>
            <h2>Calculator</h2>
            <p>
                Uses data from past projects to provide
                better delivery estimates
            </p>
            <img src='../images' alt='a'/>
        </div>  
        <div className='card'>
            <h2>Karma</h2>
            <p>            
                Regularly evaluates our talent to ensure
                quality

            </p>
        <img src='../images' alt='a'/>
        </div>  
    </div>
  )
}

export default Cards