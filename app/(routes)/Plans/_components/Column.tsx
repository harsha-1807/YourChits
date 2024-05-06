import React from "react";

interface ColumnProps {
    index: number;
    installment: number;
    chitamount: number;
  }
  
  const Column: React.FC<ColumnProps> = ({ index, installment, chitamount }) => {
    return (
      <div  className="w-[85rem] h-[3rem] rounded-xl bg-[#F2EDE3] flex justify-around items-center my-4">
        <h2 className='text-black text-xl font-medium w-[4rem] flex justify-center'>{index + 1}</h2>
        <h2 className='text-black text-xl font-medium w-[9rem] flex justify-center'>{installment}</h2>
        <h2 className='text-black text-xl font-medium w-[7rem] flex justify-center'>{chitamount}</h2>
      </div>
    );
  };
  

export default Column;
