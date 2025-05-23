'use client';
import { Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import ToggleMode from './ToggleMode';
import { ThemeColorSelector } from './ThemeColorSelector';

export function Header() {
    const { toggleSidebar } = useSidebar();

    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background md:pr-4 md:pl-0 px-4">
            <Button variant="outline" size="icon" className=" cursor-pointer md:hidden" onClick={toggleSidebar}>
                <Menu className="h-5 w-5 " />
                <span className="sr-only">Toggle Menu</span>
            </Button>

            <SidebarTrigger className="cursor-pointer hidden md:block" />
            <div className="w-full flex items-center md:justify-between justify-end gap-2">
                <div className="relative hidden md:block w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search..." className="w-full pl-8" />
                </div>

                <div className="flex items-center gap-2">
                    <ToggleMode />
                    <ThemeColorSelector />
                </div>
            </div>
        </header>
    );
}
