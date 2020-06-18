import React from "react"

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
            count:0
        }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event)  {
      const {name, value, type, checked, id} = event.target;
       if( type === "checkbox") {
          if(checked) {
           this.setState({ [name]: value });
          }
        }
        this.setState({ [name]: value });
      let questions=this.state;
      localStorage.setItem('myData', JSON.stringify(questions));
      let data=localStorage.getItem('myData');
      data=JSON.parse(data);
      console.log(data)

}

  
     
     render() {
        return (
        
<div className="testCreate"><form>
  <label for="questionCreate">Question {this.props.number}: </label>
  <input type="text" value={this.state.question} name="question" onChange={this.handleChange} placeholder="Enter question text"/>
  <label for="answerCreate">Answer options: </label>
  <div class="createTestInput">
  <input type="text" value={this.state.optionA} name="optionA" onChange={this.handleChange} placeholder="Enter option number 1"/><label for="checkbox">Right answer?</label><input type="checkbox" onChange={this.handleChange} name="rigthAnswer" value={this.state.optionA} id="first"/>
  <input type="text" value={this.state.optionB} name="optionB" onChange={this.handleChange} placeholder="Enter option number 2"/><label for="checkbox">Right answer?</label><input type="checkbox" onChange={this.handleChange} name="rigthAnswer" id="second"/>
  <input type="text" value={this.state.optionC} name="optionC" onChange={this.handleChange} placeholder="Enter option number 3"/><label for="checkbox">Right answer?</label><input type="checkbox" onChange={this.handleChange} name="rigthAnswer" id="third"/>
  <input type="text" value={this.state.optionD} name="optionD" onChange={this.handleChange} placeholder="Enter option number 4"/><label for="checkbox">Right answer?</label><input type="checkbox" onChange={this.handleChange} name="rigthAnswer" id="fourth"/>
  </div>
  <hr/>
</form>
</div>

);
    }

}

export default CreateQuestion