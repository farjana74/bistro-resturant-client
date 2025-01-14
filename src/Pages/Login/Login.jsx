import { useEffect, useRef, useState } from "react";
import loginForm from "../../assets/others/authentication1.png";
import { Button, Form } from "react-bootstrap";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
 
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisable(false)
      alert("Captcha Matched");
    } else {
      setDisable(true)
      alert("Captcha Does Not Match");
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
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 col-12 col-sm-12 ">
          <img className="w-100" src={loginForm} alt="" />
        </div>
        <div className="col-md-6 col-12 col-sm-12">
          <div className="shadow">
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
                  ref={captchaRef}
                  name="captcha"
                  style={{ formStyle }}
                  placeholder="Type Above Captcha"
                />
                <button
                  onClick={handleValidateCaptcha}
                  type="button"
                  className="btn btn-outline-success  mt-2"
                >
                  Validate
                </button>
              </Form.Group>

              {/* <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
              >
                <Form.Control
                  style={{ formStyle }}
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel> */}

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="I am not a Robet" />
              </Form.Group>

              <Button disabled={disable}
                style={{
                  backgroundColor: "rgba(209, 160, 84)",
                  border: 0,
                  borderRadius: "8px",
                }}
                className="w-100"
                variant="primary"
                type="submit"
              >
                Sign in
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
