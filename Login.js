
import React, {useState} from 'react';
import { withRouter, Redirect } from "react-router-dom";
import history from './services/history';
import { Alert } from 'react-alert'

function Login(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/dev/users', {
        method: 'POST',
        body: JSON.stringify({
          username: state.email,
          password: state.password
        })
      }).then((response) => {if (response.status == 200) {
        setState(prevState => ({
            ...prevState,
            loggedIn : true
        }))
        const url = "http://localhost:3000/dev/tests/"+state.email;
    fetch(url)
            .then(response => response.json())
            .then(data => {
                setState({type: data.data.type, name: data.data.name})
                 });
        redirectToMenu();
         }else {
          alert("Wrong username or password");
        }

      }
      )
        
    }
     const redirectToMenu = () => {
         props.history.push('/Menu');
     }
     
    return(
      <div className="testStart">
    <form className="login">
      <label for="uname"><b>E-mail</b></label>
      <input type="text" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter e-mail" 
                       value={state.email}
                       onChange={handleChange}
                />
      <label for="psw"><b>Password</b></label>
       <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange} 
                />
     
        <button  type="submit"  onClick={handleSubmitClick}>Submit</button>
        
        </form>
    </div>
    )
}
export default Login;
