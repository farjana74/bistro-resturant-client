import PopularMenu from "../Home/PopularMenu/PopularMenu";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import desertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div style={{overflowX:"hidden"}}>
      <Cover
        coverImg={menuImg}
        title="Our Menu"
        description="Would you like to try a dish"
      ></Cover>

      {/* main cover */}
      <SectionTitle
        subTitle="---DON'T MISS---"
        mainTitle="TODAY'S OFFER"
      ></SectionTitle>

      {/* offered item */}
      <MenuCategory
        items={offered}
        img={desertImg}
        description="rem Ipsum has been the industry’s standard dummy 
             text ever since the 1500s, when an unknown printer took a galley 
             of type and scrambled it to make a type specimen book."
      ></MenuCategory>

      {/* desert item */}
      <MenuCategory
        items={desert}
        title="DESERTS"
        img={desertImg}
        description="rem Ipsum has been the industry’s standard dummy 
             text ever since the 1500s, when an unknown printer took a galley 
             of type and scrambled it to make a type specimen book."
      ></MenuCategory>

      {/* PIZZA item */}
      <MenuCategory
        items={pizza}
        title="PIZZA"
        img={pizzaImg}
        description="rem Ipsum has been the industry’s standard dummy 
             text ever since the 1500s, when an unknown printer took a galley 
             of type and scrambled it to make a type specimen book."
      ></MenuCategory>

      {/* SALAD item */}
      <MenuCategory
        items={salad}
        title="SALAD"
        img={saladImg}
        description="rem Ipsum has been the industry’s standard dummy 
             text ever since the 1500s, when an unknown printer took a galley 
             of type and scrambled it to make a type specimen book."
      ></MenuCategory>

      {/* SOUP item */}
      <MenuCategory
        items={soup}
        title="SOUP"
        img={soupImg}
        description="rem Ipsum has been the industry’s standard dummy 
             text ever since the 1500s, when an unknown printer took a galley 
             of type and scrambled it to make a type specimen book."
      ></MenuCategory>
    </div>
  );
};

export default Menu;
