import { useContext, useEffect, useState } from "react";
import loginForm from "../../assets/others/authentication1.png";
import { Button, Form } from "react-bootstrap";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      // console.log(email,password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User login successfully",
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
          },
        });
      });
      navigate(from, { replace: true });

  };
  const formStyle = {
    BiBorderRadius: "8px",
    border: "1px solid #E8E8E8",
    backgroundColor: "#fff",
    FontSize: "16px",
    fontWeight: "400",
    color: "#A1A1A1",
  };
  return (
    <div className="container  my-5">
      <div className="row p-3 shadow">
        <div className="col-md-6 col-12 col-sm-12 ">
          <img className="w-100" src={loginForm} alt="" />
        </div>
        <div className="col-md-6 col-12 col-sm-12">
          <div className="">
            <Form
              onSubmit={handleLogin}
              className="p-5 mt-2"
              style={{ backgroundColor: "#F3F3F3" }}
            >
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  style={{ formStyle }}
                  placeholder="Enter Your Email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  style={{ formStyle }}
                  placeholder="Enter Your Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>
                  <LoadCanvasTemplate />
                </Form.Label>
                <Form.Control
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  style={{ formStyle }}
                  placeholder="Type Above Captcha"
                />
                {/* <button
                 
                  type="button"
                  className="btn btn-outline-success  mt-2"
                >
                  Validate
                </button> */}
              </Form.Group>

              <Button
                disabled={disable}
                style={{
                  backgroundColor: "rgba(209, 160, 84)",
                  border: 0,
                  borderRadius: "8px",
                }}
                className="w-100"
                variant="primary"
                type="submit"
                value="login"
              >
                Sign in
              </Button>
            </Form>
            <p className="text-center pt-2" style={{ color: "#D1A054" }}>
              <small>
                New Here? <Link to="/signup"> Create New Account</Link>
              </small>
            </p>
            <div>
              <div>
                <SocialLogin> Google</SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
