import Image from 'next/image'
const CarsMenu = ({data}) => {
    if(!data) return <div>Loading</div>
    const{titles,slug,number,stock,profilePicture,tag,mark} = data.fields
    
    return ( 
        <div className="carsmenu">
            <div className="CarsImage">
                <Image src={'https:'+profilePicture.fields.file.url} 
                width={450} height={300}></Image>
            </div>
            <h2>{titles}</h2>
        </div>
     );
}
 
export default CarsMenu;