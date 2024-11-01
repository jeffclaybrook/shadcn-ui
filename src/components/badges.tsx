import Section from "./common/section"
import { Badge } from "./ui/badge"

export default function Badges() {
 return (
  <Section id="badges" title="Badges">
   <div className="flex gap-4">
    <Badge>Badge</Badge>
    <Badge variant="secondary">Badge</Badge>
    <Badge variant="destructive">Badge</Badge>
    <Badge variant="outline">Badge</Badge>
   </div>
  </Section>
 )
}