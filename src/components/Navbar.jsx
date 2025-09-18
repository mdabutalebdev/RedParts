import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-red-700'> 
        <div className="container mx-auto flex items-center justify-between">
            <div className="left w-[40%] py-5">
                <ul className='flex items-center gap-10'>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Track Order</a></li>
                </ul>
            </div>
            <div className="center w-[20%] bg-white py-5">
                Auto parts for Cars, trucks and motorcycles
            </div>
            <div className="right flex items-center justify-end py-5 gap-10 bg-gray-400 w-[40%]">
                <a href="#">Compare: 0</a>
                <div className="">
                    <label htmlFor="currency">Currency:</label>
                    <select name="currency" id="">
                    <option value="usd">USD</option>
                    <option value="Euro">Euro</option>
                    <option value="Pound">Pound</option>
                </select>
                </div>
                <div className="">
                    <label htmlFor="Language">Language:</label>
                    <select name="english" id="">
                    <option value="english">english</option>
                    <option value="Russian">Russian</option>
                    <option value="RTL">RTL</option>
                </select>
                </div>
                 
            </div>
        </div>
    </div>
  )
}

export default Navbar