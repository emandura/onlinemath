import React from "react";


export default const handleSaveToPC = jsonData => {
  const fileData = JSON.stringify(jsonData);
  const blob = new Blob([fileData], {type: "text/plain"});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = 'filename.json';
  link.href = url;
  link.click();
}




/* const {name, value, type, checked, id} = event.target
       if( type === "checkbox") {
          if(checked) {
           this.setState({ rightAnswer: id })
          }
        }
        this.setState({ [name]: value })
        }*/
     }