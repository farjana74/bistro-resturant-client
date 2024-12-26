
import "./Cover.css";
import { Parallax } from 'react-parallax';
const Cover = ({coverImg,title,description}) => {
    return (
      <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={coverImg}
      bgImageAlt="the dog"
      strength={-200}
  >
      <div className="menu-bg ">
        <div className="menu-section ">
          <div className="menu-description p-5">
            <h2 className="">{title}</h2>
            <p className="menu-details">
              {description}
            </p>
          </div>
        </div>
      </div>
  </Parallax>
        
    );
};

export default Cover;