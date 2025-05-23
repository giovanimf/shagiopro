import { AppSidebar } from "@/components/AppSidebar"
import { Header } from "@/components/Header"

interface DashboardLayoutProps {
    children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex w-full min-h-screen">
            <AppSidebar />
            <div className="flex flex-col min-h-screen w-full">
                <Header />
                <main className="flex-1 px-4 py-4 md:py-4 md:pr-4 md:pl-0">
                    {children}
                </main>
            </div>
        </div>
    )
}
