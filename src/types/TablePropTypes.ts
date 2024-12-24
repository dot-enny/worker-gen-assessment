import React from "react";
import { Lead } from "./types";

interface TableProps {
    showLeadDetails: (lead: Lead) => void;
}
interface TableBodyProps {
    checkbox: React.RefObject<HTMLInputElement | null>;
    checked: boolean;
    toggleAll: () => void;
    selectedLeads: Lead[];
    setSelectedLeads: React.Dispatch<React.SetStateAction<Lead[]>>;
    showLeadDetails: (lead: Lead) => void;
    filteredLeads: Lead[];
}

interface TableHeaderProps {
    checkbox: React.RefObject<HTMLInputElement | null>;
    checked: boolean;
    toggleAll: () => void;
}
interface TableRowsProps {
    leads: Lead[];
    selectedLeads: Lead[];
    setSelectedLeads: React.Dispatch<React.SetStateAction<Lead[]>>;
    showLeadDetails: (lead: Lead) => void;
}

export type { TableProps, TableBodyProps, TableHeaderProps, TableRowsProps };