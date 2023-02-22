import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.scss"

const Card = ({item}) => {
  return (

    <Link to={`/product/${item.id}`}>
    <div className='card h-[] w-[130px] flex gap-1 flex-col'>
        <div className='img'>
            {
                item?.attributes.isNew && <span>New Design</span>
            }
            <img src={import.meta.env.VITE_SECRET_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url} alt="" className='mainimg'/>
            <img src={import.meta.env.VITE_SECRET_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url} alt="" className='secondimg'/>

        </div>
        <p className='text-base m-0'>{item?.attributes.title}</p>
        <div className='flex gap-5 '>
            <p className='text-[12px] text-md m-0 font-bold line-through text-[grey]'>${item.oldPrice || item?.attributes.price + 20}</p>
            <p className='text-[12px] text-md font-bold '>${item?.attributes.price}</p>
        </div>
    </div>
     </Link>
  
  )
}

export default Card