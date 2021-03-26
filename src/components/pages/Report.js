import React from "react";
import image1 from "../../report_images/1.png";
import image2 from "../../report_images/2.png";
import image3 from "../../report_images/3.png";
import image4 from "../../report_images/4.png";
import image5 from "../../report_images/5.png";
import image6 from "../../report_images/6.png";
import "../../App.css";

export default function Report() {
  return (
    <div className="products">
      <h1>
        Graphical representation <br /> of the analyzed report
      </h1>
      <div className="img-flexbox">
        <img alt="img-1" className="report-images" src={image1} />
        <img alt="img-2" className="report-images" src={image2} />
      </div>
      <div className="img-flexbox larger">
        <img alt="img-3" className="report-images" src={image3} />
        <img alt="img-4" className="report-images" src={image4} />
      </div>
      <div className="img-flexbox larger">
        <img alt="img-5" className="report-images" src={image5} />
        <img alt="img-6" className="report-images" src={image6} />
      </div>
    </div>
  );
}
