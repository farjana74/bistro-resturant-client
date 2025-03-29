import { Table } from "react-bootstrap";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Cart = () => {
  const [cart] = useCart();
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="">
         <SectionTitle
        subTitle="---My Cart---"
        mainTitle="Wanna Add More"
      ></SectionTitle>
      <div className="d-flex justify-content-evenly pt-3">
        <h2>TOTAL ORDER: {cart.length}</h2>
        <h2>TOTAL PRICE: {totalPrice}</h2>
        <button
          className="text-white"
          style={{
            backgroundColor: "#D1A054",
            borderRadius: "8px",
            padding: "14px 17px",
            border: 0,
          }}
        >
          PAY
        </button>
      </div>
      <div className="pt-5 px-3">
        <Table bordered responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Item Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index}</th>
                <td>{item.name}</td>
                <td>
                  <img
                    style={{ width: "75px", height: "75px" }}
                    src={item.image}
                    alt=""
                  />
                </td>
                <td>{item.price}</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Cart;
