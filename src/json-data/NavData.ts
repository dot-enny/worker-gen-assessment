import { Section } from '@/types/types';
import {
    CalendarIcon,
    ClockIcon,
    FolderIcon,
    HomeIcon,
    MapPinIcon,
    RocketLaunchIcon,
    Squares2X2Icon,
    UsersIcon,
} from '@heroicons/react/24/outline';

export const sections: Section[] = [
    {
        header: null,
        items: [
            { name: 'Home', href: '/', icon: HomeIcon },
            {
                name: 'Recent', href: '/recents', icon: ClockIcon,
                children: [
                    { name: 'Recent Item 1', href: '#', icon: FolderIcon },
                    { name: 'Recent Item 2', href: '#', icon: FolderIcon },
                ]
            },
            {
                name: 'Pinned', href: '#', icon: MapPinIcon,
                children: [
                    { name: 'Pinned Item 1', href: '#', icon: FolderIcon },
                    { name: 'Pinned Item 2', href: '#', icon: FolderIcon },
                ]
            },
        ],
    },
    {
        header: 'My work',
        items: [
            { name: 'Sales accelerator', href: '#', icon: RocketLaunchIcon },
            { name: 'Dashboards', href: '#', icon: Squares2X2Icon },
            { name: 'Activities', href: '#', icon: FolderIcon },
            { name: 'Analytics', href: '#', icon: CalendarIcon },
        ],
    },
    {
        header: 'Customers',
        items: [
            { name: 'Accounts', href: '#', icon: HomeIcon },
            { name: 'Contacts', href: '#', icon: UsersIcon },
        ],
    },
    {
        header: 'Sales',
        items: [
            { name: 'Leads', href: '/leads', icon: HomeIcon },
            { name: 'Opportunities', href: '#', icon: UsersIcon },
            { name: 'Competitiors', href: '#', icon: UsersIcon },
        ],
    },
];