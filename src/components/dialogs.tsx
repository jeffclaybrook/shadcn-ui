import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import Section from "./common/section"

export default function Dialogs() {
 return (
  <Section id="dialogs" title="Dialogs">
   <Dialog>
    <DialogTrigger asChild>
     <Button variant="outline" className="md:max-w-md">Edit Profile</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
     <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here. Click save when you are done.</DialogDescription>
     </DialogHeader>
     <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
       <Label htmlFor="name" className="text-right">Name</Label>
       <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
       <Label htmlFor="username" className="text-right">Username</Label>
       <Input id="username" defaultValue="@peduarte" className="col-span-3" />
      </div>
     </div>
     <DialogFooter>
      <DialogClose asChild>
       <Button type="submit">Save changes</Button>
      </DialogClose>
     </DialogFooter>
    </DialogContent>
   </Dialog>
  </Section>
 )
}