import { useState } from "react";
import { images } from "./Data/data.json";
import "./App.css";

function App() {
  const [currentImg, setCurrentImg] = useState(0);

  const clickNextHandler = () => {
    if (currentImg === 0 || currentImg) {
      setCurrentImg((prevState) => prevState + 1);
    }
    if (currentImg === 3) {
      clickNextHandler;
      setCurrentImg(0);
    }
  };

  const clickPrevHandler = () => {
    if (currentImg === 0 || currentImg) {
      setCurrentImg((prevState) => prevState - 1);
    }
    if (currentImg === 0) {
      setCurrentImg(3);
    }
  };

  return (
    <>
      <div className="App">
        <h1 className="title">Our Products Gallery</h1>
        <div className="slider-container">
          <div className="image-container">
            <img
              src={images[currentImg]["img-mobile"]}
              alt=""
              className="mobile"
            />
            <img src={images[currentImg].img} alt="" className="desktop" />
            <i
              className="fa-solid fa-angles-left btn prev"
              onClick={clickPrevHandler}
            ></i>
            <i
              className="fa-solid fa-angles-right btn next"
              onClick={clickNextHandler}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
