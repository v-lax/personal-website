import React from 'react';
import Hero from '../components/hero.js';


function HomePage(props) {

    return(
        <Hero Title={props.Title} Subtitle={props.Subtitle}/>
    );

}

export default HomePage;