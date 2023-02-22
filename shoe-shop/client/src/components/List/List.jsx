import React from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'

const List = ({ selectedCategory, maxPrice, sort }) => {


    const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id]=1${selectedCategory.map(i => `
    &[filters][sub_categories][id][$eq]=${i}`)}
    &[filters][price][$lte]=${maxPrice}`)


    console.log(data)
    console.log(selectedCategory)
    return (
        <div>
            {
                loading ? "loading" : data.map(item => (
                    <Card item={item} key={item.id} />
                ))
            }
        </div>



    )
}

export default List