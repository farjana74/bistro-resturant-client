import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import recomendRecepe from "../../../assets/home/slide5.jpg";
import recomendRecepe2 from "../../../assets/home/slide4.jpg";
import recomendRecepe3 from "../../../assets/home/slide3.jpg";
import "./ChefRecomend.css";
const ChefRecomend = () => {
  return (
    <div className="container">
      <div className="">
        <SectionTitle
          subTitle="---Should Try---"
          mainTitle="CHEF RECOMMENDS"
        ></SectionTitle>
      </div>
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-4 col-md-4 col-12 border">
            <img style={{height:"35%"}} className="w-100" src={recomendRecepe} alt="" />
            <div style={{ backgroundColor: "#F3F3F3" }}>
              <div className="py-4 text-center">
                <h5>Casunut Salad</h5>
                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
              </div>
              <div className="text-center pb-3">
                <button
                  className="featured-button"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img style={{height:"35%"}} className="w-100" src={recomendRecepe2} alt="" />
            <div style={{ backgroundColor: "#F3F3F3" }}>
              <div className="py-4 text-center">
                <h5>Casunut Salad</h5>
                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
              </div>
              <div className="text-center pb-3">
                <button className="featured-button"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img style={{height:"35%"}} className="w-100" src={recomendRecepe3} alt="" />
            
            <div style={{ backgroundColor: "#F3F3F3" }}>
              <div className="py-4 text-center">
                <h5>Casunut Salad</h5>
                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
              </div>
              <div className="text-center pb-3">
                <button className="featured-button"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecomend;
