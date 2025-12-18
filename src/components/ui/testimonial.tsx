import * as React from "react"
import { motion, PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number | string
  name: string
  avatar: string
  description: string
}

interface TestimonialCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  showArrows?: boolean
  showDots?: boolean
}

const TestimonialCarousel = React.forwardRef<HTMLDivElement, TestimonialCarouselProps>(
  ({ className, testimonials, showArrows = true, showDots = true, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [exitX, setExitX] = React.useState(0)

    const handleDragEnd = (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo
    ) => {
      if (Math.abs(info.offset.x) > 100) {
        setExitX(info.offset.x)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length)
          setExitX(0)
        }, 200)
      }
    }

    const goToPrev = () => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToNext = () => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    return (
      <div ref={ref} className={cn("relative w-full", className)} {...props}>
        <div className="relative h-[320px] w-full">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex
            const isPrevCard = index === (currentIndex + 1) % testimonials.length
            const isNextCard = index === (currentIndex + 2) % testimonials.length

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute left-1/2 top-0 h-[280px] w-full max-w-md cursor-grab rounded-2xl border border-border bg-card p-6 shadow-lg active:cursor-grabbing",
                  isCurrentCard && "z-30",
                  isPrevCard && "z-20",
                  isNextCard && "z-10"
                )}
                initial={false}
                animate={{
                  x: "-50%",
                  scale: isCurrentCard ? 1 : isPrevCard ? 0.95 : 0.9,
                  y: isCurrentCard ? 0 : isPrevCard ? 10 : 20,
                  opacity: isCurrentCard ? 1 : isPrevCard ? 0.7 : 0.4,
                }}
                exit={{ x: exitX > 0 ? 300 : -300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
              >
                {showArrows && isCurrentCard && (
                  <div className="absolute -left-12 -right-12 top-1/2 flex -translate-y-1/2 justify-between pointer-events-none">
                    <button
                      onClick={goToPrev}
                      className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-background"
                    >
                      ←
                    </button>
                    <button
                      onClick={goToNext}
                      className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-background"
                    >
                      →
                    </button>
                  </div>
                )}

                <div className="flex h-full flex-col items-center justify-center text-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="mb-4 h-16 w-16 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <h4 className="mb-2 text-lg font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {testimonial.description}
                  </p>
                </div>
              </motion.div>
            )
          })}

          {showDots && (
            <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "w-6 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
)

TestimonialCarousel.displayName = "TestimonialCarousel"

export { TestimonialCarousel, type Testimonial }
