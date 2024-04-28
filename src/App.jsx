import "./App.css";
// import Accordion from './components/Accordion/Accordion'
// import ColorGenerator from './components/ColorGenerator/ColorGenerator'
// import StarRating from './components/StarRating/StarRating'
// import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMorreData from "./components/LoadMoreData/LoadMorreData";

function App() {
  return (
    <>
      {/* Accordion component */}
      {/* <Accordion /> */}

      {/* Color Generator */}
      {/* <ColorGenerator /> */}

      {/* Star Rating */}
      {/* <StarRating noOfStar={5}/> */}

      {/* Image Slider */}

      {/* <ImageSlider
        // url={"https://pixabay.com/api/videos"}
        url={"https://pixabay.com/api"}
        imageType={"photo"}
        limit={10}
        page={Math.floor(Math.random()*40)}
        category={'science'}
      /> */}

      {/* Load more data componet */}

      <LoadMorreData />
    </>
  );
}

export default App;
