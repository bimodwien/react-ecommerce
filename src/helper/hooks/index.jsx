 import { useEffect, useState } from "react";

function useFetch(parameter) {
    const {url, config = {}, defaultData, depedencyArray = [], onSuccess} = parameter;
    const [result, setResult] = useState(defaultData);

    function fetchProduct() {
        fetch(url, config)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (typeof onSuccess === 'function'){
                    return onSuccess(data)
                }
                setResult(data);
            })
            .catch((error) => {
                console.log(`ada error`, error);
            })
    };
    
    useEffect(() => {
        fetchProduct();
    },[url, ...depedencyArray]);

    return {result, setResult};
}

export function useProduct() {
    const {result: dataFetch, setResult: setFetch} = useFetch({
        url : `https://fakestoreapi.com/products`,
        defaultData : [],
        onSuccess : setDataProduct,
    });

    function setDataProduct(products) {
        const productFav = JSON.parse(localStorage.getItem('fav')) || [];
        const updatedProducts = products.map((item) => {
            const hasFav = productFav.find((product) => product.id === item.id)
            if (hasFav) {
                return hasFav;
            }
            return item;
        })
        setFetch([...dataFetch, ...updatedProducts]);
    }

    return {dataFetch, setFetch}
}

export default useFetch;

