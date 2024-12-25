import { Bars3Icon, ChevronDownIcon, Squares2X2Icon } from '@heroicons/react/24/outline'

import { usePathname } from "next/navigation";
import Link from 'next/link';
import { useState } from 'react';
import { ActionButton } from './ActionButton';
import { classNames } from "@/utils/helpers/classNames";
import { sections } from "@/json-data/NavData";
import { NavItem, Section } from '@/types/types';
import { VerticalSeparator } from '../ui/VerticalSeparator';


export const StaticSidebar = ({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean, setIsCollapsed: (isCollapsed: boolean) => void }) => {
    const location = usePathname();



    return (
        <div className="flex grow flex-col overflow-y-auto scroll border-r border-gray-200 bg-gray-100 px-6 pb-4">
            <div className="flex h-10 shrink-0 items-center">
                <Bars3Icon aria-hidden="true" className="size-5 cursor-pointe max-lg:hidden" onClick={() => setIsCollapsed(!isCollapsed)} />
                <div className="flex-1 flex items-center gap-x-2 text-gray-400 pt-4">
                    <Squares2X2Icon className="size-5" />
                    <span className="text-sm">Dynamics 365</span>
                    <VerticalSeparator className="h-4" />
                    <span className="text-xs">Sales Hub</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-5">
                    {sections.map((section, index) => (
                        <SidebarSection key={index} section={section} location={location} isCollapsed={isCollapsed} />
                    ))}
                </ul>
            </nav>
        </div>
    )
};

const SidebarSection = ({ section, location, isCollapsed }: { section: Section, location: string, isCollapsed: boolean }) => {
    return (
        <li>
            {section.header && <div className={classNames('text-xs/6 font-semibold text-gray-700', isCollapsed ? 'w-0 h-0 overflow-hidden' : '')}>{section.header}</div>}
            <ul role="list" className="-mx-2 mt-2 space-y-1">
                {section.items.map((item: NavItem) => (
                    <SidebarNavItem key={item.name} item={item} location={location} isCollapsed={isCollapsed} />
                ))}
            </ul>
        </li>
    )
};

const SidebarNavItem = ({ item, location, isCollapsed }: { item: NavItem, location: string, isCollapsed: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li key={item.name}>
            <div>
                <Link
                    href={item.href}
                    className={classNames(
                        location === item.href
                            ? 'bg-gray-50 active-route-indicator relative'
                            : 'hover:bg-gray-50 hover:text-primary',
                        'group flex items-center gap-x-3 rounded-md p-1 pl-2 pr-3 text-sm/6 text-gray-700',
                        isCollapsed ? 'w-8 overflow-hidden' : ''
                    )}
                    onClick={toggleOpen}
                    aria-expanded={isOpen}
                    aria-controls={`children-${item.name}`}
                >
                    {item.icon && (
                        <item.icon aria-hidden={true} className="text-gray-600 size-4 shrink-0" />
                    )}
                    {item.name}
                    {item.children && (

                        <ActionButton icon={ChevronDownIcon} srText="Open lead actions" size={4}
                            className={classNames(isOpen ? 'rotate-180' : '', 'text-gray-600 transition-transform ml-auto')}
                        />
                    )}
                </Link>
            </div>
            {item.children && (
                <ul className={classNames('space-y-1 nav-item-with-children grid transition-[grid-template-rows_500ms]', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                    <div className="overflow-hidden">
                        {item.children.map((child: NavItem) => (
                            <SidebarNavItem key={child.name} item={child} location={location} isCollapsed={isCollapsed} />
                        ))}
                    </div>
                </ul>
            )}
        </li>
    );
};
