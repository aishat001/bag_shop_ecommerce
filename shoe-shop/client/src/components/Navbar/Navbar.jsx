import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  { AccountCircle, ArrowDropDown, Close, Menu, Public, Search, ShoppingCart }  from "@mui/icons-material"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [open, setOpen] = useState(false);

    const products = useSelector((state) => state.cart.products)
    if(open === true) {
        document.body.style.overflow = "hidden"
      }  else {
        document.body.style.overflow = "auto"
    
      }

  return (
    <div className='navbar w-[100vw] h-[70px]  fixed z-10 bg-white top-[0]'>
        <div className='container flex flex-row justify-between m-auto w-[90%] h-[100%] items-center'>
        <div className='logo'>
            <img src="/logo.jpeg" alt="logo" height="100px" width="80px"
            />
        </div>

        <div className='hidden lg:inline-flex gap-5'>
            <Link to="/">Home</Link>
            <Link to="/products/id">Products</Link>
            <Link to="/product/:id">Product</Link>
            <Link to="/product/:id">About Us</Link>
            <Link to="/product/:id">Contact</Link>
        </div>

        <div className='flex lg:hidden ml-auto pr-5' onClick={() => setOpenNav(true)}>
        <Menu/>
        </div>


        {
            openNav === true && (
                <>
                <div className='z-10 flex flex-col fixed p-10  w-[70vw] h-[100vh] top-[0] left-[0] bg-[black] text-[white] gap-5'>
                <Close className='relative -top-[30px] -left-[30px]' onClick={() => setOpenNav(false)}/>
                <Link to="/" onClick={() => setOpenNav(false)}>Home</Link>
                <Link to="/products/id">Products</Link>
                <Link to="/product/:id">Product</Link>
                <Link to="/product/:id">About Us</Link>
                <Link to="/product/:id">Contact</Link>

            </div>
            <div className='absolute w-[100vw] h-[100vh] bg-[#00000096] z-1 top-[0] left-[0]'></div>

            </>
            )
        }

        <div className='inline-flex  gap-5'>
            <span className='hidden lg:flex'>NGN <ArrowDropDown/> </span>
            <Link to="" className='hidden md:flex'><AccountCircle /></Link>
            

            <div className='relative' onClick={() => setOpen(!open)}><ShoppingCart/> 
            <span className='absolute h-[25px] w-[20px] rounded-[100%] text-black text-center -top-3 left-4'>{products.length}</span>
            </div>

            <Search/>

            <Public/>
        </div>
        </div>

        {
            open === true && 
                <div className='flex justify-center'><Cart open={open} setOpen={setOpen}/></div>
            
        }
    </div>
  )
}

export default Navbar