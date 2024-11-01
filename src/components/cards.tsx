import { ComponentProps } from "react"
import { BellRing, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Switch } from "./ui/switch"
import Section from "./common/section"

const frameworks = [
 { value: "next", label: "Next.js" },
 { value: "sveltekit", label: "SvelteKit" },
 { value: "astro", label: "Astro" },
 { value: "nuxt", label: "Nuxt.js" }
]

const notifications = [
 { title: "Your call has been confirmed", description: "1 hour ago" },
 { title: "You have a new message", description: "1 hour ago" },
 { title: "Your subscription is expiring soon!", description: "2 hours ago" },
]

type CardProps = ComponentProps<typeof Card>

export default function Cards({ className, ...props }: CardProps) {
 return (
  <Section id="cards" title="Cards">
   <div className="flex flex-wrap gap-4">
    <Card className="w-[450px]">
     <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
     </CardHeader>
     <CardContent>
      <form>
       <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
         <Label htmlFor="name">Name</Label>
         <Input id="name" placeholder="Name your project" />
        </div>
        <div className="flex flex-col space-y-1 5">
         <Label htmlFor="framework">Framework</Label>
         <Select>
          <SelectTrigger id="framework">
           <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
           {frameworks.map((framework, i) => (
            <SelectItem value={framework.value}>{framework.label}</SelectItem>
           ))}
          </SelectContent>
         </Select>
        </div>
       </div>
      </form>
     </CardContent>
     <CardFooter className="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
     </CardFooter>
    </Card>
    <Card className="w-[450px]">
     <CardHeader>
      <CardTitle>Notifications</CardTitle>
      <CardDescription>You have 3 unread messages.</CardDescription>
     </CardHeader>
     <CardContent className="grid gap-4">
      <div className="flex items-center space-x-4 rounded-md border p-4">
       <BellRing />
       <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">Push Notifications</p>
        <p className="text-sm text-muted-foreground">Send notifications to device.</p>
       </div>
       <Switch />
      </div>
      <div>
       {notifications.map((notification, i) => (
        <div key={i} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
         <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
         <div className="space-y-1">
          <p className="text-sm font-medium leading-none">{notification.title}</p>
          <p className="text-sm text-muted-foreground">{notification.description}</p>
         </div>
        </div>
       ))}
      </div>
     </CardContent>
     <CardFooter>
      <Button className="w-full">
       <Check /> Mark all as read
      </Button>
     </CardFooter>
    </Card>
   </div>
  </Section>
 )
}