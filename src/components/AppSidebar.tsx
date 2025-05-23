'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown, FileText, LayoutDashboard, Settings, User } from 'lucide-react';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
    SidebarSeparator,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import { Logo } from './Logo';

export function AppSidebar() {
    const pathname = usePathname();

    //const { resolvedTheme } = useTheme();
    useTheme();

    const isActive = (path: string) => {
        return pathname === path;
    };

    const isSubActive = (path: string) => {
        return pathname.startsWith(path);
    };

    return (
        <Sidebar className='p-4' variant="floating">
            <SidebarHeader>
                <div className="flex items-center px-2 py-2">
                    <Logo />
                </div>
            </SidebarHeader>
            <SidebarContent className="overflow-x-hidden">
                <SidebarGroup>
                    <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={isActive('/')}>
                                    <Link href="/">
                                        <LayoutDashboard />
                                        <span>Dashboard</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <Collapsible defaultOpen={isSubActive('/dashboard/components-guide')} className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton isActive={isSubActive('/dashboard/components-guide')} className='hover:bg-primary hover:text-primary-foreground'>
                                            <FileText />
                                            <span>UI Components</span>
                                            <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild isActive={isActive('/components/forms')}>
                                                    <Link href="/components/forms">Forms</Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild isActive={isActive('/components/charts')}>
                                                    <Link href="/components/charts">Charts</Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild isActive={isActive('/components/tables')}>
                                                    <Link href="/components/tables">Tables</Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild isActive={isActive('/components/sonners')}>
                                                    <Link href="/components/sonners">Sonner</Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator />

                <SidebarGroup>
                    <SidebarGroupLabel>Account</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={isActive('/dashboard/profile')} className='hover:bg-primary hover:text-primary-foreground'>
                                    <Link href="/dashboard/profile">
                                        <User />
                                        <span>Profile</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={isActive('/dashboard/settings')} className='hover:bg-primary hover:text-primary-foreground'>
                                    <Link href="/dashboard/settings">
                                        <Settings />
                                        <span>Settings</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={isActive('/dashboard/reset-password')} className='hover:bg-primary hover:text-primary-foreground'>
                                    <Link href="/dashboard/reset-password">
                                        <Settings />
                                        <span>Reset Password</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="pb-6">
                <Button className='cursor-pointer'>
                    <Link href="http://github.com/giovanimf/" className='flex items-center' target='_blank'>
                        View on GitHub
                    </Link>
                </Button>
                <div className="p-2 text-xs text-muted-foreground text-center">
                    <p>
                        Dashboard Template v1.0 {new Date().getFullYear()}</p>
                    <p>By <Link target='_blank' href="https://www.linkedin.com/in/giovanimatoss/" className="hover:text-primary dark:hover:text-primary transition-colors text-foreground dark:text-white underline">@giovanimatoss</Link></p>
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
