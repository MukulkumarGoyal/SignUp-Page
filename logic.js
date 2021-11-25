var but = document.getElementById('btn');
var user = document.getElementById('user');
var email = document.getElementById('email');
document.getElementById('btn').onclick = function(){
    but.type = "button";
    var password = document.getElementById("pass").value;
    var confirm_pas = document.getElementById("conf_pass").value;
    if(password == "" || confirm_pas == "" || email.value== "" || user.value == ""){
        but.type = "submit"; 
    }
    else if(password.length < 8){
        alert("Password must be atleast 8 characters.");
    }
    else if(password != confirm_pas){
        alert("Password and Confrim Password must be same.");
    }
    else{
        alert("Login Success!");
        btn.type = "submit";
    }
}