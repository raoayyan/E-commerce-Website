import './Authentication.style.scss'
import SignUpForm from "../../component/sign-up-form/sign-up-form";
import SignInForm from "../../component/sign-in-form/sign-in-form";
const Authentication = () => {


  return (
    <div className="authentication-container">
      
     <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// const fetchRedirectResult = async () => {
//     const response = await getRedirectResult(auth);
//     if(response){
//         const userDocRef = await createUserDocFromAuth(response.user);
//     }
//   };

//   useEffect(() => {
//     fetchRedirectResult();
//   }, []);
