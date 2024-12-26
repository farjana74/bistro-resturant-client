import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import "react-tabs/style/react-tabs.css";
import FoodCart from "../../../components/FoodCart/FoodCart";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ["salad","pizza","soup","desert","drink"]
    const{category} = useParams()
    const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
 
  console.log(category)
  const drinks = menu.filter((item) => item.category === "drinks");
  const desert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <>
      <Cover
        title="OUR SHOP"
        description="Would you like to try a dish?"
        coverImg={orderImg}
      ></Cover>
      <div className="container">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desert</Tab>
            <Tab>Drink</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel> <OrderTab items={pizza}></OrderTab></TabPanel>
          <TabPanel> <OrderTab items={soup}></OrderTab></TabPanel>
          <TabPanel> <OrderTab items={desert}></OrderTab></TabPanel>
          <TabPanel> <OrderTab items={drinks}></OrderTab></TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Order;
