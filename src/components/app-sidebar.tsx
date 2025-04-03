import * as React from 'react';
import { Bot, Command, Frame, SquareTerminal } from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { Link } from '@tanstack/react-router';

// This is sample data.
const data = {
  user: {
    name: 'Oleksandr Klymenko',
    email: 'o.klymenko.home@gmail.com',
    avatar: '/avatars/user.jpg',
  },
  navMain: [
    {
      title: 'Портфель',
      url: '',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Список',
          url: '/portfolio/list',
        },
        {
          title: 'Управління',
          url: '/portfolio',
        },
      ],
    },
    {
      title: 'Угоди',
      url: '/trades',
      icon: Frame,
    },
    {
      title: 'Бюджет',
      url: '',
      icon: Bot,
      items: [
        {
          title: 'Фінансові цілі',
          url: '/budget',
        },
      ],
    },
    {
      title: 'Планування',
      url: '/calculators',
      icon: Frame,
    },
  ],
};

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain}/>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user}/>
      </SidebarFooter>
      <SidebarRail/>
    </Sidebar>
  );
}
