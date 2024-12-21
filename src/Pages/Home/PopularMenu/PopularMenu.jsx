import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu,setMenu] = useState([])
  useEffect(()=>{
  fetch('menu.json')
  .then(res=>res.json())
  .then(data=>{
    const popularItems = data.filter(item => item.category==='popular')
    setMenu(popularItems)})
  },[])
  return (
    <div className="">
      <div className="py-5">
        <SectionTitle
          subTitle="---Check it out---"
          mainTitle="FROM OUR MENU"
        ></SectionTitle>
      </div>
      <div className="container">
      <div className="row g-5">
      
        
        {
          menu.map(item=>(
            <div key={item._id} className="col-lg-6 col-12">
              <MenuItem  item={item}></MenuItem>
            </div>


          ))
        }
        
      </div>
      </div>
    </div>
  );
};

export default PopularMenu;
