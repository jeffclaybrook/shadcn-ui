import Section from "./common/section"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function Avatars() {
 return (
  <Section id="avatars" title="Avatars">
   <Avatar>
    <AvatarImage src="/avatar.webp" />
    <AvatarFallback>JC</AvatarFallback>
   </Avatar>
  </Section>
 )
}