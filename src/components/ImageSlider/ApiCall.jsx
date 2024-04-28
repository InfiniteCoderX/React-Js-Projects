import { useState } from "react"

const ApiCall = () => {

    const apiKey = "IuGs1YqWF0FpPxRLzgTDwouKKxsWrFh6kvvqnj6YYv0"

    const [images , setImages]  = useState([])


    const getImages = async () => {
        const resp = await fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
        const data = await resp.json()
        setImages(data.map( item => item.urls["regular"]))
    }


    // async function apiCall(){
    //     fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`).then(
    //         res => res
    //     ).then(
    //         data => setImages(data)
    //     )
        
    // }
    

    // const handleApiCall = () => {
    //     setImages()
    // }
    console.log(images.map((item) => {
        item.id
    }))

  return (
    <div className="container">
        <div><button onClick={(e) => getImages()}>Click</button></div>
        {/* <div>
        <img src={images.map((imgItems) => {
            console.log(imgItems)
        })} alt="" />
      </div> */}
    </div>
  )
}

export default ApiCall
