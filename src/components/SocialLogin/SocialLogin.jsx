import { FcGoogle } from "react-icons/fc";
import useAuth from './../../hooks/useAuth';

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
        })
    }
  return (
    <div>
      <div>
        <button onClick={handleGoogleSignIn} className="border-0">
       
            <FcGoogle
              style={{ width: "30px", height: "30px" }}
              
            >
              {" "}
              Google
            </FcGoogle>
         
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
