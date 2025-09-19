import { HiMenuAlt2 } from "react-icons/hi";
import { LuUserRound } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { LuShoppingCart } from "react-icons/lu";



const Menu = () => {
  return (
    <div className="bg-white shadow-2xl py-5"> 
        <div className="container mx-auto flex items-center justify-around">
            <div className="flex items-center gap-4">
               <button className="flex items-center gap-2">
                <HiMenuAlt2 />
               Menu
               </button>
               <ul className="flex items-center gap-5">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">Pages</a></li>
               </ul>

            </div>
            <div className="">
               <h3 className="font-bold text-3xl"><span className="text-red-600">RED</span>PARTS</h3>
            </div>
            <div className="flex items-center gap-4">
                <GrFavorite className="text-3xl"/>

               <div className="flex items-center gap-1">
                   <LuUserRound className="text-3xl"/>
                   <div className="">
                    <p className="text-[12px] text-gray-400">hello log In</p>
                    <h3 className="text-base font-medium">My Account</h3>
                   </div>
               </div>
               <div className="flex items-center gap-1">
                <LuShoppingCart className="text-3xl font-normal"/>

                   <div className="">
                    <p className="text-[12px] text-gray-400">Shopping Card</p>
                    <h3 className="text-base font-medium">$0.00</h3>
                   </div>
               </div>

            </div>
        </div>
    </div>
  )
}

export default Menu