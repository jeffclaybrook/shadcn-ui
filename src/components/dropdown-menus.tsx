import { Cloud, CreditCard, Github, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, User, UserPlus, Users } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu"
import Section from "./common/section"

const items = [
 { label: "Profile", icon: User, shortcut: "⇧⌘P" },
 { label: "Billing", icon: CreditCard, shortcut: "⇧⌘B" },
 { label: "Settings", icon: Settings, shortcut: "⇧⌘S" },
 { label: "Keyboard shortcuts", icon: Keyboard, shortcut: "⇧⌘K" }
]

export default function DropdownMenus() {
 return (
  <Section id="dropdown-menus" title="Dropdown Menus">
   <DropdownMenu>
    <DropdownMenuTrigger asChild>
     <Button variant="outline">Open</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
     <DropdownMenuLabel>My Account</DropdownMenuLabel>
     <DropdownMenuSeparator />
     <DropdownMenuGroup>
      {items.map((item, i) => (
       <DropdownMenuItem key={i}>
        <item.icon />
        <span>{item.label}</span>
        <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
       </DropdownMenuItem>
      ))}
     </DropdownMenuGroup>
     <DropdownMenuSeparator />
     <DropdownMenuGroup>
      <DropdownMenuItem>
       <Users />
       <span>Team</span>
      </DropdownMenuItem>
      <DropdownMenuSub>
       <DropdownMenuSubTrigger>
        <UserPlus />
        <span>Invite users</span>
       </DropdownMenuSubTrigger>
       <DropdownMenuPortal>
        <DropdownMenuSubContent>
         <DropdownMenuItem>
          <Mail />
          <span>Email</span>
         </DropdownMenuItem>
         <DropdownMenuItem>
          <MessageSquare />
          <span>Message</span>
         </DropdownMenuItem>
         <DropdownMenuSeparator />
         <DropdownMenuItem>
          <PlusCircle />
          <span>More...</span>
         </DropdownMenuItem>
        </DropdownMenuSubContent>
       </DropdownMenuPortal>
      </DropdownMenuSub>
      <DropdownMenuItem>
       <Plus />
       <span>New Team</span>
       <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
      </DropdownMenuItem>
     </DropdownMenuGroup>
     <DropdownMenuSeparator />
     <DropdownMenuItem>
      <Github />
      <span>GitHub</span>
     </DropdownMenuItem>
     <DropdownMenuItem>
      <LifeBuoy />
      <span>Support</span>
     </DropdownMenuItem>
     <DropdownMenuItem disabled>
      <Cloud />
      <span>API</span>
     </DropdownMenuItem>
     <DropdownMenuSeparator />
     <DropdownMenuItem>
      <LogOut />
      <span>Log out</span>
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
     </DropdownMenuItem>
    </DropdownMenuContent>
   </DropdownMenu>
  </Section>
 )
}