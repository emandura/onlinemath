import React from "react"
import QuestionSolved from './QuestionSolved'
import {Link} from 'react-router-dom'
import Routes from './routes/index'
import UserProfile from './UserProfile';

export default class Solutions extends React.Component {

		constructor(props){
			super(props);
			this.state={
				testName: "",
				testID: this.props.testID + "/",
				test: [{}],
				user: "user"
			}
	

		}

		componentDidMount(){
    		var user = UserProfile.getEmail();
   		    this.setState({user: user});
   		    const URL = "http://localhost:3000/dev/answers/"+this.state.testID+this.state.user
   				fetch(URL)
           		 	.then(response => response.json())
           		 	.then(data => {
            		    this.setState({test: data.data})
               		  });
  }

	

		render(){
			
			const questionComponents = this.state.test.map(item => <QuestionSolved key={item.id} question={item}/>)
			return(
				<div class="test"><form>
				{questionComponents}
				<Link to={{pathname: `/comments/${this.state.testID}`}}><button>Comments</button></Link>
				</form></div>
				)

		}
}


