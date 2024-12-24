'use client'

import { ActionBar } from "@/components/leads/ActionBar";
import { KeyActivities } from "@/components/leads/key-activities/KeyActivities";
import LeadDetailsModal from "@/components/leads/LeadDetails";
import Table from "@/components/leads/Table";
import { Lead } from "@/types/types";
import { useState } from "react";

export default function Leads() {
    const [isLeadOpen, setIsLeadOpen] = useState(false);
    const [lead, setLead] = useState<Lead | null>(null);
    const showLeadDetails = (val: Lead) => {
        setIsLeadOpen(isLeadOpen => !isLeadOpen);
        setLead(val)
    };

    return (
        <>
            <ActionBar />
            <KeyActivities />
            <Table showLeadDetails={showLeadDetails} />
            <LeadDetailsModal open={isLeadOpen} setOpen={() => setIsLeadOpen(isLeadDetails => !isLeadDetails)} lead={lead} />
        </>
    );
};
