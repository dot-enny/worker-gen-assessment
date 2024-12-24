'use client'

import { ReactNode, useState } from "react"
import { MobileSideBar } from "./Mobile"
import { StaticSidebar } from "./Static"
import { Header } from "../Header"
import { DashBoardContent } from "../DashboardContent"

export default function Sidebar({ children }: { children: ReactNode }) {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <MobileSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 pt-12 lg:z- lg:flex lg:flex-col">
          <StaticSidebar />
        </div>

        <div>
          <Header setSidebarOpen={setSidebarOpen} />
          <div className="lg:pl-[12.6rem] flex flex-col bg-gray-700 h-screen pt-10">
            <DashBoardContent>{children}</DashBoardContent>
          </div>
        </div>
      </div>
    </>
  )
};