import { Button, Card } from "react-bootstrap";
import "./FoodCart.css";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const FoodCart = ({ item }) => {
  const { name, recipe, image, category, price } = item;

  const {user} = useAuth()
  const handleAddToCart = (food) => {
    if(user && user.email){
      // send
    }
    else{
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    }
  };
  return (
    <div>
      <Card style={{}}>
        <Card.Img
          variant="top"
          style={{ objectFit: "cover" }}
          className=""
          src={image}
        />
        <p
          style={{
            backgroundColor: "black",
            color: "#ffff",
            position: "absolute",
            right: 0,
            marginTop: 4,
            marginRight: 4,
          }}
          className="px-2"
        >
          ${price}
        </p>
        <Card.Body style={{ height: "auto" }}>
          <Card.Title style={{ textAlign: "center" }}>{name}</Card.Title>
          <Card.Text className="px-2" style={{}}>
            {recipe}
          </Card.Text>
          <div className="text-center">
            <Button
              onClick={handleAddToCart}
              className="foodCart-button"
              variant="primary"
            >
              ADD TO CART
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCart;
