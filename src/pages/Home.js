import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchData() {
        setLoading(true);

        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data);
            console.log(data);
        }
        catch (error) {
            setPosts([]);
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {
                loading ? <Spinner /> :
                    posts.length > 0 ?
                        (
                        <div>
                            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                lg:grid-cols-4 max-w-6xl p-2 lg:mx-auto space-y-10 space-x-5 min-h-[80vh] mx-10">
                                {
                                    posts.map((post) => (
                                        <Product key={post.id} post={post} />
                                    )
                                    )
                                }
                            </div>
                        </div>
                        ) :
                        <div className="flex justify-center mt-60 font-bold text-lg">
                            <p>No Data Found</p>
                        </div>
            }
        </div>
    );
}
export default Home