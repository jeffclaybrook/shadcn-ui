import Section from "./common/section"
import { Card, CardContent } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

export default function Carousels() {
 return (
  <Section id="carousels" title="Carousels">
   <div className="max-w-xl w-full mx-auto">
    <Carousel>
     <CarouselContent>
      {Array.from({ length: 5 }).map((_, i) => (
       <CarouselItem key={i}>
        <div className="p-1">
         <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
           <span className="text-4xl font-semibold">{i + 1}</span>
          </CardContent>
         </Card>
        </div>
       </CarouselItem>
      ))}
     </CarouselContent>
     <CarouselPrevious />
     <CarouselNext />
    </Carousel>
   </div>
  </Section>
 )
}