import FoodCart from "../../../components/FoodCart/FoodCart";

const OrderTab = ({items}) => {
    return (
        <div className="row">
                    {items.map((item) => (
                          <div key={item._id} className="col-lg-4 col-md-4 col-12">
                          <FoodCart item={item} ></FoodCart>
                          </div>
                        ))}
                      
                    </div>
    );
};

export default OrderTab;