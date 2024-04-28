import { useEffect } from "react";
import { useState } from "react";
import { BiSolidLeftArrowCircle } from "react-icons/bi";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import Style from "./ImageSlider.module.css";
import PropTypes from "prop-types";

const ImageSlider = ({ url, imageType, limit , page, category}) => {
  const apiKey = "43405808-0536caca1c8ef8b7684dbcf83";

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      const response = await fetch(
        `${getUrl}/?key=${apiKey}&page=${page}&category=${category}&per_page=${limit}&image_type=${imageType}&pretty=true`
        // `${getUrl}/?key=${apiKey}&q=yellow+flowers&pretty=true`
      );
      const findImg = await response.json();
      const data = await findImg.hits.map((item) => item);
      // console.log(data);

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (err) {
      setErrorMsg(err.errorMsg);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  // console.log(images);

  if (loading) {
    return <div>Loading Data Please wait....</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured : `${errorMsg}</div>;
  }

  const handlePreviou = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className={Style.main}>
      <div className={Style.container}>
        <BiSolidLeftArrowCircle
          onClick={handlePreviou}
          className={`${Style.arrow} ${Style.arrowLeft}`}
        />
        {images && images.length
          ? images.map((imgItem, index) => (
              // console.log(imgItem.videos.large.url)
              <img
                key={imgItem.id}
                src={imgItem.largeImageURL}
                alt={imgItem}
                // className={Style.currentImages}
                className={
                  currentSlide ===  index ? Style.currentImages : Style.hideImage
                }
              />

              // <video
              //   key={imgItem.id}
              //   src={imgItem.videos.large.url}
              //   className={
              //     currentSlide === index ? Style.currentImages : Style.hideImage
              //   }
              //   autoPlay
              // ></video>
            ))
          : null}
        <BiSolidRightArrowCircle
          onClick={handleNext}
          className={`${Style.arrow} ${Style.arrowRight}`}
        />
        <span className={Style.circleIndicators}>
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  // className={Style.circleIndicator}
                  className={
                    currentSlide === index
                      ? Style.circleIndicator
                      : Style.updateImge
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
};



ImageSlider.propTypes = {
  url: PropTypes.string,
  imageType: PropTypes.string,
  limit: PropTypes.number,
  page: PropTypes.string,
  category: PropTypes.string
}



export default ImageSlider;
