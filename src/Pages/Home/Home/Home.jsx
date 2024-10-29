import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Catagory from "../Catagory/Catagory";



const Home = () => {
    return (
        <div className="container">
            <Banner></Banner>
            <Catagory></Catagory>
            <br />
            <br />
            <BistroBoss></BistroBoss>
        </div>
    );
};

export default Home;