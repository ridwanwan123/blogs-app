import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/A1.png" width={88} height={83} />
                <h1>News list</h1>
            </div>
            <Link href="/"><a> Home </a></Link>
            <Link href="/about"><a> About </a></Link>
            <Link href="/news/"><a> News </a></Link>
        </nav>
     );
}
 
export default Navbar;