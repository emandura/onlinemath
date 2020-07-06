import React from 'react';
import avatar from './avatar.png';
import history from './services/history';
import { useHistory, Link} from 'react-router-dom'

export default class NewComment extends React.Component {
 constructor(){
            super();
            this.state = {
                 comment: [{}],
                 user: "Jane Doe",
                 time: "1 minute ago"
            }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        };


      handleChange(event){
            const {name, value, type, checked, id} = event.target;
            this.setState({ [name]: value });
        };



        handleSubmit(){
             const requestOptions = {
                method: 'POST',
                body: JSON.stringify({ 
                    comment: this.state.comment,
                    name: this.state.user,
                    time: this.state.time,
                    testID: parseInt(this.props.id)

                })
            }
        fetch('http://localhost:3000/dev/comments', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
     
    
        };

	
	render() {

      return (
     <ul class="comment-section">
                     <li class="write-new">
                      <form action="#" method="post">
                        <textarea onChange={this.handleChange} placeholder="Write your comment here" name="comment"></textarea>
                        <div>
                        <img src={avatar} width="35" />
                        <button onClick={this.handleSubmit}>Submit</button>
                        </div>
                      </form>
                     </li>
                </ul>
		)
    }

	}