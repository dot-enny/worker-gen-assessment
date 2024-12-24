import { Bars3Icon, Cog8ToothIcon, LightBulbIcon, PlusIcon, QuestionMarkCircleIcon, Squares2X2Icon, UserIcon } from "@heroicons/react/24/outline";
import { ProfileMenu } from "./ProfileMenu";
import { ActionButton } from "./sidebar/ActionButton";
import { VerticalSeparator } from "./ui/VerticalSeparator";

export const Header = ({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) => {
  return (
    <div className="fixed top-0 z-10 flex h-12 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-header w-full px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-6 text-white">

      {/* Mobile Sidebar toggle */}
      <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="size-5" />
      </button>

      <div className="flex flex-1 items-center gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex-1 flex items-center gap-x-2 text-gray-400 max-sm:hidden">
          <ActionButton icon={Squares2X2Icon} srText="" />
          <span className="text-sm">Dynamics 365</span> 
          <VerticalSeparator className="h-4" /> 
          <span className="text-xs">Sales Hub</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-x-4 lg:gap-x-6 ml-auto">
          <ActionButton icon={LightBulbIcon} srText="Toggle light mode" />
          <ActionButton icon={PlusIcon} srText="Add new item" />
          <ActionButton icon={Cog8ToothIcon} srText="Settings" />
          <ActionButton icon={QuestionMarkCircleIcon} srText="Help" />
          <ActionButton icon={UserIcon} srText="User profile" />
        </div>

        <ProfileMenu />
      </div>
    </div>
  )
};




