function ValidateForm(){
 var validUsername = false;
 var validUserPassword = false;
 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

  
/*********** VALIDATES USERNAME ******** */
 
 if (myContact.username.value.length > 12 || 
     myContact.username.value===null || 
     myContact.username.value==="")
   errorMessages += "<p>The username must be less than 12 characters and it is required</p>";
 else
   validUsername =true;
  
  
 /*********** VALIDATES PASSWORD ******** */

  
 if (myContact.password.value===null ||
 myContact.password.value==="" ||
 myContact.password.value.length > 7)
 errorMessages += "<p>The password must be less than 7 characters and it is required</p>";
 else
 validUserPassword = true; 
  
  
  
 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validUsername && validUserPassword) ;
}
