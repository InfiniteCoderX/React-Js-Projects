import { BsFillStarFill } from "react-icons/bs";
import Style from "./StarRating.module.css";
import { useState } from "react";
import PropTypes from 'prop-types'


const StarRating = ({ noOfStar = 5} ) => {


    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (currentIndex) => {
        setRating(currentIndex)
        
    }
    const handleEnter = (currentIndex) => {
       setHover(currentIndex)
        
    }
    const handleLeave = () => {
        setHover(rating)
        
    }

  return (
    <div className={Style.container}>
        {
            [...Array(noOfStar)].map( (_,index) => {

                index = index + 1

                return <BsFillStarFill key={index}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleEnter(index)}
                onMouseLeave={handleLeave}
                size={40}
                className={index <= (hover || rating) ? Style.active : Style.inactive}
                />
            } )
        }
    </div>
  )
}


StarRating.propTypes = {
    noOfStar: PropTypes.number.isRequired
}


export default StarRating

