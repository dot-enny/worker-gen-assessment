import { ComponentType } from "react";

export type Lead = {
    name: string;
    topic: string;
    statusReason: string;
    createdOn: string;
};
export interface NavItem {
    name: string;
    href: string;
    icon: ComponentType<{ 
        "aria-hidden": boolean | undefined; 
        className: string; 
    }>;
    children?: NavItem[];
};
export interface Section {
    header: string | null;
    items: NavItem[];
};