import { add, remove } from "../redux/Slices/CartSlices";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const Product = ({ post }) => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addFromCart = () => {
        dispatch(add(post));
        toast.success("added item");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("remove item");
    }
    return (
        <div className="flex flex-col items-center justify-between bg-white
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl border-2 hover:shadow-lg">
            <div>
                <p className=" text-gray-700  font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
            </div>
            <div>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left ">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
            <div className="h-[180px]">
                <img src={`${post.image}`} className="h-full w-full" />
            </div>
            <div className="flex justify-between gap-12 items-center w-full mt-5">
                <div>
                    <p className="text-green-600 font-semibold">${post.price}</p>
                </div>
                {
                    cart.some((p) => p.id === post.id) ?
                        (
                            <button onClick={removeFromCart} className="text-gray-950 border-gray-700 border-2 lg:rounded-full font-bold 
                text-[10px] lg:text-[12px] lg:p-1 lg:px-3 p-1 uppercase  transition duration-300 ease-in rounded-lg">
                                Remove Item
                            </button>) :
                        (<button onClick={addFromCart} className="text-gray-700 border-gray-700 border-2 lg:rounded-full  font-bold 
                text-[10px] lg:text-[12px] lg:p-1 lg:px-3 p-1 uppercase transition duration-300 ease-in bg-green-400 rounded-lg">
                            Add to Cart
                        </button>)
                }
            </div>
        </div>
    );
};
export default Product;