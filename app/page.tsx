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
    //main div
    <div>
    <div className="flex justify-between overflow-hidden">
      <div className="prosto-one-regular ml-[7vw] my-[3vw] leading-snug ">
        <h1>Make Payments</h1>
        <h1>Easy, Simplify</h1>
        <h1>Your Finances</h1>

        <h3 className="poppins-semibold normal-case">A new way to make the payments easy reliable and secure. You 
        <br />can manage all your transactions from your mobile phone.</h3>

      {/* four comp div */}
        <div>
          <div className="flex my-6">

        <button className="rounded-full bg-[#E3432B] poppins-semibold normal-case h-[8vh] w-[9vw] text-white">Get Started</button>
        <Image src="/Group1.svg" alt="profiles" height={150} width={150} />
          </div>
          <div className="flex my-6 justify-between w-[20vw] font-black poppins-semibold normal-case">
            <Image src="/Group2.svg" alt="profiles" height={40} width={45} />
            <span>
            <h2 className="text-2xl font-bold" >$ 10M+</h2>
            <h2>Transactions</h2>
            </span>
            <span>

            <h2 className="text-2xl font-bold">1000+ </h2>
            <h2 >Active Users</h2>
            </span>
          </div>
        </div>
      </div>
      {/* part2 */}
      <div>

        <div className="relative " >
          <h2 className="text-[13vw] absolute top-[17vw] right-[-15vw] z-0 text-[#CBD6CC] special1" >FINANCE</h2>
         <Image src="/Group3.svg" alt="picture" height={440} width={440} className="z-1 relative"/>
        </div>

      </div>
      <div>

      </div>
      

    
    </div>
    <div className="oval bg-[#F2EDE3] absolute left-[-1000]">

    </div>
  </div>
  );
}
