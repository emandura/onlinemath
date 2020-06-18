import React from "react"
import Question from './Question'
import data from './data.js';

class Test extends React.Component {
    constructor() {
        super()
        this.state = {
          testName: "Vieta's formulas",
            questionNumber: "1. ",
            question: "Determine the coefficients p and q of the quadratic equation x<sup>2</sup>+px+q=0 if x<sub>1</sub>=-7 and x<sub>2</sub>=-3",
            optionA: "p=10, q=21",
            optionB: "p=-10, q=21",
            optionC: "p=10, q=-21",
            optionD: "p=-10, q=-21",
            rightAnswer: "p=-10, q=-21"
        }
        //this.handleChange = this.handleChange.bind(this)
    }


 /* handleChange(event) {
       const answers = questionComponents.map(item => (props) {
          <Question key={item.id} question={item}/>
          if(item.rightAnswer==props.item.answer)
            console.log("")
       }
        )

    }*/

     render() {
        const questionComponents = data.map(item => <Question key={item.id} question={item}/>)
        return (
        
<div class="test"><form>
     {questionComponents}
       <input onSubmit={this.handleChange} type="submit"/>
</form>
</div>

);
    }

}

export default Test