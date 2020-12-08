function validation()
  {
    // if(document.getElementById("name").value=="")
    // {
    //   alert("Please enter a name");
    // }
    // if(document.getElementById("email").value=="")
    // {
    //   alert("Please enter a valid email");
    // }
    // if(document.getElementById("password").value=="")
    // {
    //   alert("Please enter valid password");
    // }   
    if(document.getElementById("name").value!="" && document.getElementById("email").value!="" && document.getElementById("password").value!="")
    {
      var x = document.getElementById("name").value;
      var y = document.getElementById("email").value;
      var z = document.getElementById("password").value;
      var namepatt = new RegExp("[A-Za-z]+");
      var emailpatt = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
      // var passpatt = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");
      var nameresult = namepatt.test(x);
      var emailresult = emailpatt.test(y);
      // var passwordresult = passpatt.test(z);
      if(nameresult === false){
        document.getElementById("errorNameMsg").style.display = "block";
        document.getElementById("errorNameMsg").innerHTML = "Please enter valid name";
      }
      if(emailresult === false){
        document.getElementById("errorEmailMsg").style.display = "block";
        document.getElementById("errorEmailMsg").innerHTML = "Please enter valid emailID";
      }
      // if(passwordresult === false){
      //   document.getElementById("errorPasswordMsg").style.display = "block";
      //   document.getElementById("errorPasswordMsg").innerHTML = "Please enter valid password";
      // }
      if(nameresult===true && emailresult===true && z!=="") {
        document.getElementById("success").style.display = "block";
        document.getElementById("success").innerHTML = "Successfully submitted";
      } else {
        document.getElementById("success").style.display = "none";
        document.getElementById("errorBlankMsg").style.display = "none";
      }
    } else {
      document.getElementById("errorBlankMsg").style.display = "block";
      document.getElementById("errorBlankMsg").innerHTML = "Please dont keep any fields blank";
    }
  } 
  
