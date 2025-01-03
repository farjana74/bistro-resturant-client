import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const ContactForm = () => {
  const formStyle = {
    BiBorderRadius:"8px",
    border:"1px solid #E8E8E8",
    backgroundColor:"#fff",
    FontSize:"16px",
    fontWeight:"400",
    color:"#A1A1A1"
  
  }
  return (
    <div className="py-5  container">
      <SectionTitle subTitle="Send Us a Message" mainTitle="CONTACT FORM"></SectionTitle>
      <Form className="p-5 mt-2" style={{backgroundColor:"#F3F3F3"}}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control style={{formStyle}} type="email" placeholder="Enter Your Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control style={{formStyle}} type="password" placeholder="Enter Your Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Phone</Form.Label>
        <Form.Control style={{formStyle}} placeholder="Enter Your Phone Number" />
      </Form.Group>

      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control style={{formStyle}} as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>

      

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="I amn't a Robet" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default ContactForm;
