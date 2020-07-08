import React from "react"
import QuestionSolved from './QuestionSolved'
import {Link} from 'react-router-dom'
import Routes from './routes/index'

export default class Solutions extends React.Component {
		constructor(props){
			super(props);
			this.state={
				testName: "",
				testID: this.props.testID,
				test: [{}]
			}
	

		}

		componentDidMount(){
				 const URL = "http://localhost:3000/dev/tests/"+this.props.testID;
   					¸fetch(URL)
           		 	.then(response => response.json())
           		 	.then(data => {
            		    this.setState({test: data.data})
               		  });
		}

		render(){
			
			const questionComponents = this.state.test.map(item => <QuestionSolved answer={item.optionA} key={item.id} question={item}/>)
			return(
				<div class="test"><form>
				{questionComponents}
				<Link to={{pathname: `/comments/${this.state.testID}`}}><button>Comments</button></Link>
				</form></div>
				)

		}
}


