import React from "react";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlices";
import { toast } from "react-hot-toast";
const CartItem = ({ item, itemindex }) => {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed");
    }

    return (
        <div>
            <div className=" lg:max-w-[28vw] flex lg:space-x-14 space-x-4 border-b-2 border-black pb-5 px-2">
                <div>
                    <img src={item.image} alt="img" className="lg:mt-9 mt-6 lg:h-[160px] lg:w-[150px]" />
                </div>
                <div>
                    <h1 className="font-bold lg:text-xl text-sm lg:mt-7 mt-6 text-gray-700 ">{item.title}</h1>
                    <h1 className="lg:max-w-[20vw] max-w-[60vw] lg:text-sm text-xs font-semibold text-gray-500 lg:mt-4 mt-2">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
                    <div className="flex space-x-40 ">
                        <p className="text-green-600 font-bold mt-3">${item.price}</p>
                        <div onClick={removeFromCart} className="mt-4 bg-red-200 p-2 rounded-full">
                            <HiArchiveBoxXMark />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CartItem