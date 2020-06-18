import React from "react";
import data from './chapterinfo.js';
import Chapter from './Chapter.js'

function Chapters() {

   const chapterComponents = data.map(item => <Chapter key={item.id} chapter={item}/>)
    return (
        <div class="row">
        	{chapterComponents}
		</div>
    )
}

export default Chapters

