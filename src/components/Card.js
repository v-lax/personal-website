import React from 'react';

import Cardinfo from '../components/Cardinfo.js';

function Card (props){
    return(
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <Cardinfo title={props.item.title} subTitle={props.item.subTitle} process={props.item.process} link={props.item.link} /> }
        </div>
    );
}

export default Card; 