import React, { useState, useEffect } from "react";

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {answer: 'blah',
optionA:props.question.optionA,
optionB:props.question.optionB,
optionC:props.question.optionC,
optionD:props.question.optionD,
question: props.question.question,
questionID: props.question.id,
rightAnswer: props.question.rightAnswer,
chapterID: props.question.chapterID,
id: props.question.id}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({answer: event.target.value});
    const requestOptions = {
method: "POST",
body: JSON.stringify({
id: this.state.id,
rightAnswer: this.state.rightAnswer,
question: this.state.question,
userAnswer:event.target.value,
user: "user",
testID: this.state.chapterID,
}),
};

fetch("http://localhost:3000/dev/answer", requestOptions)
.then((response) => response.json());
  }

 

  render() {
    return (
    	<div>
    	<form>
        <label for="question">{this.state.questionID}. {this.state.question}</label>
   		
          <select name="question" value={this.state.answer} onChange={this.handleChange}>
            <option value="" disabled selected>Select the right answer</option>
            <option value={this.state.optionA}>{this.state.optionA}</option>
            <option value={this.state.optionB}>{this.state.optionB}</option>
            <option value={this.state.optionC}>{this.state.optionC}</option>
            <option value={this.state.optionD}>{this.state.optionD}</option>
          </select>
          <hr />
      </form>
      </div>
    );
  }
}



