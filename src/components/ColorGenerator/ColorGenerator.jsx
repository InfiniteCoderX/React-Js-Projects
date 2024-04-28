import Style from './ColorGenerator.module.css'
import {useEffect, useState} from 'react'

const ColorGenerator = () => {


    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color , setColor] = useState('#424141')

    const randomColorUtilty = (value) => {
        return Math.floor(Math.random() * value )
    }
    const handleRandomHexGenerator = () => {
        const hexaDecimal = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor = "#";
        
        for(let i = 0; i< 6; i++){
            hexColor += hexaDecimal[randomColorUtilty(hexaDecimal.length)]
        }   
        setColor(hexColor)
    }
    const handleRandomRgbGenerator = () => {
        const red = randomColorUtilty(256)
        const green = randomColorUtilty(256)
        const blue = randomColorUtilty(256)
    
       setColor(`rgb(${red}, ${green}, ${blue})`);
    }

    useEffect(() => {
      typeOfColor === 'hex' ? handleRandomHexGenerator() : handleRandomRgbGenerator()
      console.log("use effect")
    },[typeOfColor])


  return (
    
    <div className={Style.container} style={{backgroundColor: color}}>
    <div className={Style.content}>
        <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button onClick={typeOfColor === 'hex' ? handleRandomHexGenerator : handleRandomRgbGenerator}>Random Color Generator</button>

    </div>
      <div className={Style.display}>
        <h1>{typeOfColor === 'hex' ? "Hex Color : " : "RGB Color : "}
        {color}</h1>
        </div>
    
    </div>
  )
}

export default ColorGenerator
