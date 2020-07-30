import React from "react"
import { 
	BrowserRouter as Router, 
	Route, 
	Link, 
	Switch 
} from 'react-router-dom'; 
import Test from './Test'
import Routes from './routes/index';

import UserProfile from './UserProfile';



const StartTest = (params) => {
	const user = UserProfile.getType();
	if (user==="teacher") {
		 return ( 
  	<div class="testStart">
				<header>{params.testName}</header>
					<div class="testDescription"><div style={{paddingBottom: "20px"}}>This test serves to help you assess for yourself how well you have mastered the material in the {params.testName} lesson. You will get the results immediately after the test. There is no limit to how many times you can test your knowledge with this test. To test your knowledge, start the test.</div>
							<div class="inline"><span class="total">Total questions: </span><span class="number">5</span></div>
							<div class="inline"><span class="total">Total points: </span><span class="number">5</span></div>
					<Link to={{pathname: `/createtest/${params.testName}`}}><button>Create test</button></Link>
					
					</div>
	</div> 
	);

	}
  else{
  return ( 
  	<div class="testStart">
				<header>{params.testName}</header>
					<div class="testDescription"><div style={{paddingBottom: "20px"}}>This test serves to help you assess for yourself how well you have mastered the material in the {params.testName} lesson. You will get the results immediately after the test. There is no limit to how many times you can test your knowledge with this test. To test your knowledge, start the test.</div>
							<div class="inline"><span class="total">Total questions: </span><span class="number">5</span></div>
							<div class="inline"><span class="total">Total points: </span><span class="number">5</span></div>
				
					<Link to={{pathname: `/test/${params.testName}`}}><button>Start test</button></Link>
					</div>
	</div> 
	);
}
}

export default StartTest
