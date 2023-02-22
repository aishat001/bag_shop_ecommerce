import { Cancel, Delete } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';
import { useNavigate } from 'react-router';

const Cart = ({open, setOpen}) => {
    const stripePromise = loadStripe("pk_test_51MaruBCQzbP9V7n83HEZkZvc9p0J9PJLD2NdVhpKgWrPisFEGrie92NZ4Niwkak18Igfu7z3TaNs3Ngii0y5hSwz00RWCCMXuI")
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const totalPrice = () => {
        let total = 0;
        products.map(item => {
            total += item.price * item.quantity
        }
        )

        return total.toFixed(2)
    }

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;

            const res = await makeRequest.post("/orders", {
                products,
            })

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className='w-[100vw] md:w-[700px]  h-[100vh] md:h-[max-content]  flex flex-col gap-5 absolute top-[0] md:top-[300px] bg-white z-40'>
                <h2 className='text-3xl bg-black w-[100vw] md:w-[700px] p-3 text-white flex justify-between items-center'>Shopping cart  <Cancel className=' text-[30px]' onClick={() => setOpen(!open)}/></h2>
                {
                    products.length === 0 && (

                        <>
                                                <div className='text-center'>your cart is enmty</div>

                        <button className='bg-black text-white py-2 px-3' onClick={() => setOpen(!open)} >Continue Shopping</button>

                        </>


                    )
                }


                {
                    products.length > 0 && (
                        <>
                            <div className='flex flex-col gap-5 px-10'>
                                {
                                    products?.map(item => (
                                        <div className='flex gap-3 items-center' key={item.id}>
                                            <div className='image w-[80px] h-[100px]'>
                                                <img src={import.meta.env.VITE_SECRET_UPLOAD_URL + item.img} alt className='w-[100%] h-[100%]' />
                                            </div>

                                            <div className='desc flex flex-col justify-between gap-4'>
                                                <h3>{item.title}</h3>
                                                <p>{item?.desc?.substring(0, 20)}</p>
                                                <p>{item.quantity} * {item.price}</p>
                                            </div>

                                            <div className='ml-auto' onClick={() => dispatch(removeItem(item.id))}>
                                                <Delete className='text-[red]' />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex flex-row justify-between mt-20 px-10'>
                                <h3 className='text-xl font-[500]'>SUBTOTAL</h3>
                                <h3 className='text-xl font-[500]'>${totalPrice()}</h3>
                            </div>

                            <div className='px-10'>
                            <button className='bg-black text-white py-2 px-3' onClick={handlePayment}>Continue Shopping</button>

                                <button className='bg-black text-white py-2 px-3' onClick={handlePayment}>PROCEED TO CHECKOUT</button>
                            </div>

                            <button className='text-[red] mr-auto px-10' onClick={() => dispatch(resetCart())}>RESET CART</button>

                        </>
                    )

                }

            </div>

            <div className='overlay fixed z-20 bg-black w-[100vw] h-[100vh] top-[0] opacity-[.7]' onClick={() => setOpen(!open)}></div>

        </>
    )
}

export default Cart