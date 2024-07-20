import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { TiHomeOutline } from "react-icons/ti";
import logo from "../d mart.png"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Navbar = () => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(dispatch)
    return (
        <div>
            <div className="flex lg:space-x-52  lg:pl-40 items-center lg:h-20 h-14 space-x-3">
                <div className="lg:ml-16">
                    <NavLink to="/">
                        <div>
                            <img src={logo} alt="img" className="lg:h-110 lg:w-[10rem] h-30 w-28"></img>
                        </div>
                    </NavLink>
                </div>
                <NavLink to="/">
                    <div className="text-white lg:text-xl text-xs">
                        <span></span><p className="font-semibold">Update location</p>
                    </div>
                </NavLink>
                <NavLink to="signin">
                    <div className="text-white text-sm">
                        <p className="lg:text-xl text-xs ">Sign in</p>
                        <p className="font-semibold">Account & Lists</p>
                    </div>
                </NavLink>
                <NavLink to="login">
                    <div className="text-white text-sm">
                        <p className="lg:text-xl text-xs">Returns</p>
                        <p className="font-semibold">& Orders</p>
                    </div>
                </NavLink>
                <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                    <NavLink to="/"><TiHomeOutline className="h-8 w-8" /></NavLink>
                    <div className="relative">
                        <NavLink to="/cart">
                            <FaShoppingCart className="lg:text-3xl text-lg" />
                            <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center 
                        items-center animate-bounce rounded-full text-white">{cart.length}</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar