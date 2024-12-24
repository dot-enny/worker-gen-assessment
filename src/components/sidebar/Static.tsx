import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline'

import { usePathname } from "next/navigation";
import Link from 'next/link';
import { useState } from 'react';
import { ActionButton } from './ActionButton';
import { classNames } from "@/utils/helpers/classNames";
import { sections } from "@/json-data/NavData";
import { NavItem, Section } from '@/types/types';


export const StaticSidebar = () => {
    const location = usePathname();

    return (
        <div className="flex grow flex-col overflow-y-auto scroll border-r border-gray-200 bg-gray-100 px-6 pb-4">
            <div className="flex h-10 shrink-0 items-center">
                <Bars3Icon aria-hidden="true" className="size-5" />
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-5">
                    {sections.map((section, index) => (
                        <SidebarSection key={index} section={section} location={location} />
                    ))}
                </ul>
            </nav>
        </div>
    )
};

const SidebarSection = ({ section, location }: { section: Section, location: string }) => {
    return (
        <li>
            {section.header && <div className="text-xs/6 font-semibold text-gray-700">{section.header}</div>}
            <ul role="list" className="-mx-2 mt-2 space-y-1">
                {section.items.map((item: NavItem) => (
                    <SidebarNavItem key={item.name} item={item} location={location} />
                ))}
            </ul>
        </li>
    )
};

const SidebarNavItem = ({ item, location }: { item: NavItem, location: string }) => {
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
                            <SidebarNavItem key={child.name} item={child} location={location} />
                        ))}
                    </div>
                </ul>
            )}
        </li>
    );
};
