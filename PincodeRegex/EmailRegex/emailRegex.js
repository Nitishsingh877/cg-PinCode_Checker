function validateEmail(email){
    let emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-zA-Z0-9]+(\.[a-zA-Z]{2,}){1,2}$/;
    if(emailRegex.test(email)){
      console.log(email+ " is Valid Email ✅ ");
    }else{
      console.log(email+ "is Not Valid Email ❌");
    }
  }
  
  validateEmail("abc@bridgelabz.co");
  validateEmail("abc.xyz@bridgelabz.co.in");
  validateEmail("abc@bridgelabz.com");
  
  validateEmail("abc@.co.in");
  validateEmail("abc.xyz@bridgelabz");
  validateEmail("abc@bridgelabz.c");
  validateEmail("abc..xyz@bridgelabz.co.in");
  validateEmail("abc@bridgelabz..co.in");
  validateEmail("abc@bridgelabz.c@o.in");