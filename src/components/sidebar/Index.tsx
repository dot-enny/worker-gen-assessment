'use client'

import { ReactNode, useState } from "react"
import { MobileSideBar } from "./Mobile"
import { StaticSidebar } from "./Static"
import { Header } from "../Header"
import { DashBoardContent } from "../DashboardContent"
import { classNames } from "@/utils/helpers/classNames"

export default function Sidebar({ children }: { children: ReactNode }) {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <div>
        <MobileSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 pt-12 lg:z- lg:flex lg:flex-col">
          <StaticSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        </div>

        <div>
          <Header setSidebarOpen={setSidebarOpen} />
          <div className={classNames('flex flex-col bg-gray-700 h-screen pt-10', isCollapsed ? 'lg:pl-[4rem]' : 'lg:pl-[12.6rem]' )}>
            <DashBoardContent>{children}</DashBoardContent>
          </div>
        </div>
      </div>
    </>
  )
};