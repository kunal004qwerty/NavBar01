import React from "react";
import "./Gallery.scss";

import Img001 from "../Assets/Wallpaper/001.jpg";
import Img002 from "../Assets/Wallpaper/002.jpg";
import Img003 from "../Assets/Wallpaper/003.jpg";
import Img004 from "../Assets/Wallpaper/004.jpg";
import Img005 from "../Assets/Wallpaper/005.jpg";
import Img006 from "../Assets/Wallpaper/006.jpg";
import Img007 from "../Assets/Wallpaper/007.jpg";
import Img008 from "../Assets/Wallpaper/008.jpg";
import Img009 from "../Assets/Wallpaper/009.jpg";
import Img010 from "../Assets/Wallpaper/010.jpg";
import Img011 from "../Assets/Wallpaper/011.jpg";
import Img012 from "../Assets/Wallpaper/012.jpg";
import Img013 from "../Assets/Wallpaper/013.jpg";
import Img014 from "../Assets/Wallpaper/014.jpg";
import Img015 from "../Assets/Wallpaper/015.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="container">
        <div className="item item-1">
          <img src={Img005} alt=""></img>
        </div>
        <div className="item item-2">
          <img src={Img003} alt=""></img>
        </div>
        <div className="item item-3">
          <img src={Img002} alt=""></img>
        </div>
        <div className="item item-4">
          <img src={Img004} alt=""></img>
        </div>
        <div className="item item-5">
          <img src={Img001} alt=""></img>
        </div>
        <div className="item item-6">
          <img src={Img006} alt=""></img>
        </div>
        <div className="item item-7">
          <img src={Img007} alt=""></img>
        </div>
        <div className="item item-8">
          <img src={Img008} alt=""></img>
        </div>
        <div className="item item-9">
          <img src={Img009} alt=""></img>
        </div>
        <div className="item item-1">
          <img src={Img010} alt=""></img>
        </div>
        <div className="item item-2">
          <img src={Img011} alt=""></img>
        </div>
        <div className="item item-3">
          <img src={Img012} alt=""></img>
        </div>
        <div className="item item-4">
          <img src={Img013} alt=""></img>
        </div>
        <div className="item item-5">
          <img src={Img014} alt=""></img>
        </div>
        <div className="item item-6">
          <img src={Img015} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
