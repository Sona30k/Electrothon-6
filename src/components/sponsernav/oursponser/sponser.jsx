import React from "react";
import "./style.css"; 
import {
  devfoliop,
  orkes,
  polygonp,
  replitp,
  hoverrobotix,
  taskade,
  wolfram,
  verbwire3,
} from "../../../assets/images";

 

const ImageGallery = () => {
  const imageUrls = [
    {
      img: orkes,
      alt: "ORKES LOGO",
    },
    {
      img: polygonp,
      alt: "POLYGON LOGO",
    },
    {
      img: devfoliop,
      alt: "DEVFOLIO LOGO",
    },
  ];
  const imageUrls2 = [
    {
      img: replitp,
      alt: "REPLIT LOGO",
    },
    {
      img: verbwire3,
      alt: "VERBWIRE LOGO",
    },
  ];
  const imageUrls3 = [
    {
      img: wolfram,
      alt: "WOLFRAM LOGO",
    },
    {
      img: taskade,
      alt: "TASKADE LOGO",
    },
    {
      img: hoverrobotix,
      alt: "HOVERROBOTIX LOGO",
    },
  ];

  return (
    <>
      <div className="containerlolall ek chill1">
        <div className="text-white flex justify-center text-4xl z-[999] fnt cheems ">
          Oracle Sponsors
        </div>
        <div className="image chill2">
          <ul className="image-gallery">
            {imageUrls.map((imageUrl, index) => (
              <li className="list" key={index}>
                <img
                  src={imageUrl.img}
                  alt={imageUrl.alt}
                  className="gallery-image z-[999] burn"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="containerlolall do">
        <div className="text-white flex justify-center text-4xl p-2 fnt z-[999] cheems ">
          Wizard Sponsors
        </div>
        <div className="image  corr">
          <ul className="image-gallery">
            {imageUrls2.map((imageUrl, index) => (
              <li className="list" key={index}>
                <img
                  src={imageUrl.img}
                  alt={imageUrl.alt}
                  className="gallery-image z-999"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="containerlolall tin ullu">
        <div className="text-white sm:text-4xl flex justify-center text-3xl   pb-4 align-middle z-[999]   ">
          Knight Sponsors
        </div>
        <div className="image corr fem">
          <ul className="image-gallery">
            {imageUrls3.map((imageUrl, index) => (
              <li className="list" key={index}>
                <img
                  src={imageUrl.img}
                  alt={imageUrl.alt}
                  className="gallery-image imageurl3 z-999"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center sm:mt-20 text-center sm:text-xl pb-7 text-gray-100">
        Interested in sponsoring? Mail at:
        <br />
        <a href="mailto:spec@nith.ac.in" className="text-blue-500">
          {" "}
          spec@nith.ac.in
        </a>
      </div>
    </>
  );
};

export default ImageGallery;
