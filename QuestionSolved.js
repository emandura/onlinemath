import React from "react"
import Routes from './routes/index'
import Conditional from './Conditional'
import Question from './Question'

export default function QuestionSolved (props) {

    return(
        <div>
        <label for="question">{props.question.id}. {props.question.question}</label>
            <p>Your answer:</p>
             <div className="solution">{props.question.userAnswer}</div><Conditional right={props.question.rightAnswer} mine={props.question.userAnswer}/>
            <p>Right answer:</p>
             <div className="solution">{props.question.rightAnswer}</div>
        <hr/>
        </div>
        );

}
