import React from 'react'
import {useQuery} from 'react-query'
import {createClient} from 'contentful'
import CarsMenu from '../../component/CarsMenu'
const fetchCars = async()=>{
    const client = createClient({
        space:'2xmx8hal6xz6',
        accessToken:'di0I-SWjotyOIw-ISEdtrdPL6JUJWUFWdL8BXxIbkYc'    
    })
    const res = await client.getEntries({content_type:'blog'})
    return res.items
}

const Cars = () => {
    const{data,status} = useQuery('cars',fetchCars)
    if(!data) return <div>Loading</div>
    console.log(data)
    return ( 
        <div className="list">
            {data.map(data=><CarsMenu data={data} key={data.sys.id}/>)}
        </div>
     );
}
 
export default Cars;