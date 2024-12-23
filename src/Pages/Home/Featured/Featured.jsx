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
    <div className="featured-bg container-fluid w-100 ">
      <div>
        <SectionTitle
          otherstyle={otherstyle}
          subTitle="---Check it out----"
          mainTitle="FROM OUR MENU"
        ></SectionTitle>
      </div>
      <div className="d-flex position justify-content-center align-items-center container p-5">
        <div className="w-50">
          <img style={{ width: "90%" }} src={featuredBg} alt="" />
        </div>
        <div className="w-50 text-white">
          <h6>March 20, 2023</h6>
          <h3>WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <div className="pt-3">
            <button style={{
                border:0,
                backgroundColor:" rgba(0, 0, 0, 0)",
                color:"white",
                borderBottom: "1px solid #ffff"
            }}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
