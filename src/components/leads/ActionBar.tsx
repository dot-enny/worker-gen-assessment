import { ActionButton } from "@/components/sidebar/ActionButton";
import { VerticalSeparator } from "@/components/ui/VerticalSeparator";
import { AdjustmentsHorizontalIcon, ArrowPathIcon, ArrowTopRightOnSquareIcon, ChartBarSquareIcon, ChevronDownIcon, ChevronRightIcon, ClockIcon, EllipsisVerticalIcon, PlusIcon, TrashIcon, UserGroupIcon, ViewColumnsIcon } from "@heroicons/react/24/outline";

export const ActionBar = () => {
    return (
        <div className="bg-white px-3 py-2 shadow rounded text-xs mb-4 max-xl:w-fit">
            <div className="flex items-center xl:hidden">
                <ActionButton icon={ChevronRightIcon} srText="More Actions" size={4} />
                <span>More Actions</span>
            </div>
            <div className="hidden xl:flex justify-between">
                <span className="flex items-center gap-x-2">
                    <span>My open leads</span>
                    <ActionButton icon={ChevronDownIcon} srText="Open lead actions" size={4} />
                </span>

                <div className="flex items-center gap-x-3">
                    <MenuItems />
                    <div className="flex items-center gap-x-1">
                        <VerticalSeparator className="h-4" />
                        <ActionButton icon={ChevronDownIcon} srText="More actions" size={3} />
                    </div>
                    <ActionButton icon={EllipsisVerticalIcon} srText="Options" />
                    <MenuButtons />
                    <div className="bg-blue-500 flex items-center p-[6px] rounded-md gap-x-1">
                        <ArrowTopRightOnSquareIcon className="size-4 text-white" />
                        <VerticalSeparator className="h-[14px] bg-white" />
                        <ChevronDownIcon className="size-4 text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const MenuItems = () => {
    return (
        <div className="flex items-center gap-x-3">
            <MenuItem icon={ChartBarSquareIcon} text="Show Chart" />
            <MenuItem icon={ViewColumnsIcon} text="Focused View" />
            <MenuItem icon={PlusIcon} text="New" />
            <MenuItem icon={ArrowPathIcon} text="Refresh" />
            <MenuItem icon={UserGroupIcon} text="Collaborate" />
            <MenuItem icon={TrashIcon} text="Delete" />
        </div>
    );
};

interface MenuItemProps {
    icon: React.ElementType;
    text: string;
}
const MenuItem = ({ icon, text }: MenuItemProps) => {
    return (
        <span className="flex items-center gap-x-1">
            <ActionButton icon={icon} srText={text} size={4} />
            <span>{text}</span>
        </span>
    );
};

const MenuButtons = () => {
    return (
        <div className="flex gap-x-2">
            <MenuButton icon={ClockIcon} text="Smart Data" />
            <MenuButton icon={AdjustmentsHorizontalIcon} text="Edit Filters" />
            <MenuButton icon={ClockIcon} text="Edit Columns" />
        </div>
    );
};

interface MenuButtonProps {
    icon: React.ElementType;
    text: string;
}
const MenuButton = ({ icon: Icon, text }: MenuButtonProps) => {
    return (
        <button className="border flex items-center gap-x-1 p-1 rounded-md bg-gray-50">
            <Icon className="size-4" />
            <span>{text}</span>
        </button>
    );
};
