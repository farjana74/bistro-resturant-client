import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import "./Catagory.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Catagory = () => {

  return (
    <div className="container">
      <div className="pb-5">
        <SectionTitle
          subTitle="From 11:00am to 10:00pm"
          mainTitle="ORDER ONLINE"
        ></SectionTitle>
      </div>
      <div className="catagory-main">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="catagory-image" src={slide1} alt="" />
            <div>
              <h3 className="image-title">Salad</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="catagory-image" src={slide2} alt="" />
            <div>
              <h3 className="image-title">Soup</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="catagory-image" src={slide3} alt="" />
            <div>
              <h3 className="image-title">Pizzas</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="catagory-image" src={slide4} alt="" />
            <div>
              <h3 className="image-title">desserts</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="catagory-image" src={slide5} alt="" />
            <div>
              <h3 className="image-title">Salad</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Catagory;
