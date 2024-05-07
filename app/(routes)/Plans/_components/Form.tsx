"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { Console } from "console";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";

interface FormData {
  plancode: number;
  name: string;
  amount: number;
  months: number;
  chitamount: number[];
  installment: number[];
}
const PlanForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    plancode: 0,
    name: "",
    amount: 0,
    months: 0,
    chitamount: [0,0],
    installment: [0,0],
  });

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Parse value to number for plancode, amount, and months
    const parsedValue = ["plancode", "amount", "months"].includes(name)
      ? parseInt(value)
      : value;
    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  const handleChitAmountChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newChitAmount = [...formData.chitamount];
    e.preventDefault();
    newChitAmount[index] = parseInt(e.target.value);
    setFormData({
      ...formData,
      chitamount: newChitAmount,
    });
  };

  const handleInstallmentChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newInstallment = [...formData.installment];
    e.preventDefault();
    newInstallment[index] = parseInt(e.target.value);
    setFormData({
      ...formData,
      installment: newInstallment,
    });
  };
  // create function
  const create = useMutation(api.plans.createPlan);
  const handlepost = (e: FormEvent) => {
    e.preventDefault();
    const promise = create({
      amount: formData.amount,
      chitamount: formData.chitamount,
      installment: formData.installment,
      months: formData.months,
      name: formData.name,
      plancode: formData.plancode,
    }).then(() => {
      router.push("/Plans");
    });

    toast.promise(promise, {
      loading: "Creating a new Plan...",
      success: "New Plan created!",
      error: "Failed to create a new Plan",
    });
    // console.log(formData);
  };

  const addChitAmountInput = () => {
    setFormData({
      ...formData,
      chitamount: [...formData.chitamount, 0,0], // Initialize new chit amount with 0
    });
  };

  const addInstallmentInput = () => {
    setFormData({
      ...formData,
      installment: [...formData.installment, 0,0], // Initialize new installment with 0
    });
  };

  return (
    <div className="h-[max] bg-[#F2EDE3] w-[70%] flex  justify-center items-center rounded-lg">
      <form
        className="flex flex-col p-10 items-center "
        onSubmit={handlepost}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // Prevent the default form if enter is clicked
            e.preventDefault();
          }
        }}
      >
        {/* main  */}
        <div className="flex gap-3 pb-4 justify-center">
          {/* box1  */}
          <div>
            <label>
              Plan Code:
              <Input
                type="number"
                min="0"
                name="plancode"
                value={formData.plancode}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Plan Name:
              <Input
                type="text"
                name="name"
                placeholder="Plan Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white"
                
              />
            </label>
            <br />
            <label>
              Amount:
              <Input
                type="number"
                name="amount"
                min="0"
                value={formData.amount}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Months:
              <Input
                type="number"
                name="months"
                min="0"
                value={formData.months}
                onChange={handleChange}
              />
            </label>
          </div>

          <br />
          {/* chitamount div  */}
          <div className="grid grid-cols-2 grid-rows-5  gap-x-4">
            
            {formData.chitamount.map((amount, index) => (
              <div key={index}>
                <label>
                  Chit Amount {index + 1}:
                  <Input
                    min="0"
                    type="number"
                    value={amount}
                    onChange={(e) => handleChitAmountChange(e, index)}
                  />
                </label>
                <br />
              </div>
            ))}
            {/* <br /> */}
            <Button
              type="button"
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                addChitAmountInput();
              }}
            >
              Add Chit Amount
            </Button>
          </div>
          {/* installment div  */}
          <div className="grid grid-cols-2 grid-rows-5  gap-x-4 w-[max]">
            
            {formData.installment.map((installment, index) => (
              <div key={index}>
                <label>
                  Installment {index + 1}:
                  <Input
                    type="number"
                    min="0"
                    value={installment}
                    onChange={(e) => handleInstallmentChange(e, index)}
                  />
                </label>
                <br />
              </div>
            ))}
            
            <Button
              type="button"
              variant="secondary"
              onClick={addInstallmentInput}
            >
              Add Installment
            </Button>
            {/* <br /> */}
          </div>
        </div>

        <Button type="submit" onClick={handlepost} className="w-[50%]"> 
          Submit
        </Button>
      </form>
    </div>
  );
};

export default PlanForm;
