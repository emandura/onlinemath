import React from "react"
import CreateQuestion from './CreateQuestion';
import data from './data.js';

const LOCALSTORAGE_KEY = 'someJson'

class CreateTest extends React.Component {
    constructor (props) {
    super(props)
    
    this.json = {}
  }
  
  componentWillMount () {
    this.loadJson()
  }
  validateJson (json) {
    let validJson
    
    try{
      validJson = JSON.stringify(JSON.parse(this.state.json), null, 2)
    } catch(e) {
      throw e
    }
    
    return validJson
  }
  
  loadJson = () => {
    const json = window.localStorage.getItem(LOCALSTORAGE_KEY) || JSON.stringify(data, null, 2)
    this.setState({ json })
  }
  
  saveJson = () => {
    const validJson = this.validateJson(this.state.json)
    
    if (!validJson) return;
    
    window.localStorage.setItem(
      LOCALSTORAGE_KEY,
      validJson
    )
  }
  
  handleChange = e => this.setState({
    json: e.target.value
  })
 

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
  <input type="submit"/>
</form>
</div>

);
    }

}

export default CreateTest


