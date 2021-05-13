import Link from 'next/link'

const Nav = () => {
    return ( 
        <div className="nav">
            <ul>
                <Link href='/'><li>Home</li></Link>
                <Link href='/planets'><li>Planets</li></Link>
                <Link href='/cars'><li>Cars</li></Link>

            </ul>
        <style jsx>
            {`{

            }`}
        </style>
        </div>
     );
}
 
export default Nav;