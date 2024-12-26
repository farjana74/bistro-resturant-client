import { Button, Card } from "react-bootstrap";
import "./FoodCart.css";
const FoodCart = ({ item }) => {
  const { name, recipe, image, category, price } = item;
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
            <Button className="foodCart-button" variant="primary">
              ADD TO CART
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCart;
