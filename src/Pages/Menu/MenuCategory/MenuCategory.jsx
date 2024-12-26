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
    </div>
  );
};

export default MenuCategory;
