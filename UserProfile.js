var UserProfile = (function() {
  var full_name = "";
  var type = "";
  var email = "";
  var loggedIn = false;

  var getName = function() {
    return full_name;    
  };

  var setName = function(name) {
    full_name = name;     
  };

    var getEmail = function() {
    return email;    
  };
  var setLoggedIn = function() {
    loggedIn = true;     
  };

    var getLoggedIn = function() {
    return loggedIn;  
  };

  var setEmail = function(name) {
    email = name;     

  };

  var getType = function() {
    return type;    
  };

  var setType = function(name) {
    type = name;     
    
  };

   var setUser = function(email){
    const URL = "http://localhost:3000/dev/users/"+email;
          fetch(URL)
                .then(response => response.json())
                .then(data => {
                    setType(data.data.type);
                    setName(data.data.name);
                    });
          
    };


  return {
    getName: getName,
    setName: setName,
    getType: getType,
    setType: setType,
    getEmail: getEmail,
    setEmail: setEmail,
    setUser: setUser,
    getLoggedIn: getLoggedIn,
    setLoggedIn: setLoggedIn
  }

})();

export default UserProfile;