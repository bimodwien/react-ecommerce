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
                setResult(data);
            })
            .catch((error) => {
                console.log(`ada error`, error);
            })
    };
    
    useEffect(() => {
        fetchProduct();
    },[url, ...depedencyArray]);

    return {setResult, result};
}

export default useFetch;
