import { Button, Form } from "react-bootstrap";
import signForm from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const formStyle = {
    borderRadius: "8px",
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
              onSubmit={handleSubmit(onSubmit)}
              className="p-5 mt-2"
              style={{ backgroundColor: "#F3F3F3" }}
            >
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  {...register("name", { required: true })}
                  style={{ formStyle }}
                  placeholder="Enter Your Name"
                />

                {errors.name && (
                  <span style={{ color: "#C71304" }}>
                    This field is required
                  </span>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  {...register("email", { required: true })}
                  style={{ formStyle }}
                  placeholder="Enter Your Email"
                />
                {errors.email && (
                  <span style={{ color: "#C71304" }}>
                    This field is required
                  </span>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  {...register("password", { required: true })}
                  style={{ formStyle }}
                  placeholder="Password"
                />
                {errors.password && (
                  <span style={{ color: "#C71304" }}>
                    This field is required
                  </span>
                )}
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
                SignUp
              </Button>
            </Form>
            <p className="text-center pt-2" style={{ color: "#D1A054" }}>
              <small>
                Already Registered? <Link to="/login"> Go to login</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
