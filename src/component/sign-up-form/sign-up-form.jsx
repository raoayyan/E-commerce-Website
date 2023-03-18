import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import './sign-up.style.scss';
import Button from "../button/button.component";
import FormInput from "../form-input/form-input";
// import { UserContext } from "../../context/user.context";


const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
};



const SignUpForm =  ()=>{
const [formField, setFormField]= useState(defaultFormFields);
const {displayName,email,password,confirmPassword}=formField;

// const {setCurrentUser} = useContext(UserContext)

const resetFormFields = ()=>{
   setFormField(defaultFormFields);
}

const handleSubmit = async (event)=>{
  event.preventDefault();
  
  
  if(password !== confirmPassword){
    alert('must match password');
    return;
  }
  try{
     const {user} = await createAuthUserWithEmailAndPassword(email,password);

    // setCurrentUser(user);
     await createUserDocFromAuth(user,{displayName});
     resetFormFields();

  }catch(error){
    if(error.code === 'auth/email-already-in-use'){
     alert('user creation encountered an error', error);
    }
  }
 
}

const handleChange = (event)=>{
      const {name,value}= event.target;

      setFormField({...formField,[name]: value})
}

    return (
        <div className="sign-up-container">
        <h2>Don;t have an Account</h2>
        <span>Sign Up with Email and Password</span>
        <form onSubmit={handleSubmit}>


        
          <FormInput  label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName}/>

          
          <FormInput  label='Email' type='email' required onChange={handleChange} name='email' value={email}/>

          
          <FormInput  label='password' type='password' required onChange={handleChange} name='password' value={password}/>

         
          <FormInput label='Confirm password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>

          <Button  type="submit">Sign Up</Button>
        </form>
        
        </div>
    )
}
export default SignUpForm;