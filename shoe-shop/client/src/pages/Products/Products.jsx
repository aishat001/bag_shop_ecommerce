import React, { useState } from 'react'
import { useParams } from 'react-router';
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';

const Products = () => {
const catId = parseInt(useParams().id)
    const [maxPrice, setmaxPrice] = useState(5000);
    const [sort, setSort] = useState();
    const [selectedCategory, setSelectedCartegory] = useState([]);


    const lists = [
        {
            id: "1",
            title: "All"
        },
        {
            id: "2",
            title: "Backpack design"
        },
        {
            id: "3",
            title: "Animate tote"
        },

        {
            id: "4",
            title: "Letters tote"
        },
        {
            id: "5",
            title: "xx rope design"
        }


    ]

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
    
        setSelectedCartegory(
          isChecked
            ? [...selectedCategory, value]
            : selectedCategory.filter((item) => item !== value)
        );
      };

    return (

        <div className=' w-[90vw] m-auto'>
            <div className='flex py-10 gap-2'>
                <div className='pt-16 sticky left flex-[1] flex flex-col gap-5'>
                    <div className='filter '>
                        <h2 className='font-[600]'>Product Categories</h2>
                     
                        {
                            lists?.map(item => (
                                <div className='flex gap-1' key={item.id}>
                            <input type="checkbox"
                             id={item.id}
                             value={item.id}
                            onChange={handleChange}
                             />
                            <label htmlFor='1' className='h-[25px]'>{item.title}</label>
                        </div>
                            ))
                        }
                    </div>
                    <div className='filter '>
                        <h2 className='font-[600]'>Filter by price</h2>
                        <div className='flex item-center gap-1'>
                            <span>0</span>
                            <input type={"range"} min={0} max={5000} onChange={(e) => setmaxPrice(e.target.value)} />
                            <span>{maxPrice}</span>
                        </div>
                    </div>
                    <div className='filter '>
                        <h2 className='font-[600]'>Filter by sort</h2>
                        <div>
                            <input type="radio" id="asc" name='price' value="asc" onChange={(e) => setSort("asc")}/>
                            <label htmlFor='asc'>Price (Lowest first)</label>
                        </div>
                        <div>
                            <input type="radio" id="desc" name='price'  value="desc" onChange={(e) => setSort("desc")} />
                            <label htmlFor='desc'>Price (Highest first)</label>
                        </div>
                    </div>
                </div>

<div className='right flex-[4]'>
<h2 className='font-[600] text-2xl pb-10'>ALL BAGS</h2>
<div className=' flex flex-wrap gap-4 justify-start '>

<List maxPrice={maxPrice} sort={sort}  selectedCategory={selectedCategory} />
</div>
</div>
            
            </div>



        </div>

    )
}

export default Products