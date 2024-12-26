import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img, title, description }) => {
  return (
    <div className="container py-5">
      {title && (
        <Cover coverImg={img} title={title} description={description}></Cover>
      )}
      <div className="row g-5 py-5">
        {items.map((item) => (
          <div key={item._id} className="col-lg-6 col-12">
            <MenuItem item={item}></MenuItem>
          </div>
        ))}
      </div>
      <div className="text-center ">
       <Link to={`/order/${title}`}> <button
          style={{
            fontSize: 20,
            fontWeight: 500,
            borderTop: 0,
            borderRight: 0,
            borderLeft: 0,
            backgroundColor: "#fff",
          }}
          className="text-uppercase p-2 "
        >
          Order Your Favorite Food
        </button></Link>
      </div>
    </div>
  );
};

export default MenuCategory;
