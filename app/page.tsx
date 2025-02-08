import Link from "next/link"


export default function Home(){



  return <div className="text-lg w-screen h-screen flex items-center justify-center">
    <div>
    Todo Application <br/> 
    <Link href = "/signin">Sign In</Link> <br/>
    <Link href = "/signup">Sign Up</Link> 
    </div>
  </div>
}