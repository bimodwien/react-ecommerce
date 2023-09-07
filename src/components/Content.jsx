import React from 'react'
import useFetch from '../helper/hooks/index'

const Content = () => {
    const dataFetch = useFetch({
        url : `https://fakestoreapi.com/products`,
        defaultData : [],
    });

    console.log('<><><><><><><><><><><>',dataFetch);

    //pertanyaan buat nanti malam:
    //kenapa defaultData nya array
    //lupa alesannya kenapa harus direturn

  return (
    <>
        <div>Content</div>
        {dataFetch.map((data) => {
            return <div>
                {data.title}
            </div>
        })}
    </>
  )
}

export default Content