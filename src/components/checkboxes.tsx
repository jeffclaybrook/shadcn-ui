import Section from "./common/section"
import { Checkbox } from "./ui/checkbox"

export default function Checkboxes() {
  return (
    <Section id="checkboxes" title="Checkboxes">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label htmlFor="terms" className="text-sm font-medium leading-none">Accept terms and conditions</label>
      </div>
    </Section>
  )
}