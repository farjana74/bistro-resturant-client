import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
        {/* dashboard sidebar */}
      <div>
        <ul>
          <li><NavLink to ='/dashboard/cart'>My Cart</NavLink></li>
        </ul>
      </div>


      {/* dashboard content */}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
