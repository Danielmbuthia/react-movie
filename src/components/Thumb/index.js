import React from "react";
import {Image} from "./Thumb.styles";
// styles

const Thumb = ({image,movieId,clickable}) =>(
    <div>
        <Image src ={image} alt='Movie-thumb'/>
    </div>
)
export default Thumb;
