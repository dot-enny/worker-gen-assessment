'use client'

import AgentSkillModal from '@/components/agent-skill/AgentSkillModal'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const agent = {
  name: "Winford Asher",
  topic: "Cafe A100 for commercial use",
  statusReason: "New",
  createdOn: "4/02/2024 12:00 PM"
}

const AgentSkill = () => {
  const router = useRouter();

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(open => !open)
    router.back();
  };

  return (
    <div>
      <AgentSkillModal open={open} setOpen={handleClose} lead={agent} />
    </div>
  )
}

export default AgentSkill