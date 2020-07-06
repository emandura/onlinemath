import React from "react";
import CreateQuestion from './CreateQuestion';


class CreateTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          testName: this.props.testName,
          testID: "",
          questionNumber: this.props.questionNumber
        }

      const url = "http://localhost:3000/dev/chapter/"+this.state.testName;
      fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({testID: data.data.id})
                 });
  
    };



     render() {
        return (
         <div className="testCreate"><form>
        <p>{this.state.testID}. {this.state.testName}</p>
        <CreateQuestion test={this.state.testID} number="1"/>
        <CreateQuestion test={this.state.testID} number="2"/>
        <CreateQuestion test={this.state.testID} number="3"/>
        <CreateQuestion test={this.state.testID} number="4"/>
        <CreateQuestion test={this.state.testID} number="5"/>

  
</form>
</div>
    )
  }
}

export default CreateTest;



