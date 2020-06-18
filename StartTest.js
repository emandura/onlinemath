import React from "react"
import { 
	BrowserRouter as Router, 
	Route, 
	Link, 
	Switch 
} from 'react-router-dom'; 
import Test from './Test'
import Routes from './routes/index'



class StartTest extends React.Component {
	constructor(){
		super();
		this.state={
			testName: "Vieta's formulas",
			testTotal: "5"
		}
	}

	/*  componentDidMount() {
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    test: data
                })
            })
    }*/
	
	render() {
		return (
   			 <div class="testStart">
				<header>{this.state.testName}</header>
					<div class="testDescription"><div style={{paddingBottom: "20px"}}>This test serves to help you assess for yourself how well you have mastered the material in the {this.state.testName} lesson. You will get the results immediately after the test. There is no limit to how many times you can test your knowledge with this test. To test your knowledge, start the test.</div>
							<div class="inline"><span class="total">Total questions: </span><span class="number">{this.state.testTotal}</span></div>
							<div class="inline"><span class="total">Total points: </span><span class="number">{this.state.testTotal}</span></div>
					<a href='/test'><button>Start test</button></a>
					</div>
			</div> 
				)

			}
}

export default StartTest