
import "./SectionTitle.css";
const SectionTitle = ({subTitle, mainTitle}) => {

    const subStyle = {
        color: "#D99904",
        fontsize: "20px",
        fontStyle: "italic",
        fontWeight: 400,
        textAlign:"center"
      };
    const mainStyle = {
        color: "#151515",
        fontsize: "3 rem",
        fontStyle: "italic",
        fontWeight: 400,
        textAlign:"center",
        width:"30%",
      
        
      };
    return (
        <div className="pt-5 pb-3">
            <p className="" style={subStyle} >....{subTitle}....</p>
            <h3 className="border-top border-bottom p-3 mx-auto" style={mainStyle} >{mainTitle}</h3>
        </div>
    );
};

export default SectionTitle;