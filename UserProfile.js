var UserProfile = (function() {
  var full_name = "";
  var type = "";
  var email = "";
  var loggedIn = false;

  var getName = function() {
    return full_name;    // Or pull this from cookie/localStorage
  };

  var setName = function(name) {
    full_name = name;     
    // Also set this in cookie/localStorage
  };

    var getEmail = function() {
    return email;    // Or pull this from cookie/localStorage
  };
  var setLoggedIn = function() {
    loggedIn = true;     
    // Also set this in cookie/localStorage
  };

    var getLoggedIn = function() {
    return loggedIn;    // Or pull this from cookie/localStorage
  };

  var setEmail = function(name) {
    email = name;     
    // Also set this in cookie/localStorage
  };

  var getType = function() {
    return type;    // Or pull this from cookie/localStorage
  };

  var setType = function(name) {
    type = name;     
    // Also set this in cookie/localStorage
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