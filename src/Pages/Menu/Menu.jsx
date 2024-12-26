import PopularMenu from "../Home/PopularMenu/PopularMenu";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import desertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
const Menu = () => {
  return (
    <div>
      <Cover
        coverImg={menuImg}
        title="Our Menu"
        description="Would you like to try a dish"
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        coverImg={desertImg}
        title="DESSERTS"
        description="rem Ipsum has been the industry’s standard dummy 
        text ever since the 1500s, when an unknown printer took a galley 
        of type and scrambled it to make a type specimen book."
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        coverImg={pizzaImg}
        title="PIZZA"
        description="Lorem Ipsum has been the industry’s
         standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover coverImg={saladImg} title="SALADS" description="Lorem Ipsum has been the industry’s
       standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type 
        and scrambled it to make a type specimen book."></Cover>
      <PopularMenu></PopularMenu>
      <Cover coverImg={soupImg} title="SOUPS" description="Lorem Ipsum has been the industry’s
       standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type 
        and scrambled it to make a type specimen book."></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
