import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Catagory from "../Catagory/Catagory";
import Menu from "../Menu/Menu";



const Home = () => {
    return (
        <div className="container">
            <Banner></Banner>
            <Catagory></Catagory>
            <br />
            <br />
            <BistroBoss></BistroBoss>
            {/* <Menu></Menu> */}
        </div>
    );
};

export default Home;