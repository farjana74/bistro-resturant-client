const Footer = () => {
  const footerStyle = {
    fontSize: "16px",
    fontWeight: 500,
    margin: "3px",
  };
  return (
    <div className=" mt-5 ">
      <div className="">
        <div className="row">
          <div
            style={{
              backgroundColor: "#1F2937",
              color: "#ffff",
              textAlign: "center",
            }}
            className=" p-5 col-md-6 col-12"
          >
            <h3 style={{ fontSize: "2rem" }} className="py-3">
              Contact Us
            </h3>
            <p style={footerStyle}>123 ABS Street, Uni 21, Banglades</p>
            <p style={footerStyle}>+88 123456789</p>
            <p style={footerStyle}>Mon - Fri: 08:00 - 22:00</p>
            <p style={footerStyle}>Sat - Sun: 10:00 - 23:00</p>
          </div>
          <div
            style={{
              backgroundColor: "#111827",
              color: "#ffff",
              textAlign: "center",
            }}
            className="p-5 col-md-6 col-12"
          >
            <h3 className="py-3">Follow Us</h3>
            <p>Join us on social media</p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#151515", marginBottom:0 }}>
        <p
          style={{ textAlign: "center", color: "#ffff", fontSize: "16px" }}
          className=" py-3"
        >
          Copyright © CulinaryCloud. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
