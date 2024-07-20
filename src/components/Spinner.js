import React from "react";
import './Spinner.css';

const Spinner = () =>{
    return(
        <div className="h-screen flex justify-center items-center mb-10 bg-white">
        <div class="custom-loader"></div>
        </div>
    )
}
export default Spinner