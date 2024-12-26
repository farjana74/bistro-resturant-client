import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import "react-tabs/style/react-tabs.css";
import FoodCart from "../../../components/FoodCart/FoodCart";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
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
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Order;
