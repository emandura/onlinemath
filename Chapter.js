import React from "react";
import {Link} from 'react-router-dom';

function Chapter(props) {

    return (
        	<div class="column" ><Link to={{pathname: `starttest/${props.chapter.name}`}}>{props.chapter.name}</Link></div>
    );
}

export default Chapter;



