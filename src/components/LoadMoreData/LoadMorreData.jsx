import { useEffect } from "react";
import { useState } from "react";
import Style from "./LoadMorreData.module.css";

const LoadMorreData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  // const [error , setError] = useState('')

  const url = `https://dummyjson.com/products?limit=20&skip=${
    count === 0 ? 0 : count * 20
  }`
  async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
  }

  useEffect(() => {
    console.log("one")
    ;
    setLoading(true);

    fetchData(url)
      .then((data) => {
        if (data && data.products && data.products.length) {
          setProducts((pvData) => [...pvData, ...data.products]);
          setLoading(false);
        }
      })
      .catch((err) => {
        return <div>something went wrong!!! {err}</div>;
      })
      .finally(() => {
        setLoading(false);
      });
      return () => {
        
      }
  }, [count]);

  // const rerenderStop = useRef(false);

  // useEffect(() => {
  //   if (rerenderStop.current === false) {
  //   console.log("one");
  //   fetchData();
  //   console.log("two")
  //   rerenderStop.current = true
  // }
  // }, [count]);

  // useEffect(() => {
  //   console.log("one")
  //   const data = fetchData;
  //   data(count);
  //   return () => {
  //   console.log("two")
  //     data;
  //   }
  // },[count]);

  if (loading) {
    return <div>Content is loading please wait....</div>;
  }

  return (
    <div className={Style.container}>
      <div className={Style.productContainer}>
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className={Style.product}>
                <img
                  src={item.thumbnail}
                  alt={item.description}
                  className={Style.img}
                />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className={Style.btnContainer}>
        <button onClick={() => setCount(count + 1)} className={Style.btn}>
          {loading ? "loading...": "Load More"}
        </button>
      </div>
    </div>
  );
};

export default LoadMorreData;
