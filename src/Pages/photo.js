import React from 'react';
import Hero from '../components/hero.js';
import Gallery from "react-photo-gallery";
import { gallery_photos } from "../components/gallery_photos.js";
import { render } from "react-dom";

function PhotoPage(props) {

    return(
        <div>
            <Hero Title={props.Title}/>
            <Gallery photos={gallery_photos} direction={'column'}></Gallery>
        </div>  
    );

}

export default PhotoPage;