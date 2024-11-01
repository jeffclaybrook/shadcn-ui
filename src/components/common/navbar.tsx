"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"

const links = [
 { label: "Accordions", href: "#accordions" },
 { label: "Alert Dialogs", href: "#alert-dialogs" },
 { label: "Alerts", href: "#alerts" },
 { label: "Avatars", href: "#avatars" },
 { label: "Badges", href: "#badges" },
 { label: "Breadcrumbs", href: "#breadcrumbs" },
 { label: "Buttons", href: "#buttons" },
 { label: "Calendars", href: "#calendars" },
 { label: "Cards", href: "#cards" },
 { label: "Carousels", href: "#carousels" },
 { label: "Charts", href: "#charts" },
 { label: "Checkboxes", href: "#checkboxes" },
 { label: "Collapsibles", href: "#collapsibles" },
 { label: "Comboboxes", href: "#comboboxes" },
 { label: "Commands", href: "#commands" },
 { label: "Context Menus", href: "#context-menus" },
 { label: "Data Tables", href: "#data-tables" },
 { label: "Date Pickers", href: "#date-pickers" },
 { label: "Dialogs", href: "#dialogs" },
 { label: "Drawers", href: "#drawers" },
 { label: "Dropdown Menus", href: "#dropdown-menus" },
 { label: "Forms", href: "#forms" },
 { label: "Input OTPs", href: "#input-otps" },
 { label: "Inputs", href: "#inputs" },
 { label: "Menu Bars", href: "#menu-bars" },
 { label: "Navigation Menus", href: "#navigation-menus" },
 { label: "Paginations", href: "#paginations" },
 { label: "Popovers", href: "#popovers" },
 { label: "Progresses", href: "#progresses" },
 { label: "Radio Groups", href: "#radio-groups" },
 { label: "Resizables", href: "#resizables" },
 { label: "Scroll Areas", href: "#scroll-areas" },
 { label: "Selects", href: "#selects" },
 { label: "Separators", href: "#separators" },
 { label: "Sheets", href: "#sheets" },
 { label: "Skeletons", href: "#skeletons" },
 { label: "Sliders", href: "#sliders" },
 { label: "Sonners", href: "#sonners" },
 { label: "Switches", href: "#switches" },
 { label: "Tables", href: "#tables" },
 { label: "Tabs", href: "#tabs" },
 { label: "Textareas", href: "#textareas" },
 { label: "Toasters", href: "#toasters" },
 { label: "Toasts", href: "#toasts" },
 { label: "Toggle Groups", href: "#toggle-groups" },
 { label: "Toggles", href: "#toggles" },
 { label: "Tooltips", href: "#tooltips" }
]

export default function Navbar() {
 const pathname = usePathname()

 return (
  <Sidebar>
   <SidebarContent>
    <SidebarGroup>
     <SidebarGroupLabel>Components</SidebarGroupLabel>
     <SidebarGroupContent>
      <SidebarMenu>
       {links.map((link, i) => (
        <SidebarMenuItem key={i}>
         <SidebarMenuButton asChild>
          <Link href={link.href} className={pathname === link.href ? "bg-slate-200" : "bg-transparent" }>{link.label}</Link>
         </SidebarMenuButton>
        </SidebarMenuItem>
       ))}
      </SidebarMenu>
     </SidebarGroupContent>
    </SidebarGroup>
   </SidebarContent>
  </Sidebar>
 )
}