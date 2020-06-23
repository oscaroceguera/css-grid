import React from "react";
import "./styles.css";

const ImageGallery = () => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <div class="gallery">
        <div class="gallery-item horizontal">
          <span>1</span>
          <img src="https://www.placecage.com/400/200" />
        </div>
        <div class="gallery-item">
          <span>2</span>
          <img src="https://www.placecage.com/200/200" />
        </div>
        <div class="gallery-item vertical">
          <span>3</span>
          <img src="https://www.placecage.com/200/400" />
        </div>
        <div class="gallery-item">
          <span>4</span>
          <img src="https://www.placecage.com/202/202" />
        </div>
        <div class="gallery-item horizontal">
          <span>5</span>
          <img src="https://www.placecage.com/600/300" />
        </div>
        <div class="gallery-item vertical horizontal ">
          <span>6</span>
          <img src="https://www.placecage.com/404/404" />
        </div>
        <div class="gallery-item">
          <span>7</span>
          <img src="https://www.placecage.com/223/213" />
        </div>
        <div class="gallery-item horizontal vertical">
          <span>8</span>
          <img src="https://www.placecage.com/407/406" />
        </div>
        <div class="gallery-item vertical">
          <span>9</span>
          <img src="https://www.placecage.com/207/306" />
        </div>

        <div class="gallery-item">
          <span>10</span>
          <img src="https://www.placecage.com/212/213" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
