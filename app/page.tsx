import Image from "next/image";
import Header from "./_components/Header";
import { auth } from "@clerk/nextjs";

export default function Home() {


  
  // if (userId) {
  //   return (
  //     <div>
  //       <h1>You are already logged in</h1>
  //     </div>
  //   );
  // }
  return (
    <div>
      <h1 className="text-center" >Home page</h1>
      
      {/* <Header/> */}
      {/* <Dashboard/> */}
    </div>
  );
}
