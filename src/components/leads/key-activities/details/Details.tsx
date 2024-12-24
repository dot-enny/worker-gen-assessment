import { VerticalSeparator } from "@/components/ui/VerticalSeparator"
import { LeadCard } from "./LeadCard"
import { ActivityCard } from "../ActivityCard"
// import { useState } from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export const Details = () => {
  return (
    <div className="flex gap-x-4 text-sm text-gray-600 pl-4">
      <div className="w-[70%]">
        <span>Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.</span>
        <div className="flex gap-x-4 mt-4">
          <LeadCard />
          <LeadCard />
          {/* <LeadCarousel /> */}
        </div>
      </div>
      <VerticalSeparator className="h-[240px] w-[1.8px] bg-gray-100/85" />
      <div className="w-[30%]">
        <span>Other key activities</span>
        <div className="flex flex-col gap-y-2 mt-4">
          <ActivityCard />
          <ActivityCard />
          <span className="text-blue-600 text-xs font-medium">Show all key activities</span>
        </div>
      </div>
    </div>
  )
}


// const LeadCarousel = () => {

//   const leadCards = [<LeadCard />, <LeadCard />, <LeadCard />, <LeadCard />, <LeadCard />];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? leadCards.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === leadCards.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="relative">
//       <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2">
//         <ChevronLeftIcon className="size-5" />
//       </button>
//       <div className="flex gap-x-4 mt-4 overflow-hidden">
//         {leadCards.map((card, index) => (
//           <div
//             key={index}
//             className={`flex-shrink-0 w-1/2 transition-transform duration-300 ease-in-out transform ${index === currentIndex ? "translate-x-0" : index < currentIndex ? "-translate-x-full" : "translate-x-full"
//               }`}
//           >
//             {card}
//           </div>
//         ))}
//       </div>
//       <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2">
//         <ChevronRightIcon className="size-5" />
//       </button>
//     </div>
//   );
// }
