let txtUserName=document.getElementById("txtUserName");
let textEmail=document.getElementById("textEmail");
let textPsd=document.getElementById("textPsd");
let textConPsd=document.getElementById("textConPsd");

function validateForm(){
    if(txtUserName.value ==""){
        document.getElementById("userError").innerHTML="Please Enter the user Name";
    }
    else{
        document.getElementById("userError").innerHTML="";
    }
    if(textEmail.value ==""){
        document.getElementById("emailError").innerHTML="Please Enter the Email";
    }
    else{
        document.getElementById("emailError").innerHTML="";
    }
    if(textPsd.value ==""){
        document.getElementById("passError").innerHTML="Please Enter the Password";
    }
    else{
        document.getElementById("passError").innerHTML="";
    }
    if(textConPsd.value ==""){
        document.getElementById("conError").innerHTML="Please Confirm your Password";
    }
    else{
        document.getElementById("conError").innerHTML="";
    }
    return false;
}