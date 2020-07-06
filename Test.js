import React from "react";
import Question from './Question.js';
import {Link} from "react-router-dom";


class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          testName: "",
          testID: "",
          test: [{}],
          chapter: [{}]
        }
      /*let param =  this.props.location.pathname;
      var newString = param.substr(6)
      this.setState({testName: newString})
      const url = "http://localhost:3000/dev/chapter/"+newString;
      fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({testID: data.data.id})
                 });*/
  
    };



   componentDidMount() {
    let param =  this.props.location.pathname;
      var newString = param.substr(6)
const URL = "http://localhost:3000/dev/chapter/"+newString;
      fetch(URL)
            .then(response => response.json())
            .then(data => {
                this.setState({testID: data.data.id})
                 }).finally(()=>{const url = "http://localhost:3000/dev/tests/"+this.state.testID;
    fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({test: data.data})
                 });})

  
    console.log(this.state.testID)
    
    };



     render() {
       const questionComponents = this.state.test.map(item => <Question key={item.id} question={item}/>);
        return (
              
<div class="test"><form>
 <p>{this.state.testID}</p>
 <h1>{this.state.testName}</h1>
     {questionComponents}
  <Link to={{pathname: `/solution/${this.state.testID}`}}><input type="submit"/></Link>
</form>
</div>
    )
  }
}

export default Test;







