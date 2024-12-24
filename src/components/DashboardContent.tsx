import { ReactNode } from "react";

export const DashBoardContent = ({ children }: { children: ReactNode }) => {
  return (
    <main className="py-4 bg-gray-100 flex-1 h-full px-4 sm:px-6 lg:px-4 lg:pt-5 overflow-y-auto">
      {children}
    </main>
  )
};