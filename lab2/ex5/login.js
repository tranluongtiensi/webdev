// If enter password < 8 characters will notification 
function formvalid() {
    var vaildpass = document.getElementById("pass").value;
  
    if (vaildpass.length < 8 || vaildpass.length >= 20) {
      document.getElementById("vaild-pass").innerHTML = "Minimum 8 characters";
      return false;
    } else {
      document.getElementById("vaild-pass").innerHTML = "";
    }
}



  
  