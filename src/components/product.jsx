import React from "react";
import PropType from 'prop-types'
import defaultImage from '../assets/flowers-19830_1280.jpg'
const Product = ({name, image, price})=> {
    const url = image && image.url;
    return (
        <div>
            <li>
                <img src={url || defaultImage} alt={name} />
                <h3>{name}</h3>
                <h3>${price || "--"}</h3>
            </li>
        </div>
    )
}

Product.prototype = {
    image : PropType.object.isRequired,
    name : PropType.string.isRequired,
    price : PropType.number.isRequired
}

// Product.defaultProps ={
//     image : {url : defaultImage},
//     name: "default name",
//     price: "--"
// }

export default Product