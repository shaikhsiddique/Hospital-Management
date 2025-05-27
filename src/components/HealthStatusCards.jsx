import React from "react";


function HealthStatusCards({data}) {

  const getBarColor = (percentage) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 70) return 'bg-orange-500';
    if (percentage >= 50) return 'bg-red-500';
    return 'bg-red-700';
  };
  
  return (
    <div className="h-[30%] w-full bg-[#F6FAFF] rounded-[20px]  relative p-4">
 
  <div className="flex items-center gap-4 absolute top-1">
    <img src={`./${data.organ}.png`} className="w-12 h-12 object-contain" alt="Teeth" />
    <h2 className="text-[#362CA7] font-semibold text-xl">{data.organ}</h2>
  </div>

  
  <p className=" text-sm text-gray-800 absolute top-[50%] text-center opacity-70">Date: {data.date}</p>

  
  <div className="w-[80%] bg-gray-200 rounded-full h-2 overflow-hidden absolute bottom-4">
    <div
          className={`${getBarColor(data.healthPercentage)} h-2 rounded`}
          style={{ width: `${data.healthPercentage}%` }}
        ></div>
  </div>
</div>

  );
}

export default HealthStatusCards;
