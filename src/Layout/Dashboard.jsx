import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RiReservedFill } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { MdMenu } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
const Dashboard = () => {
  const menuContent = {
    backgroundColor: "#D1A054",
    // width: "20%",
    // height: "100%",
  };
  const contentIcon = {
    width: "27px",
    height: "27px",
    marginRight: "8px",
    marginBottom: "4px",
  };
  const contentStyle = {
    fontSize: "16px",
    fontWeight: 700,
    paddingTop:'26px',
  };
  const navStyle = {
    fontSize: "16px",
    fontWeight: 500,
    color:"#151515"
  }
  return (
    <div className="container-fluid">
      {/* dashboard sidebar */}
      <div className="row">
      <div style={menuContent} className="p-3 col-md-2 col-sm-5">
        <div className="text-center py-3">
          <h5 style={{ fontSize: "23px", fontWeight: 900 }}>BISTRO BOSS</h5>
          <h6 style={{ fontSize: "17px", fontWeight: 700 }}>Restaurant</h6>
        </div>
        <ul style={{ listStyleType: "none" }} className="py-3">
          <li style={contentStyle}>
            <AiFillHome style={contentIcon} className="text-white" />
            <NavLink to ="/dashboard/userHome" style={navStyle}  className ="text-decoration-none text-white" >USER HOME</NavLink>
          </li>
          <li style={contentStyle}>
            <RiReservedFill  style={contentIcon} className="" />
            <NavLink to ="/dashboard/reservation" style={navStyle}  className ="text-decoration-none" >RESERVATION</NavLink>
          </li>
          <li style={contentStyle}>
            <MdPayment style={contentIcon} />
            <NavLink style={navStyle}  className ="text-decoration-none " to="/dashboard/payment">PAYMENT</NavLink>
          </li>
          <li style={contentStyle}>
            <FaCartShopping style={contentIcon} className="" />
            <NavLink style={navStyle}  className ="text-decoration-none" to="/dashboard/cart">MY CART</NavLink>
          </li>
          <li style={contentStyle}>
            <MdRateReview style={contentIcon} className="" />
            <NavLink style={navStyle}  className ="text-decoration-none " to="/dashboard/review">ADD REVIEW</NavLink>
          </li>
          <li style={contentStyle}>
            <TbBrandBooking style={contentIcon} className="" />
            <NavLink style={navStyle}  className ="text-decoration-none " to="/dashboard/bookings">MY BOOKING</NavLink>
          </li>
          <div>
            <hr style={{height:'2px',color:'#ffff'}} className=""/>
          </div>
          <li style={contentStyle}>
            <AiFillHome style={contentIcon} className="" />
            <NavLink to ="/" style={navStyle}  className ="text-decoration-none" >HOME</NavLink>
          </li>
          <li style={contentStyle}>
            <MdMenu style={contentIcon} className="" />
            <NavLink to ="/menu" style={navStyle}  className ="text-decoration-none" >MENU</NavLink>
          </li>
          <li style={contentStyle}>
            <FaShoppingBag style={contentIcon} className="" />
            <NavLink to ="/order/salad" style={navStyle}  className ="text-decoration-none" >Shop</NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content */}
      <div className="col-md-9 col-sm-5 p-3">
        <Outlet></Outlet>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
