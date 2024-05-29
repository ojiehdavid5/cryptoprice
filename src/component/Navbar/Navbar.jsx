import React from 'react'
import Logo from '../../assets/logo.png'
import arrow from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-[10%] py-[20px] text-[#ddd] border-b-2 border-[#3c3c3c]'>
        <img src={Logo} alt=""  className='w-[12vw]'/>
        <ul className='flex gap-[40px] '>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Features</li>
            <li className='cursor-pointer'>Pricing</li>
            <li className='cursor-pointer'>Blog</li>
        </ul>
        <div className=" flex items-center gap-[1vw]">
            <select className='py-[5px] px-[8px] rounded-md border-2 border-[#fff] bg-transparent color-[#fff]'>
                <option value='usd' className='bg-[#09005c] text-[#fff]'>USD</option>
                <option value='eur'>EUR</option>
                <option value='eur'>GBP</option>
            </select>
            <button className='flex  items-center gap-[10px] py-[10px] px-[25px] rounded-[20px] text-[15px]  font-[500] text-[#393939] bg-[#fff] border-0 '>Sign up <img src={arrow} className='w-[13px]' alt=''/></button>
        </div>
      
    </div>
  )
}

export default Navbar
