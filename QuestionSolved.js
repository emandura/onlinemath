import React from "react"
import Routes from './routes/index'
import Conditional from './Conditional'
import Question from './Question'

function QuestionSolved (props) {

    const mine=props.question.optionA;
    const right=props.question.rightAnswer;

        return (
        
<div><form>
	<label for="question">{props.question.id}. {props.question.question}</label>
        <p>Your answer:</p>
        <div className="solution">{props.question.answer}</div> <Conditional/>
        <p>Right answer:</p>
  		  <div className="solution">{props.question.rightAnswer}</div>

    <hr/>
</form>
</div>

);
    }


export default QuestionSolved;