"use client";
import React, { useRef, useState } from "react";
import PlansColumn from "./_components/PlansColumn";
import Column from "./_components/Column";
import { useQuery } from "convex/react";
import { getAllPlans } from "@/convex/plans";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Loader, PlusCircle, PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import { ClerkLoading } from "@clerk/nextjs";

function Plans() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [modal, setmodal] = useState<boolean>(false);
  const plandetailsref = useRef<HTMLDivElement>(null);
  

  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan);
    if (plandetailsref.current) {
      plandetailsref.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  const PlansData = useQuery(api.plans.getAllPlans);
  if (!PlansData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader/>
        
        Loading...
      </div>
    );
  }

  if (PlansData == null || undefined || "") {
    return (
      <div className="flex items-center justify-center h-screen">
        Error: Error loading the data
      </div>
    );
  }

  return (
    <div>
      <div className="relative py-16">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12">
          <h2 className="text-center text-2xl font-semibold text-black pb-6 flex justify-center items-center gap-4">
            Available Plans    
            <Link href="Plans/AddPlans">
            <PlusCircleIcon  />
            </Link>
          </h2>


          


          <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
            {PlansData.map((plan, index) => (
              <div
                key={index}
                className="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {plan.name}
                </h3>
                <p>{plan.amount}</p>
                <p>{plan.months}</p>
                <Button key={index} onClick={() => handlePlanSelect(plan)}>
                  View Details
                </Button>
              </div>
            ))}
            
          </div>
        </div>
        {/* Plan details display */}
        {selectedPlan && (
          <div ref={plandetailsref} className="container mx-auto px-6 py-12">
            <h2 className="text-center text-2xl font-semibold text-black">
              {selectedPlan.name} Plan Details
            </h2>
            <PlansColumn />

            <div>
              {selectedPlan.installment.map((ins: number, index: number) => (
                <div className="" key={index}>
                  <Column
                    index={index}
                    installment={ins}
                    chitamount={selectedPlan.chitamount[index]}
                  />
                  {/* <PlansColumn/> */}
                </div>
              ))}
              {/* <h2 className='text-black text-xl font-medium '>{chitamount}</h2> */}
            </div>
          </div>
        )}
        <div ref={plandetailsref}></div>
      </div>
      
    </div>
  );
}

export default Plans;
