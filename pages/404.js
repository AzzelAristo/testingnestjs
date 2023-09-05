import Link from "next/link";
import '@/styles/Home.module.css'
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
        // console.log('use effect ran')
        setTimeout(()=>{
            // router.go(-1)
            router.push('/');
        },3000)
    },[])


    return (
        <div className="not-found">
            <h1>Oooops.....</h1>
            <h2>The Page Cannot be Found</h2>
            <p>Go Back to the
                <Link href="/" className="toHome"> Homepage </Link>
            </p>
        </div>
    );
}
 
export default NotFound;