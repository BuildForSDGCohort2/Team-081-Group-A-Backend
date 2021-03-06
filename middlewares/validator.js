module.exports = {
    emailValidator: (email) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return emailRegex.test(String(email).toLowerCase());
    },

    nameValidator: (name) => {
        const nameRegex = /^[a-zA-Z].*[\s\.]*$/gi;
         return nameRegex.test(String(name).toLowerCase());
    },

    passwordValidator: (password) => {
        // password should not contain whitespace
   const passwordRegex = /\s/g;
   let count = password.length;
   if(passwordRegex.test(password) || count < 7) {
    return false;   
}
  return true;
    },

    phoneValidator: (phon) => {
   const phone = String(phon);
   const phoneRegex = /^([789]){1}([01]){1}([0-9]){8}/g;
      if (phoneRegex.test(phone)) {
       return true;
       }

   return false;
    }, 

    fileValidator: (file) => {
     if(file==="image/jpeg" || file==="image/jpg" || file==="image/png"){
         return true;
 }
      return false;
    },

    experienceValidator: (exp) => {
        const experience = parseInt(exp);
        const experienceRegex = /[0-9]/g;
        if(experienceRegex.test(experience)){
            return true;
        } 
        return false;
    }
}
