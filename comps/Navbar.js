import Link from 'next/link'
import Image from 'next/image';
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
               <img src="/chiep4g.png" width={128} height={100}/>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja Listing</Link>
        </nav>
    );
}
 
export default Navbar;