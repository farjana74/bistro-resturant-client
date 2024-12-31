import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { IoIosTimer } from "react-icons/io";

const ContactLocation = () => {
  return (
    <div>
      <div className="py-3">
        <SectionTitle
          subTitle="Visit Us"
          mainTitle="CONTACT FORM"
        ></SectionTitle>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-md-4 col-12">
         <div>
         <FiPhoneCall />
         </div>
         <div>
            <h4>PHONE</h4>
            <p>+38 (012) 34 56 789</p>
         </div>

        </div>
        <div className="col-md-4 col-12">
         <div>
         <SlLocationPin />
         </div>
         <div>
            <h4>PHONE</h4>
            <p>+38 (012) 34 56 789</p>
         </div>

        </div>
        <div className="col-md-4 col-12">
         <div>
         <IoIosTimer />
         </div>
         <div>
            <h4>PHONE</h4>
            <p>+38 (012) 34 56 789</p>
         </div>

        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
