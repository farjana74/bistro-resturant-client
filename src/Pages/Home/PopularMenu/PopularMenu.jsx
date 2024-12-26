import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <div className=" container my-5 pb-5">
      <div className="">
        <SectionTitle
          subTitle="---Check it out---"
          mainTitle="FROM OUR MENU"
        ></SectionTitle>
      </div>

      <MenuCategory
        items={popularItems}
        description="rem Ipsum has been the industry’s standard dummy 
             text ever since the 1500s, when an unknown printer took a galley 
             of type and scrambled it to make a type specimen book."
      ></MenuCategory>
    </div>
  );
};

export default PopularMenu;
