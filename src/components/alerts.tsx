import Section from "./common/section"
import { AlertCircle, Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

export default function Alerts() {
 return (
  <Section id="alerts" title="Alerts">
   <div className="flex flex-col gap-4">
    <Alert>
     <Terminal className="h-4 w-4" />
     <AlertTitle>Heads up!</AlertTitle>
     <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
    <Alert variant="destructive">
     <AlertCircle className="h-4 w-4" />
     <AlertTitle>Error</AlertTitle>
     <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
   </div>
  </Section>
 )
}