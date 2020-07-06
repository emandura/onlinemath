import React from "react";
import Chapter from './Chapter.js'


class ChaptersThree extends React.Component {
    constructor() {
        super()
        this.state = {
          chapters: [{}]
        }
    };




   componentDidMount() {
    fetch("http://localhost:3000/dev/chapters/3")
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

export default ChaptersThree;



