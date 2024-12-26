import { Lead } from "@/types/types";
import { useState } from "react";

export const useFilterLeads = (leads: Lead[]) => {
    const [searchQuery, setSearchQuery] = useState('')

    const filteredLeads = leads.filter(lead =>
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.statusReason.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.createdOn.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return { filteredLeads, setSearchQuery, searchQuery };
};