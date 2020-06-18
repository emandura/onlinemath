import React,{useState} from "react"
import Routes from './routes/index'


/*function handleChange(event){

  const answer = document.getElementById("question").value;
    if (answer.value == props.question.rightAnswer) {
    return("Correct");
}
 }*/


function Question (props) {

         const [answer,setAnswer] = useState("rightAnswer") ;  

          function handleChange(e) {

        setAnswer(e.target.value)
        console.log(answer);
        }

        return (
        
<div><form>
	<label for="question">{props.question.id}. {props.question.question}</label>
  		<select onChange={handleChange}  id="question" name="question">
  			<option value="" disabled selected>Select the right asnwer</option>
    		<option value={props.question.optionA}>{props.question.optionA}</option>
    		<option value={props.question.optionB}>{props.question.optionB}</option>
    		<option value={props.question.optionC}>{props.question.optionC}</option>
    		<option value={props.question.optionD}>{props.question.optionD}</option>
  		</select>
    <hr/>
</form>
</div>

);
    }


export default Question