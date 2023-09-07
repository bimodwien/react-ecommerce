import { useEffect, useState } from "react";

function useFetch(parameter) {
    const {url, config = {}, defaultData, depedencyArray = []} = parameter;
    const [result, setResult] = useState(defaultData);

    function fetchProduct() {
        fetch(url, config)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log('ini dataaaa',data);
                setResult(data);
            })
            .catch((error) => {
                console.log(`ada error`, error);
            })
    };
    
    // console.log('ini adalah hasil',result);
    useEffect(() => {
        fetchProduct();
    },[url, ...depedencyArray]);

    return result;
}

export default useFetch;
