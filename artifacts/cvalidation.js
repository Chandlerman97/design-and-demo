function validateEmail() {
 var x = theirEmail.getElementById("email").value;
 var atpos = x.indexOf("@");
 var dotpos = x.lastIndexOf(".");
 if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
    alert("Not a valid e-mail address");
    return false;
 }
}

function ValidateForm(){
 var validFirstName = false;
 var validLastName = false;
 var validEmail = false;
 var validPhoneNumber = false;
 var validUsername = false;
 var validUserPassword = false;
 var validAddress = false;
 var validCity = false;
 var validCountry = false;
 var validState = false;
 var validZipCode = false;
  
 var letters = /^[A-Za-z]+$/;
 var numbers = /^[0-9]+$/;
  
 var errorMessages ="";  
 
  
 /*********** VALIDATES FIRSTNAME *********/

 if (myContact.firstname.value===null ||
 myContact.firstname.value==="" ||
 myContact.firstname.value.length > 20 ||
 !myContact.firstname.value.match(letters))
 errorMessages += "<p>The first name must be less than 20 characters and it is required. Only accepts letters.</p>";
 else
 validFirstName = true; 
  

 /*********** VALIDATES LASTNAME *********/

 if (myContact.lastname.value===null ||
 myContact.lastname.value==="" ||
 myContact.lastname.value.length > 50 ||
 !myContact.firstname.value.match(letters))
 errorMessages += "<p>The last name must be less than 50 characters and it is required. Only accepts letters.</p>";
 else
 validLastName = true; 
  
  
 /*********** VALIDATES EMAIL *********/
  
 if (myContact.email.value===null ||
 myContact.email.value==="" ||
 myContact.email.value.length > 50)
 errorMessages += "<p>The email is required</p>";
 else
 validEmail = true; 
  
  
 /*********** VALIDATES PHONENUMBER *********/

 if (myContact.phone.value===null ||
 myContact.phone.value==="" ||
 myContact.phone.value.length > 15 ||
 !myContact.phone.value.match(numbers))
 errorMessages += "<p>The phone number must be less than 15 characters and it is required. Only accepts numbers.</p>";
 else
 validPhoneNumber = true; 
  
  
/*********** VALIDATES USERNAME *********/
 
 if (myContact.username.value.length > 12 || 
     myContact.username.value===null || 
     myContact.username.value==="")
   errorMessages += "<p>The username must be less than 12 characters and it is required</p>";
 else
   validUsername =true;
  
  
 /*********** VALIDATES PASSWORD *********/

 if (myContact.password.value===null ||
 myContact.password.value==="" ||
 myContact.password.value.length > 7)
 errorMessages += "<p>The password must be less than 7 characters and it is required</p>";
 else
 validUserPassword = true; 
  
  
 /*********** VALIDATES ADDRESS *********/

 if (myContact.address.value===null || myContact.address.value==="")
 errorMessages += "<p>The address is required</p>";
 else
 validAddress = true; 
  

 /*********** VALIDATES CITY *********/

 if (myContact.city.value===null || myContact.city.value==="")
 errorMessages += "<p>The city is required</p>";
 else
 validCity = true; 
  
   
 /*********** VALIDATES COUNTRY *********/

 if (myContact.countries.value==="(Choose Country)")
 errorMessages += "<p>The country is required</p>";
 else
 validCountry = true; 
  
  
 /*********** VALIDATES STATES *********/

 if (myContact.countries.value==="United States" && myContact.states.value==="(Choose State)")
 errorMessages += "<p>The state is required</p>";
 else
 validState = true; 
  
  
 /*********** VALIDATES ZIPCODE *********/

 if (myContact.countries.value==="United States" && myContact.zipcode.value===null ||
 myContact.countries.value==="United States" && myContact.zipcode.value==="" ||
 myContact.countries.value==="United States" && myContact.zipcode.value.length > 7)
 errorMessages += "<p>The zipcode must be less than 7 characters and it is required</p>";
 else
 validZipcode = true; 
  
    
 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validFirstName && validLastName && validEmail && validPhoneNumber && 
         validUsername && validUserPassword && validAddress && validCity && 
         validCountry && validState && validZipCode);
    }
