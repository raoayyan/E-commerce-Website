import { useState,useContext } from "react";
import {
  signInwithGooglePopup,
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import "./sign-in.style.scss";
import Button from "../button/button.component";

// import { UserContext } from "../../context/user.context";
import FormInput from "../form-input/form-input";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  // const { setCurrentUser } = useContext(UserContext) //useContext is hook and UserContext in what we imported from user.context

  const resetFormFields = () => {
    setFormField(defaultFormFields);
  };
  const signInWithGoogle = async () => {
     await signInwithGooglePopup();
      
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email,password);
      // setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      if(error.code === "auth/wrong-password"){
        alert("Incorrect Cridential")
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an Account</h2>
      <span>Sign In with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
        <Button type="submit">Sign In</Button>
        <Button type='button' buttonType='google' onClick={signInWithGoogle} >Sign In with Google</Button>
        </div>
       
      </form>
    </div>
  );
};
export default SignInForm;
