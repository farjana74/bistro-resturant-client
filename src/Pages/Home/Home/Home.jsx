import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Catagory from "../Catagory/Catagory";
import PopularMenu from "../PopularMenu/PopularMenu";




const Home = () => {
    return (
        <div className="container">
            <Banner></Banner>
            <Catagory></Catagory>
            <br />
            <br />
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>


        </div>
    );
};

export default Home;