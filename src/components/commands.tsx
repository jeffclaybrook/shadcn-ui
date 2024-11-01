import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "./ui/command"
import Section from "./common/section"

const suggestions = [
 { label: "Calendar", icon: Calendar },
 { label: "Search Emoji", icon: Smile },
 { label: "Calculator", icon: Calculator },
]

const settings = [
 { label: "Profile", icon: User, shortcut: "⌘P" },
 { label: "Billing", icon: CreditCard, shortcut: "⌘B" },
 { label: "Settings", icon: Settings, shortcut: "⌘S" },
]

export default function Commands() {
 return (
  <Section id="commands" title="Commands">
   <Command className="rounded-lg border shadow-md max-w-md">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
     <CommandEmpty>No results found.</CommandEmpty>
     <CommandGroup heading="Suggestions">
      {suggestions.map((suggestion, i) => (
       <CommandItem key={i}>
        <suggestion.icon />
        <span>{suggestion.label}</span>
       </CommandItem>
      ))}
     </CommandGroup>
     <CommandSeparator />
     <CommandGroup heading="Settings">
      {settings.map((setting, i) => (
       <CommandItem key={i}>
        <setting.icon />
        <span>{setting.label}</span>
        <CommandShortcut>{setting.shortcut}</CommandShortcut>
       </CommandItem>
      ))}
     </CommandGroup>
    </CommandList>
   </Command>
  </Section>
 )
}