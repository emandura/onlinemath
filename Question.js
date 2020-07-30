import React, { useState, useEffect } from "react";
import UserProfile from './UserProfile';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {answer: "",
optionA:props.question.optionA,
optionB:props.question.optionB,
optionC:props.question.optionC,
optionD:props.question.optionD,
question: props.question.question,
questionID: props.question.id,
rightAnswer: props.question.rightAnswer,
chapterID: props.question.chapterID,
id: props.question.id,
user: ""}

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    var user = UserProfile.getEmail();
    this.setState({user: user})
  }

  handleChange(event) {
  	  var tempDate = new Date();
      var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours();
    this.setState({answer: event.target.value});
    const requestOptions = {
method: "POST",
body: JSON.stringify({
id: this.state.id,
rightAnswer: this.state.rightAnswer,
question: this.state.question,
userAnswer:event.target.value,
user: this.state.user,
testID: this.state.chapterID,
date: date
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



