import React from "react";

function HealthStatusCards() {
  return (
    <div className="h-[30%] w-full bg-[#F6FAFF] rounded-[20px]  relative p-4">
 
  <div className="flex items-center gap-4 absolute top-1">
    <img src="./teeth.png" className="w-12 h-12 object-contain" alt="Teeth" />
    <h2 className="text-[#362CA7] font-semibold text-xl">Teeth</h2>
  </div>

  
  <p className=" text-sm text-gray-800 absolute top-[50%] text-center opacity-70">Date: 26-5-2006</p>

  
  <div className="w-[80%] bg-gray-200 rounded-full h-2 overflow-hidden absolute bottom-4">
    <div className="bg-orange-500 h-2" style={{ width: "70%" }}></div>
  </div>
</div>

  );
}

export default HealthStatusCards;
