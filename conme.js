function ValidateForm(){
 var validName = false;
 var validEmail = false;
 var validMessage = false;
 var errorMessages ="";  
 
 if (myContact.name.value===null ||
 myContact.name.value===""))
 errorMessages += "<p>Your name is required.</p>";
 else
 validFirstName = true;
 
 if (myContact.email.value===null ||
 myContact.email.value===""))
 errorMessages += "<p>Your email is required.</p>";
 else
 validFirstName = true;
 
 if (myContact.message.value===null ||
 myContact.message.value===""))
 errorMessages += "<p>Your message is required.</p>";
 else
 validMessage = true;
 
 document.getElementById("errorMessages").innerHTML = errorMessages;
 return (validName && validEmail && validMessage);
    }
