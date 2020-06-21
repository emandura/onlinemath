import React from "react"
import CreateQuestion from './CreateQuestion';


class CreateTest extends React.Component {
    constructor (props) {
    super(props)
    this.state={
      testName: ""
    }
  }
  

     render() {
        return (
        
<div className="testCreate"><form>
  <label for="questionCreate">Test name: </label>
  <input type="text" value={this.state.testName} name="testName" onChange={this.handleChange} placeholder="Enter test name"/>
	<CreateQuestion number="1"/>
  <CreateQuestion number="2"/>
  <CreateQuestion number="3"/>
  <CreateQuestion number="4"/>
  <CreateQuestion number="5"/>
</form>
</div>

);
    }

}

export default CreateTest


