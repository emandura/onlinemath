import React from "react"
import Question from './Question'

class Test extends React.Component {
    constructor() {
        super()
        this.state = {
          test: [{}]
        }
    }




   componentDidMount() {
    fetch("http://localhost:3000/dev/tests")
            .then(response => response.json())
            .then(data => {
                this.setState({test: data.data})
                 });
    }  



     render() {
       const questionComponents = this.state.test.map(item => <Question key={item.id} question={item}/>);
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
