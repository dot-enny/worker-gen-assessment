export type Lead = {
    name: string;
    topic: string;
    statusReason: string;
    createdOn: string;
};
export interface NavItem {
    name: string;
    href: string;
    icon: React.ComponentType;
    children?: NavItem[];
};
export interface Section {
    header: string | null;
    items: NavItem[];
};