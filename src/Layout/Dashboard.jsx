import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

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
  };
  return (
    <div className="container-fluid">
      {/* dashboard sidebar */}
      <div className="row">
      <div style={menuContent} className="p-3 col-md-3 col-sm-5">
        <div className="text-center py-3">
          <h5 style={{ fontSize: "23px", fontWeight: 900 }}>BISTRO BOSS</h5>
          <h6 style={{ fontSize: "17px", fontWeight: 700 }}>Restaurant</h6>
        </div>
        <ul style={{ listStyleType: "none" }} className="pt-3">
          <li style={contentStyle}>
            <AiFillHome style={contentIcon} className="text-white" />
            <NavLink to="/dashboard/cart">User Home</NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content */}
      <div className="col-md-7 col-sm-5">
        <Outlet></Outlet>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
