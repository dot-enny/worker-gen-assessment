import { ArrowPathRoundedSquareIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import ProgressBar from "./ProgressBar"
import { useState } from "react";
import { ActionButton } from "@/components/sidebar/ActionButton";
import { Details } from "./details/Details";
import { classNames } from "@/utils/helpers/classNames";

export const KeyActivities = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow rounded-lg p-4 bg-white">
      <div className="flex max-md:flex-col items-center gap-x-5">
        <div className="flex-1 flex items-center gap-x-1">
          <ArrowPathRoundedSquareIcon className="size-7 text-green-300 max-sm:hidden" />
          <p className="font-semibold max-sm:mb-4">Hi Mona, 68% of goal achieved and rest can be achieved by focusing on 20 top leads.</p>
        </div>
        <ProgressBar />
        <ActionButton icon={ChevronDownIcon} srText="Open lead actions" size={4}
          className={classNames(isOpen ? 'rotate-180' : '', 'text-gray-600 transition-transform ml-auto self-start shrink max-sm:hidden')}
          onClick={toggleOpen}
        />
      </div>
      <div className={classNames('grid transition-[grid-template-rows_500ms]', isOpen ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr]')}>
        <div className="overflow-hidden max-sm:hidden">
          <Details />
        </div>
      </div>
    </div>
  )
}
