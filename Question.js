import React,{useState} from "react"
import Routes from './routes/index'


/*function handleChange(event){

  const answer = document.getElementById("question").value;
    if (answer.value == props.question.rightAnswer) {
    return("Correct");
}
 }*/


function Question (props) {

         const [answer,setAnswer] = useState() ;
         const [question,setQuestion] = useState() ;
         const [id,setId] = useState() ;
         const [rightAnswer,setRightAnswer] = useState() ; 
         setQuestion(props.question.question);
         setRightAnswer(props.question.rightAnswer);
         setId(props.question.id); 

          function handleChange(e) {
            setAnswer(e.target.value)
            const requestOptions = {
                 method: 'POST',
                 body: JSON.stringify({ 
                       id: props.question.id,
                       rightAnswer: props.question.rightAnswer,
                       question: props.question.question,
                       userAnswer: answer,
                      
                       })
              }
            fetch('http://localhost:3000/dev/answer', requestOptions)
                  .then(response => response.json())
                  .then(data => this.setState({ postId: data.id }));
        }

        return (
        
<div><form>
	<label for="question">{props.question.id}. {props.question.question}</label>
  		<select onChange={()=> handleChange}  id="question" name="question">
  			<option value="" disabled selected>Select the right answer</option>
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