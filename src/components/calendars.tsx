"use client"

import { useState } from "react"
import Section from "./common/section"
import { Calendar } from "./ui/calendar"

export default function Calendars() {
 const [date, setDate] = useState<Date | undefined>(new Date())

 return (
  <Section id="calendars" title="Calendars">
   <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border mr-auto"
   />
  </Section>
 )
}