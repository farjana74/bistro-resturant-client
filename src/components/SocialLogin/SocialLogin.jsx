import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from './../../hooks/useAuth';

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/')
            })
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
