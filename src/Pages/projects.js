import React from 'react';
import Hero from '../components/hero.js';
import Carasoul from '../components/Carasoul.js';



function ProjectsPage(props) {

    return(
        <div>
            <Hero Title={props.Title} Subtitle={props.Subtitle}/>
            <Carasoul />
        </div>  
    );

}

export default ProjectsPage;