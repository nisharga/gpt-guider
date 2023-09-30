import PhoneImage from "./SignIn_Parts/PhoneImage"
import GmailSVG from './../../assets/SocialMediaIcon/GmailSVG';
import FacebookSVG from "../../assets/SocialMediaIcon/FacebookSVG";
import TwitterSVG from "../../assets/SocialMediaIcon/TwitterSVG";
import SocialButton from "./SignIn_Parts/SocialButton";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useLocation, useNavigate  } from "react-router-dom";
import OrBorder from './SignIn_Parts/OrBorder';
import OTPverify from "./OTPverify/OTPverify";

 
const SignIn = () => {
  const { user, setLoading, googlesignIn, twittersignIn, facebooksignIn} = useContext(AuthContext);
  const [signInError, setSignInError] = useState("");
  
  {/* Google Sign In Authentication */}
    const gmailSignIn = () => {
      googlesignIn()
      .then((res) => {
        const user = res.user;  
        console.log(user);
        setLoading(false)
      })
      .catch((err) => setSignInError(err.message));  
    }

     {/* Facebook Sign In Authentication */}
    const facebookSignIn = () => {
      facebooksignIn()
      .then((res) => {
        const user = res.user;  
        console.log(user);
        setLoading(false)
         
      })
      .catch((err) => setSignInError(err.message)); 
    }
    
     {/* Twitter Sign In Authentication */}
    const twitterSignIn = () => {
      twittersignIn()
      .then((res) => {
        const user = res.user;  
        console.log(user);
        setLoading(false)
        
      })
      .catch((err) => setSignInError(err.message)); 
    } 

    // Redirect to that (from page) after login
    let navigate = useNavigate();
    let location = useLocation(); 
    let from = location.state?.from?.pathname || "/";
    if (user) {
      navigate(from, { replace: true });
    }
     // Redirect to that from page after login
  return (
     <>
<section className="py-24">
  <div className="container px-6">
    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between"> {/* Flex two div   */} 
      <PhoneImage/> {/* 1.SVG phone image */}
      <div className="md:w-8/12 lg:ml-6 lg:w-5/12"> {/* 2.All SignIN Options */} 
        <h1 className="text-xl md:text-4xl font-bold text-[#35DC9D] mb-6">
            Sign in to your account 
        </h1> 

        {/* Button takes this 3 as props: bgcolor, handleClick, children */}
        <SocialButton bgcolor="bg-[#3e65cf]" handleClick={gmailSignIn}>
            <GmailSVG/> Continue with Gmail
        </SocialButton> 
        
        {/* Button takes this 3 as props: bgcolor, handleClick, children */}
        <SocialButton bgcolor="bg-[#3b5998]" handleClick={facebookSignIn}>
           <FacebookSVG/> Continue with Facebook
        </SocialButton>
        
        {/* Button takes this 3 as props: bgcolor, handleClick, children */}
          <SocialButton bgcolor="bg-[#55acee]" handleClick={twitterSignIn}>
           <TwitterSVG/> Continue with Twitter
          </SocialButton>
          <div className="text-[#ff0000] text-lg font-bold">{signInError}</div>
          <OrBorder/>
          {/* Mobile Number Verify  */}
          <OTPverify/>
      </div> 
    </div>
  </div>
</section>
     </>
  )
}

export default SignIn