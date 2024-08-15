export const validateData=(email,password)=>{
    const email_data=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const password_data=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!email_data){
        return "Email not valid!";
    }
    if(!password_data){
        return "Password not valid!";
    }
    return null;
}

