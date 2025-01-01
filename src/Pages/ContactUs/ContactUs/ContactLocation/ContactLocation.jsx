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
            <div
              style={{ height: "80px", backgroundColor: "#D1A054" }}
              className="w-100 text-center"
            >
              <FiPhoneCall
                className="mt-3"
                style={{ height: "50px", width: "50px", color: "#fff" }}
              />
            </div>
            <div className="border px-3 pb-3">
              <div
                style={{ backgroundColor: "#F3F3F3" }}
                className="text-center  border"
              >
                <div className="py-5">
                  <h4>PHONE</h4>
                  <p>+38 (012) 34 56 789</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div
              style={{ height: "80px", backgroundColor: "#D1A054" }}
              className="w-100 text-center"
            >
              <SlLocationPin
                className="mt-3"
                style={{ height: "50px", width: "50px", color: "#fff" }}
              />
            </div>
            <div className="border px-3 pb-3">
              <div
                style={{ backgroundColor: "#F3F3F3" }}
                className="text-center  border"
              >
                <div className="py-5">
                  <h4>ADREESS</h4>
                  <p>+38 (012) 34 56 789</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div
              style={{ height: "80px", backgroundColor: "#D1A054" }}
              className="w-100 text-center"
            >
              <IoIosTimer
                className="mt-3"
                style={{ height: "50px", width: "50px", color: "#fff" }}
              />
            </div>
            <div className="border px-3 pb-3">
              <div
                style={{ backgroundColor: "#F3F3F3" }}
                className="text-center  border"
              >
                <div className="py-5">
                  <h4>WORKING HOURS</h4>
                  <p className="">Mon - Fri: 08:00 - 22:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
