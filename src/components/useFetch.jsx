import React, {useState, useEffect} from "react";
import { data } from "../data";


export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(data);

    // const getProducts = async () => {
    //     const reponse = await fetch(url);
    //     const products = await reponse.json();
    //     setProducts (products);
    //     setLoading(false);
    // }

    // useEffect (()=>{
    //     getProducts();
    // },[url])

    return {loading, products}

}