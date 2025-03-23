import { Button, Card } from "react-bootstrap";
import "./FoodCart.css";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const FoodCart = ({ item }) => {
  const { name, recipe, image, category, price,_id } = item;

  const {user} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure = useAxiosSecure()
  const handleAddToCart = (food) => {
    if(user && user.email){
      // send cart item to the database
      const cartItem = {
        menuId:_id,
        email:user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts',cartItem)
      .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }
    
    else{
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state:{from:location}} )
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
