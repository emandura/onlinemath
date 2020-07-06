import React from "react"
import {Link} from "react-router-dom"

class CreateQuestion extends React.Component {
    constructor() {
        super()
        this.state = { 
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            rightAnswer: "",
            chapterID: "",
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }



    handleChange(event)  {
      const {name, value, type, checked, id} = event.target;
       if( type === "checkbox") {
          if(checked) {
           this.setState({ rightAnswer: value });
          }
        }
        this.setState({ [name]: value });
      console.log(this.state);
}

      handleSubmit() {

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ 
            id: this.props.number,
            question: this.state.question,
            optionA: this.state.optionA,
            optionB: this.state.optionB,
            optionC: this.state.optionC,
            optionD: this.state.optionD,
            rightAnswer: this.state.rightAnswer,
            chapterID: parseInt(this.props.test)
        })
    };
    fetch('http://localhost:3000/dev/tests', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
    
}

  
     
     render() {
        return (
        
<div className="testCreate"><form onSubmit={this.handleSubmit}>
  <label for="questionCreate">Question {this.props.number}: </label>
  <input type="text" value={this.state.question} name="question" onChange={this.handleChange} placeholder="Enter question text"/>
  <label for="answerCreate">Answer options: </label>
  <div class="createTestInput">
  <input type="text" value={this.state.optionA} name="optionA" onChange={this.handleChange} placeholder="Enter option number 1"/><label for="checkbox">Right answer?</label><input type="checkbox" onChange={this.handleChange} name="rigthAnswer" value={this.state.optionA} id="first"/>
  <input type="text" value={this.state.optionB} name="optionB" onChange={this.handleChange} placeholder="Enter option number 2"/><label for="checkbox">Right answer?</label><input type="checkbox" onChange={this.handleChange} name="rigthAnswer" value={this.state.optionB} id="second"/>
  <input type="text" value={this.state.optionC} name="optionC" onChange={this.handleChange} placeholder="Enter option number 3"/><label for="checkbox">Right answer?</label><input type="checkbox" onChange={this.handleChange} name="rigthAnswer" value={this.state.optionC} id="third"/>
  <input type="text" value={this.state.optionD} name="optionD" onChange={this.handleChange} placeholder="Enter option number 4"/><label for="checkbox">Right answer?</label><input type="checkbox" onChange={this.handleChange} name="rigthAnswer" value={this.state.optionD} id="fourth"/>
  </div><input type="submit"/>
</form>
</div>

);
    }

}

export default CreateQuestion