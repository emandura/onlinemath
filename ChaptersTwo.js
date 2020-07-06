import React from "react";
import data from './chapterinfo.js';
import Chapter from './Chapter.js'


class ChaptersTwo extends React.Component {
    constructor() {
        super()
        this.state = {
          chapters: [{}]
        }
    };




   componentDidMount() {
    fetch("http://localhost:3000/dev/chapters/2")
            .then(response => response.json())
            .then(data => {
                this.setState({chapters: data.data})
                 });
    };



     render() {
       const chapterComponents = this.state.chapters.map(item => <Chapter key={item.id} chapter={item}/>);
        return (
        <div class="row">
        	{chapterComponents}
		</div>
		)
	}
}

export default ChaptersTwo;



