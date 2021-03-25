import React from "react";
import image1 from "../../report_images/1.png";
import image2 from "../../report_images/2.png";
import image3 from "../../report_images/3.png";
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

      <div className="img-report">
        <img alt="img-3" className="report-images" src={image3} />
      </div>
    </div>
  );
}
