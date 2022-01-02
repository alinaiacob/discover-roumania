import React from 'react'
import './Home.css'
import Places from './Places';
const Home = () => {
    return (
        <div className='home'>
            <div className='home__left'>
              <h4>Discover </h4>
              <h1>Roumania</h1>
              <p>take a look at Roumania's breathtaking attractions</p>
              <button>Explore</button>
            </div>
            <div className='home__right'>
               <Places/>
               <div className='homeRight__PlacesPopular'>
                <h3>Well-known</h3>
                <h1>Places</h1>
            </div>
            </div>
            
          
        </div>
    )
}

export default Home
