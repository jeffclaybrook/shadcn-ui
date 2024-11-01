import Section from "./common/section"
import { ChevronRight, Loader2, Mail } from "lucide-react"
import { Button } from "./ui/button"

export default function Buttons() {
 return (
  <Section id="buttons" title="Buttons">
   <div className="flex flex-wrap gap-4">
    <Button>Button</Button>
    <Button variant="secondary">Button</Button>
    <Button variant="destructive">Button</Button>
    <Button variant="outline">Button</Button>
    <Button variant="ghost">Button</Button>
    <Button variant="link">Button</Button>
    <Button variant="outline" size="icon">
     <ChevronRight />
    </Button>
    <Button>
     <Mail /> Login with Email
    </Button>
    <Button disabled>
     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
     Please wait
    </Button>
   </div>
  </Section>
 )
}