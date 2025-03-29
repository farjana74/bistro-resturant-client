import useCart from "../../../hooks/useCart";


const Cart = () => {
    const [cart]= useCart();
    const totalPrice = cart.reduce((total,item)=>total+item.price,0)

    return (
        <div className="d-flex justify-content-evenly">
            <h2>TOTAL ORDER:{cart.length}</h2>
            <h2>TOTAL PRICE:{totalPrice}</h2>
            <button style={{color:'#D1A054',borderRadius:'8px',padding:'14px 17px'}}>PAY</button>
        </div>
    );
};

export default Cart;