import { Balance, Compare, Favorite, HeartBroken } from '@mui/icons-material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Tab from '../../components/Tab/Tab';
import useFetch from '../../hooks/useFetch';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
    const id  = useParams().id
    const [selectedImage, setSelectedImage] = useState("img");
    const [selected, setselected] = useState("description");
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch()
    const { data, loading, error } = useFetch(`/products/${id}?populate=*`) 

    const lists = [
        {
            id: "description",
            title: "Description"
        },
        {
            id: "shipping",
            title: "Shipping"
        },
        {
            id: "review",
            title: "Review"
        }
    ]


    return (
        <div className='container m-auto'>
            {
                loading ?
                 "loading" 
                 :
                 <>
                             <div className=' flex flex-col md:flex-row justify-center gap-10 my-16'>
                <div className='left flex-1 flex flex-col-reverse md:flex-row justify-end  gap-8'>
                    <div className='images w-[90vw] md:w-[70px] flex flex-row md:flex-col gap-3 m-auto md:m-0'>
                        <img src={import.meta.env.VITE_SECRET_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url} onClick={() => setSelectedImage("img")} height="70px" width="70px" />
                        <img src={import.meta.env.VITE_SECRET_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url} onClick={() => setSelectedImage("img2")} height="70px" width="70px" />

                    </div>
                    <div className='w-[90vw] md:w-[30vw] lg:w-[20vw] h-[370px] flex m-auto md:m-[unset]'>
                        <img src={import.meta.env.VITE_SECRET_UPLOAD_URL +
                  data?.attributes?.[selectedImage]?.data?.attributes?.url} alt="" height="100%" width="100%" className='!h-[365px] m-auto ' />
                    </div>
                </div>

                <div className='right flex-1 m-auto md:ml-0 w-[90vw] md:w-[330px] flex flex-col gap-5'>
                    <h2 className='text-5xl'>{data?.attributes?.title}</h2>
                    <h2 className='text-3xl font-[500]'>{data?.attributes?.price}</h2>

                    <div className="addtoCart flex ">
                        <span className='w-[50px] h-[50px] text-3xl text-center' onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>-</span>
                        <input type="number" className='w-[50px] h-[50px] border text-center' value={quantity}/>
                        <span className='w-[50px] h-[50px] text-3xl text-center' onClick={() => setQuantity(quantity + 1)}>+</span>
                    </div>

                    <button className='bg-black text-white w-max py-2 px-3'
                    onClick={() => dispatch(addToCart({
                        id:data.id,
                        title: data.attributes.title,
                        desc: data.attributes.desc,
                        price: data.attributes.price,
                        quantity,
                        img: data.attributes.img.data.attributes.url
                    }))}
                    >ADD TO CART</button>

                    <div className='flex gap-3 mt-4'>
                        <button className=''><Favorite /> ADD TO WISHLIST</button>
                        <button><Balance /> ADD TO COMPARE</button>

                    </div>

                    <button className='bg-black text-white w-max py-2 px-3'>CONTACT SELLER</button>



                </div>

            </div>

            <div>
                <div className=' flex justify-center gap-10 md:gap-16'>
                    {
                        lists.map(i =>
                            <span key={i.id} className={`tab text-base md:text-2xl border-b-4 border-solid border-[#00000033] pb-1 pointer ${selected === i.id ? "active" : ""}`} onClick={() => setselected(i.id)}>{i.title}</span>
                        )

                    }
                </div>

                <div className='md:ml-[100px] py-8 px-5'>
                    
                         <p className='text-lg'>{data?.attributes?.desc}</p>)
                    
                </div>


            </div>

                 </>
            }


   
        </div>
    )
}

export default Product