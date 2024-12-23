import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import CallUs from "../CallUs/CallUs";
import Catagory from "../Catagory/Catagory";
import ChefRecomend from "../ChefRecomend/ChefRecomend";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";




const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Catagory></Catagory>
            <br />
            <br />
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecomend></ChefRecomend>
            <Featured></Featured>


        </div>
    );
};

export default Home;