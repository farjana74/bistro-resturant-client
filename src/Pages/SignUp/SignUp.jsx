import { Button, Form } from "react-bootstrap";
import signForm from "../../assets/others/authentication2.png"

const SignUp = () => {
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
            <img className="w-100" src={signForm} alt="" />
          </div>
          <div className="col-md-6 col-12 col-sm-12">
            <div className="">
              <Form
                // onSubmit={handleLogin}
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
                    {/* <LoadCanvasTemplate /> */}
                  </Form.Label>
                  <Form.Control
                    // ref={captchaRef}
                    name="captcha"
                    style={{ formStyle }}
                    placeholder="Type Above Captcha"
                  />
                  <button
                    // onClick={handleValidateCaptcha}
                    type="button"
                    className="btn btn-outline-success  mt-2"
                  >
                    Validate
                  </button>
                </Form.Group>
  
                
  
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="I am not a Robet" />
                </Form.Group>
  
                <Button 
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
              {/* <p className="text-center pt-2" style={{color:"#D1A054"}}><small>New Here? <Link to ='/signup'> Create New Account</Link></small></p> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;