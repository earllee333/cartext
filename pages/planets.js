import React from 'react'
import {useQuery} from 'react-query'

const fetchList = async ()=>{
    const res = await fetch('https://swapi.dev/api/planets/');
    return res.json();
}

const Cars = () => {
    const {data,status} =useQuery('planet',fetchList)
    if(!data) return <div>Loading</div>
    console.log(data)
    return ( 
        <div className="list">
            {data.results.map(data=>(<div>
                <h4>{data.name}</h4>
            </div>))}
        </div>
     );
}
 
export default Cars;