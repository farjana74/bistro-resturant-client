import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredBg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  const otherstyle = {
    color: "#ffff",
    fontsize: "3 rem",
    fontStyle: "italic",
    fontWeight: 400,
    textAlign: "center",
    width: "30%",
  };
  return (
    <div className="featured-bg  w-100 mb-5 ">
      <div>
        <SectionTitle
          otherstyle={otherstyle}
          subTitle="---Check it out----"
          mainTitle="FROM OUR MENU"
        ></SectionTitle>
      </div>
      <div className=" container p-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 col-12">
            <img style={{ width: "90%" }} src={featuredBg} alt="" />
          </div>
          <div className=" text-white col-md-6 col-12 gy-5">
            <h6>March 20, 2023</h6>
            <h3>WHERE CAN I GET SOME?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <div className="pt-3">
              <button
                style={{
                  border: 0,
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  color: "white",
                  borderBottom: "1px solid #ffff",
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
