import React from 'react'

const Home = () => {
  return (
<div className="py-0 px-[10px] pb-[100px]">
    <div className=" mx:w-[600px] my-[80px] mx-auto flex  flex-col items-center text-center gap-[30px]">
        <h1 className='text-[4rem]'>Largest <br /> Crypto MarketPlace </h1>
        <p className='w-[75%] text-[#e3e3e3] leading-4'>Welcome  to the world Largest  cryptocurrency marketplace .sign up  to explore  more about cryptos. </p>
        <form action='' className='p-[8px] w-[40%] bg-[#fff] rounded-md text-[20px]  flex justify-between items-center gap-[10px]'>
            <input className='flex-1 text-[16px] border-0 p-[10px]  text-[#000]' type="text" placeholder='Search crypto' />
            <button  className='bg-[#7927ff] text-[#fff] text-[16px] py-[10px] px-[30px] rounded-md cursor-pointer'  type='submit' >Search </button>
        </form>
    </div>

    <div className=" max-xl:w-[800px] m-auto">
        <div className="">
            <p> #</p>
            <p> Coins</p>
            <p> Price</p>
            <p> 24H Change</p>
            <p>Market Cap</p>
        </div>
    </div>
    
    </div>      
  )
}

export default Home
