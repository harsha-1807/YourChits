
"use client"
import Image from "next/image";
import Header from "./_components/Header";
import { auth, useSession } from "@clerk/nextjs";
import useStoreUserEffect from "@/hooks/useStoreuser";
import { useConvexAuth } from "convex/react";

export default function Home() {
  // if (userId) {
  //   return (
  //     <div>
  //       <h1>You are already logged in</h1>
  //     </div>
  //   );
  // }
  const {isAuthenticated,isLoading}=useConvexAuth()
    const {session} = useSession();
    useStoreUserEffect()
    if (session!==undefined){
      console.log(session)
    }
  return (
    //main div
    <div className="overflow-hidden">
      <div className="flex justify-between overflow-hidden h-screen  ">
        <div className="prosto-one-regular ml-[7vw]  leading-snug ">
          <h1>Make Payments</h1>
          <h1>Easy, Simplify</h1>
          <h1>Your Finances</h1>

          <h3 className="poppins-semibold normal-case">
            A new way to make the payments easy reliable and secure. You
            <br />
            can manage all your transactions from your mobile phone.
          </h3>

          {/* four comp div */}
          <div>
            <div className="flex my-6">
              <button className="rounded-full bg-[#E3432B] poppins-semibold normal-case h-[8vh] w-[9vw] text-white">
                Get Started
              </button>
              <Image
                src="/Group1.svg"
                alt="profiles"
                height={150}
                width={150}
              />
            </div>
            <div className="flex my-6 justify-between w-[20vw] font-black poppins-semibold normal-case">
              <Image src="/Group2.svg" alt="profiles" height={40} width={45} />
              <span>
                <h2 className="text-2xl font-bold">$ 10M+</h2>
                <h2>Transactions</h2>
              </span>
              <span>
                <h2 className="text-2xl font-bold">1000+ </h2>
                <h2>Active Users</h2>
              </span>
            </div>
          </div>
        </div>
        {/* part2 */}
        <div>
          <div className="relative ">
            <h2 className="text-[13vw] absolute top-[12vw] right-[-15vw] z-0 text-[#CBD6CC] special1">
              FINANCE
            </h2>
            <Image
              src="/Group3.svg"
              alt="picture"
              height={440}
              width={440}
              className="z-0 relative"
            />
          </div>
        </div>
        <div></div>
      </div>

      <div className="oval  absolute top-[35vw] font-black flex justify-center ">
        <Image
          src="/Ellipse.png"
          alt="pic"
          height={150}
          width={10000}
          className="overflow-hidden absolute z-[0]"
        />
        <span className="z-10 relative mt-[3vw] flex-row justify-center ">
          <h2 className="text-black prosto-one m-[2vw]">How it Works</h2>
          
          <Image src="/bar.svg" alt="count" height={1000} width={600} className="ml-[6vw] my-[1vw]" />
          <div className="flex gap-8 text-center ">
            <div className="w-[16vw]">
              <h2 className="prosto-one-s ">Register</h2>
              <p className="poppins-semibold text-wrap  ">
                Register yourself in a plan
              </p>
            </div>
            <div className="w-[16vw]">
              <h2 className="prosto-one-s">Save money</h2>
              <p className="poppins-semibold">
                Deposit your money monthly into the plan
              </p>
            </div>
            <div className="w-[16vw]">
              <h2 className="prosto-one-s">Withdraw</h2>
              <p className="poppins-semibold">
                Get the plan's respective money whenever you want
              </p>
            </div>
          </div>
        </span>
      </div>
      {/* <div className="w-[max] h-[50vw] bg-[#F2EDE3]">

    </div> */}
    </div>
  );
}
