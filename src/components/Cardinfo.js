import React from 'react';
import { useSpring, animated } from 'react-spring';

function Cardinfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <div>
            <a href={props.process} target='_blank' rel="noopener noreferrer">Process</a>
            </div>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    );

}

export default Cardinfo;