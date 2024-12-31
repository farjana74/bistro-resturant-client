import Cover from "../../Shared/Cover/Cover";
import contactBanner from "../../../assets/contact/banner.jpg";
import ContactLocation from "./ContactLocation/ContactLocation";

const ContactUs = () => {
  return (
    <>
      <Cover
        title="CONTACT US"
        description="Would you like to try a dish"
        coverImg={contactBanner}
      ></Cover>

      <ContactLocation></ContactLocation>


    </>
  );
};

export default ContactUs;
