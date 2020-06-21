import React from 'react';
import avatar from './avatar.png';
import Comment from './Comment'
import commentsdata from './commentsdata.js'

 class Comments extends React.Component {

     constructor() {
        super()
        this.state = {
          comment: [{}]
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("http://localhost:3000/dev/comments")
            .then(response => response.json())
            .then(data => {
                this.setState({comment: data.data})
                 });
    }  

    handleChange(event)  {
      const {name, value, type, checked, id} = event.target;
        this.setState({ [name]: value });
}

    handleSubmit() {
        const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ 
            comment: this.state.comment,
        })
    };

	render() {
	       const commentComponents = this.state.comment.map(item => <Comment key={item.id} comment={item}/>);



	return (
			<ul class="comment-section">

			{commentComponents}

            <li class="write-new">

                <form action="#" method="post">

                    <textarea onChange={this.handleChange} value={this.state.comment} placeholder="Write your comment here" name="comment"></textarea>

                    <div>
                        <img src={avatar} width="35" />
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>

                </form>

            </li>

		</ul>
		);

	}
}

export default Comments;
