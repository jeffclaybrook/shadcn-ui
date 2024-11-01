import { ReactNode } from "react"

interface Props {
 title: string
 id: string
 children: ReactNode
}

export default function Section({ title, id, children }: Props) {
 return (
  <section id={id} className="flex flex-col md:px-8 mb-16">
   <h2 className="text-xl font-semibold mb-4">{title}</h2>
   {children}
  </section>
 )
}