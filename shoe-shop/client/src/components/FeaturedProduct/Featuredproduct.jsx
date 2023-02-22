import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import "./Featuredproduct.css"
import axios from 'axios';
import useFetch from '../../hooks/useFetch';

const Featuredproduct = () => {
    const [selected, setselected] = useState("featured");
    const {data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${selected}`)
    const lists = [
        {
            id: "featured",
            title: "featured"
        },
        {
            id: "latest",
            title: "Latest"
        },
        {
            id: "bestseller",
            title: "BestSeller"
        },
        {
            id: "special",
            title: "Special"
        }
    ]

    const featureImages = [
        "https://images.unsplash.com/photo-1548863227-3af567fc3b27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRvdGUlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",

"https://images.unsplash.com/photo-1610282081854-9c311350beb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRvdGUlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
"https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRvdGUlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
"https://images.unsplash.com/photo-1621466550398-ac8062907657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dG90ZSUyMGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"

    ]

    console.log(data)
    return (
        <div className='featured p-5'>
            <div className='banner flex flex-wrap justify-between flex-row gap-3'>
                {
                    featureImages.map(img => (
                        <Link to="/products">
                        <img className='h-[300px] w-[100%]'
                            src={img} />
    
                    </Link>
                    ))
                }
   
            </div>

            <div className='flex flex-row justify-center gap-5 mt-14'>
                {
                    lists.map(i =>
                    <span key={i.id} className={`tab pointer ${selected === i.id ? "active" : ""}`} onClick={() => setselected(i.id)}>{i.title}</span>
                    )

                    // lists.map((item) =>  <div key={item.id} className={`${selected === item.id ? "Active" : ""}`} >hhghg{item}</div>)
                }

            </div>

            <div className='min-h-[250px] flex flex-wrap justify-center md:justify-start gap-5 mt-14'>
                {
                 loading ? "loading" :  data.map(item => (
                        <Card item={item} />
                    ))

                }


            </div>

            <div className='py-10 m-auto w-[100%] flex justify-center'>
                <button className='bg-black text-white px-4 py-2'>VIEW MORE BAGS</button>

            </div>


        </div>
    )
}

export default Featuredproduct