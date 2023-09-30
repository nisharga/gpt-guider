
import { useState } from 'react';
import "./OTPverify.css";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import app from '../../../Firebase/firebase.config';
 

const OTPverify = () => {
    const [confirmationResult, setConfirmationResult] = useState(); 
    
    // auth
    const auth = getAuth(app); 
 
    const [error, setError] = useState();
    

    const handleLogin = (e) => {
        e.preventDefault();
        const phoneNumber = e.target.phoneNumber.value; 
        if (phoneNumber) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
            const appVerifier = window.recaptchaVerifier;
            // signInWithPhoneNumber
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
              .then((confirmationResult) => {  
                console.log(confirmationResult);
                setConfirmationResult(confirmationResult);
              })
              .catch((error) => {
                setError(error.message);
              });
          }
    } 

    

    const handleVerify = (e) => {
        const input1 = e.target.input1.value;
        const input2 = e.target.input2.value;
        const input3 = e.target.input3.value;
        const input4 = e.target.input4.value;
        const input5 = e.target.input5.value;
        const input6 = e.target.input6.value;

        // all inputs at once
        let result = '' + input1 + input2 + input3 + input4 + input5 + input6; 
        const otp = parseInt(result);  
        
        e.preventDefault();

        
        if (otp) {
            console.log(otp);
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(user);
              }).catch((error) => {
                setError(error.message);
              });
               
             
        }
    }

  return (
    <>
    <div>
        <h1 className="text-xl md:text-4xl font-bold text-[#35DC9D] mb-6">
            Sign in with phone number 
        </h1> 
    
    { !confirmationResult &&
    <form onSubmit={handleLogin}>
        <div className="flex">    
        <span
            className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 text-[#fff]"
            >BD</span
        >
         <input className="w-full px-4 py-2 border rounded-r-md focus:outline-none focus:ring focus:ring-primary-100"
           type="text" name="phoneNumber" placeholder="Phone Number" />
        
        </div>    
        <div id='recaptcha-container' className='mt-3 '></div>
        <input type="submit" value="Send" className="w-full px-4 font-medium text-center glassbtn"/>   
        
    </form> 
    }


 
           {
            confirmationResult &&
            <form onSubmit={handleVerify} className="mt-12">
            <div className="OTP_inputs text-center"> 
                <input name="input1" type="text" maxLength="1" /> 
                <input name="input2" type="text" maxLength="1" /> 
                <input name="input3" type="text" maxLength="1" /> 
                <input name="input4" type="text" maxLength="1" /> 
                <input name="input5" type="text" maxLength="1" /> 
                <input name="input6" type="text" maxLength="1" /> 
           </div> 
         <input type="submit" className="w-full px-4 font-medium text-center glassbtn" value="Verify"></input>
            </form> 
           }
           <div>{error}</div>
    </div>
    </>
  )
}

export default OTPverify 