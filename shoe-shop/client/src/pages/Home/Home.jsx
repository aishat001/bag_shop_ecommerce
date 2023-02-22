import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import Categories from '../../components/Categories/Categories'
import Featuredproduct from '../../components/FeaturedProduct/Featuredproduct'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_SECRET_API_URL+"/products",
          {
            headers: {
              Authorization:  "bearer " + import.meta.env.VITE_SECRET_API_TOKEN,
            },
          });
          setData(res.data.data)
        console.log(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, []);


  return (
    <div className=''>
      <Slider />
      <Featuredproduct />
      {/* <Categories/> */}
      {/* <Featuredproduct type={Trending}/> */}

    </div>
  )
}

export default Home