import React from 'react';
import avatar from './avatar.png';
import Comment from './Comment'
import NewComment from './NewComment'

export default class Comments extends React.Component { 
        constructor(){
            super();
            this.state = {
                 comment: [{}]
            }
        };

        componentDidMount(){
        const URL = "http://localhost:3000/dev/comments/"+this.props.testID;
            fetch(URL)
            .then(response => response.json())
            .then(data => {
                this.setState({comment: data.data})
                 });
        };

      
        render() {
             const commentComponents = this.state.comment.map((item) => <Comment key={item.id} comment={item}/>);
        return (
           <ul class="comment-section">
                {commentComponents}
                <NewComment id={this.props.testID}/>
          </ul>         
                    
            );
         };

 }