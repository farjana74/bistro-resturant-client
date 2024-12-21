import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import recomendRecepe from "../../../assets/home/slide5.jpg"
const ChefRecomend = () => {
  return (
    <div>
      <div className="py-5">
        <SectionTitle
          subTitle="---Should Try---"
          mainTitle="CHEF RECOMMENDS"
        ></SectionTitle>
      </div>
      <div className="container">
        <div className="row g-5">
            <div className="col-lg-4 col-md-4 col-12">
                <img className="" src={recomendRecepe} alt="" />
                <div>
                    <h5>Casunut Salad</h5>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
                </div>
                <div>
                    <button>ADD TO CART</button>
                </div>

            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <img className="" src={recomendRecepe} alt="" />
                <div>
                    <h5>Casunut Salad</h5>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
                </div>
                <div>
                    <button>ADD TO CART</button>
                </div>

            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <img className="" src={recomendRecepe} alt="" />
                <div>
                    <h5>Casunut Salad</h5>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
                </div>
                <div>
                    <button>ADD TO CART</button>
                </div>

            </div>

        </div>

      </div>
    </div>
  );
};

export default ChefRecomend;
