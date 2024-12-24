import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [review, setReview] = useState([]);
  console.log(review);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="container">
      <SectionTitle
        subTitle="What Our Clients Sa"
        mainTitle="TESTIMONIALS"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((showReview) => (
          <SwiperSlide key={showReview._id}>
            <div style={{ width: "70%" }} className="text-center mx-auto">
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Rating
                  style={{ maxWidth: 180 }}
                  value={showReview.rating}
                  readOnly
                />
              </div>
              <div>
                <FaQuoteLeft
                  className="my-5"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <p>{showReview.details}</p>
              <h4>{showReview.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
