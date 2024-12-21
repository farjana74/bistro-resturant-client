const MenuItem = ({ item }) => {
  const { name, recipe, image, category, price } = item;
  return (
    <div className="d-flex justify-content-around align-content-center border">
      <div>
        <img
          style={{ borderRadius: "0px 200px 200px 200px",width:"118px",height:"104px" }}
          src={image}
          alt=""
        />
      </div>
      <div className="ps-3">
        <h4 style={{fontSize:"20px",fontWeight:400,color:'#151515'}}>{name}..................</h4>
        <p style={{fontSize:"16px",fontWeight:400,color:"#737373"}} className="pt-2">
          {recipe}
        </p>
      </div>
      <div>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
