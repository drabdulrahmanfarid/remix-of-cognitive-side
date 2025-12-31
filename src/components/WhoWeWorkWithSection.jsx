import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { GlowingEffect } from "./ui/glowing-effect";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
const realEstateUseCases = [
  {
    title: "AI Property Concierge (Match + Book Viewings)",
    description:
      "An assistant that chats with prospects, captures requirements (budget, location, type, timeline), then recommends the best-fit listings and books a viewing automatically—handing off to the agent when needed.",
    outcomes: [
      "Faster replies",
      "More viewings booked",
      "Higher conversion",
      "Less agent admin",
    ],
  },
  {
    title: "Instant Lead Qualification (Smart Handoff)",
    description:
      "Every new inquiry is followed up instantly to qualify intent and collect key details, then your team receives a structured summary so agents focus only on serious prospects.",
    outcomes: [
      "Higher lead quality",
      "Faster response time",
      "Better agent focus",
      "Clearer pipeline",
    ],
  },
  {
    title: "Tenant Repair Requests (Two-Way Tracking)",
    description:
      "Tenants submit repair issues once, and managers update status over time—keeping a complete history per unit, including photos and notes, in one organized place.",
    outcomes: [
      "Fewer lost requests",
      "Faster resolution",
      "Full visibility per unit",
      "Cleaner documentation",
    ],
  },
  {
    title: "Maintenance Triage (Prioritize + Dispatch)",
    description:
      "Maintenance requests are categorized and prioritized (including emergency escalation) and routed to the right vendor, while tenants receive instant acknowledgments and updates.",
    outcomes: [
      "Faster dispatch",
      "Fewer urgent misses",
      "Higher tenant satisfaction",
      "Strong audit trail",
    ],
  },
];
const healthcareUseCases = [
  {
    title: "AI Symptom Pre-Screening + Doctor Recommendations",
    description:
      "Patients describe symptoms in chat or a simple form. The assistant organizes the information, suggests the most relevant specialty/doctor options, and sends a clear next-step message to the patient and your team.",
    outcomes: [
      "Faster first response",
      "Better routing",
      "Less front-desk load",
      "Clear patient summaries",
    ],
  },
  {
    title: "Smart Patient Intake + Appointment Booking",
    description:
      "Collects patient details and symptoms, routes to the right department, and schedules the appointment—while keeping a structured record for tracking and follow-up.",
    outcomes: [
      "Faster bookings",
      "Fewer missed details",
      "Reduced admin work",
      "Cleaner intake flow",
    ],
  },
  {
    title: "Multi-Channel Clinic Assistant (Registration + Documents)",
    description:
      "A unified assistant that supports registration, scheduling, and basic document intake (text, voice notes, images, PDFs), then hands off structured summaries to the clinic team for review.",
    outcomes: [
      "One consistent experience",
      "Faster processing",
      "Better continuity",
      "Stronger team visibility",
    ],
  },
];
const financeUseCases = [
  {
    title: "AI Finance Desk (CFO-Level Support)",
    description:
      "A single finance desk that receives requests (forecasting, budgeting, KPI analysis, cash planning, risk notes) and returns a structured, decision-ready response—like having a virtual finance team on demand.",
    outcomes: [
      "Faster decisions",
      "Consistent analysis",
      "Less back-and-forth",
      "Executive-ready summaries",
    ],
  },
  {
    title: "Daily Cash-Flow Pulse (Report + Alerts)",
    description:
      "A daily overview that tracks inflows/outflows, validates entries, and sends a clear daily cash-flow summary to leadership so issues are seen early, not at month-end.",
    outcomes: [
      "Real-time visibility",
      "Early risk detection",
      "Better alignment",
      "Clear daily record",
    ],
  },
  {
    title: "Monthly Closing Pack (Totals + Insights)",
    description:
      "Automatically compiles the previous month's transactions into a monthly report with totals and short, actionable insights delivered to stakeholders in a consistent format.",
    outcomes: [
      "Faster month-end close",
      "Clear trends",
      "Less manual reporting",
      "Better oversight",
    ],
  },
  {
    title: "Chat-Based Expense Logging (With Approvals)",
    description:
      'Teams record income/expenses in a simple chat format. Expenses can require supervisor approval with approve/reject and "view details" actions to keep records controlled.',
    outcomes: [
      "Faster capture",
      "Stronger spend control",
      "Fewer missing details",
      "Cleaner tracking",
    ],
  },
];
const logisticsUseCases = [
  {
    title: "Supply Chain Control Tower (Instant Answers)",
    description:
      "A single operations view where your team can ask questions about shipments, delays, and performance—and get clear answers instantly, backed by your operational data.",
    outcomes: [
      "Faster decisions",
      "Fewer blind spots",
      "Better KPI visibility",
      "Less manual reporting",
    ],
  },
  {
    title: "Automated Order Intake (Email → Structured)",
    description:
      "Inbound orders arriving by email are automatically read, structured, and logged so nothing gets missed and ops teams receive clean order lines.",
    outcomes: [
      "Faster processing",
      "Fewer entry errors",
      "Clear warehouse handoff",
      "Higher throughput",
    ],
  },
  {
    title: "Route Time & Distance Calculator (ETA + Costs)",
    description:
      "Automatically calculates distance and driving time for transport lanes to improve ETAs, quoting, and cost simulations without manual lookups.",
    outcomes: [
      "Faster quoting",
      "More accurate ETAs",
      "Better cost control",
      "Standardized lane data",
    ],
  },
  {
    title: "Multi-Stop Pickup Planner (Optimize Stops)",
    description:
      "Multi-stop pickup requests are converted into an optimized stop sequence with a complete route plan and timing—ready to dispatch.",
    outcomes: [
      "Fewer kilometers",
      "Lower fuel/time",
      "Better driver utilization",
      "More reliable schedules",
    ],
  },
  {
    title: "Transport Request Management (Confirm + Enrich)",
    description:
      "Shipment requests are captured, key details extracted, route info added, and a professional confirmation is generated to reduce delays and back-and-forth.",
    outcomes: [
      "Faster confirmations",
      "Cleaner request data",
      "Better customer experience",
      "Strong audit trail",
    ],
  },
];
const insuranceUseCases = [
  {
    title: "Insurance Market Intelligence (News + Signals)",
    description:
      "We continuously track relevant insurance news and updates, filter by your keywords/topics, and store the most important items in an internal knowledge base so your team sees what matters without manual searching.",
    outcomes: [
      "Faster awareness",
      "Better market signals",
      "Less manual research",
      "Searchable internal library",
    ],
  },
  {
    title: "Commercial Submission Automation (Intake → Send)",
    description:
      "We streamline commercial insurance submissions by collecting the required details once, generating a clean submission pack, and sending it to the right recipients with consistent formatting to reduce back-and-forth and speed up quoting.",
    outcomes: [
      "Faster submissions",
      "Fewer missing fields",
      "Less admin work",
      "More consistent quoting",
    ],
  },
];
const restaurantsUseCases = [
  {
    title: "Smart Reservation Handling (Book / Change / Cancel)",
    description:
      "Guests can message to reserve a table, change timing, or cancel—while availability is checked automatically and reservations stay organized for the team.",
    outcomes: [
      "Faster confirmations",
      "Fewer double-bookings",
      "Less phone load",
      "Cleaner records",
    ],
  },
  {
    title: "WhatsApp Order Taking + Menu & General Questions",
    description:
      "Customers can order on WhatsApp, ask menu/price/ingredient questions, and get instant answers. Orders are captured in a structured format and handed to staff clearly (items, notes, address, payment, delivery/pickup).",
    outcomes: [
      "Faster ordering",
      "Fewer mistakes",
      "Better experience",
      "Less back-and-forth",
    ],
  },
  {
    title: "Automated Customer Feedback Collection",
    description:
      "After a visit or delivery, customers receive a simple feedback request, and responses are stored and organized so you can spot patterns and improve service quality.",
    outcomes: [
      "More feedback volume",
      "Better insights",
      "Higher retention",
      "Clear tracking",
    ],
  },
  {
    title: "Complaint & Service Recovery (Fast Escalation)",
    description:
      "If a customer is unhappy, the message is captured, categorized, and escalated to the right person with a structured summary so issues are resolved quickly and professionally.",
    outcomes: [
      "Faster resolution",
      "Reduced bad reviews",
      "Higher trust",
      "Strong audit trail",
    ],
  },
];
const industries = [
  {
    title: "Real Estate",
    subtitle: "Smart property insights and automated valuations",
    useCases: ["Property Valuation", "Lead Scoring", "Market Analysis"],
  },
  {
    title: "Finance & Accounting",
    subtitle:
      "Reliable reporting, cash visibility, and controlled spending—without manual chasing.",
    useCases: ["Risk Analysis", "Fraud Detection", "Portfolio Optimization"],
  },
  {
    title: "Healthcare",
    subtitle: "AI-powered diagnostics and patient care optimization",
    useCases: ["Diagnostics", "Patient Flow", "Resource Planning"],
  },
  {
    title: "E-commerce",
    subtitle: "Personalized shopping and inventory intelligence",
    useCases: ["Recommendations", "Demand Forecasting", "Price Optimization"],
  },
  {
    title: "Manufacturing",
    subtitle: "Predictive maintenance and quality control",
    useCases: ["Predictive Maintenance", "Quality Control", "Supply Chain"],
  },
  {
    title: "Logistics & Supply Chain",
    subtitle:
      "Control, speed, and visibility across orders, routes, and operations.",
    useCases: ["Route Planning", "Delivery ETAs", "Fleet Management"],
  },
  {
    title: "Insurance",
    subtitle:
      "Faster submissions, better market visibility, and cleaner operations.",
    useCases: ["Claims Processing", "Risk Assessment", "Fraud Detection"],
  },
  {
    title: "Restaurants",
    subtitle:
      "From WhatsApp orders to reservations and feedback—run smoother with less manual work.",
    useCases: ["Reservations", "Order Taking", "Feedback Collection"],
  },
  {
    title: "Retail",
    subtitle: "Customer analytics and inventory management",
    useCases: ["Customer Insights", "Stock Optimization", "Sales Forecasting"],
  },
];
const UseCaseMiniCard = ({ useCase }) => (
  <div className="p-4 rounded-xl bg-secondary/40 border border-border/40 h-full">
    <h4 className="text-sm font-semibold text-primary mb-2 leading-tight">
      {useCase.title}
    </h4>
    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
      {useCase.description}
    </p>
    <p className="text-xs text-accent/80">
      <span className="font-medium">Outcomes:</span>{" "}
      {useCase.outcomes.join(" • ")}
    </p>
  </div>
);
const WhoWeWorkWithSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.5, 0, 0, 1],
      },
    },
  };
  return (
    <section
      ref={ref}
      className="py-32 md:py-40 px-6 bg-secondary/30 relative overflow-hidden"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.5, 0, 0, 1] }}
            className="block font-medium tracking-widest uppercase text-accent mb-8 text-3xl"
          >
            Industries we serve
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.5, 0, 0, 1] }}
            className="text-xl sm:text-2xl leading-relaxed text-primary font-semibold max-w-3xl mx-auto"
          >
            We partner with forward-thinking organizations across diverse
            industries to implement AI-driven solutions.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {industries.map((industry) => {
            const isRealEstate = industry.title === "Real Estate";
            const isHealthcare = industry.title === "Healthcare";
            const isFinance = industry.title === "Finance & Accounting";
            const isLogistics = industry.title === "Logistics & Supply Chain";
            const isInsurance = industry.title === "Insurance";
            const isRestaurants = industry.title === "Restaurants";
            const isExpanded =
              isRealEstate ||
              isHealthcare ||
              isFinance ||
              isLogistics ||
              isInsurance ||
              isRestaurants;
            return (
              <motion.div
                key={industry.title}
                variants={cardVariants}
                className={`group relative ${isExpanded ? "lg:col-span-2 lg:row-span-2" : ""}`}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: [0.5, 0, 0, 1] },
                }}
              >
                <div className="relative h-full rounded-2xl border border-border bg-background p-6 overflow-hidden">
                  <GlowingEffect
                    spread={60}
                    glow={true}
                    disabled={false}
                    proximity={80}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />

                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {industry.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {industry.subtitle}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-accent/30 mb-4" />

                    {/* Use Cases Section */}
                    <div>
                      <span className="text-xs font-medium tracking-wider uppercase text-accent/80 mb-3 block">
                        Use Cases
                      </span>

                      {isRealEstate ? (
                        <>
                          {/* Real Estate: Desktop 2x2 grid */}
                          <div className="hidden md:grid grid-cols-2 gap-4">
                            {realEstateUseCases.map((useCase) => (
                              <UseCaseMiniCard
                                key={useCase.title}
                                useCase={useCase}
                              />
                            ))}
                          </div>

                          {/* Real Estate: Mobile carousel */}
                          <div className="md:hidden">
                            <Carousel opts={{ align: "start", dragFree: true }}>
                              <CarouselContent className="-ml-3">
                                {realEstateUseCases.map((useCase) => (
                                  <CarouselItem
                                    key={useCase.title}
                                    className="basis-[85%] pl-3"
                                  >
                                    <UseCaseMiniCard useCase={useCase} />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                            </Carousel>
                          </div>
                        </>
                      ) : isHealthcare ? (
                        <>
                          {/* Healthcare: Desktop 3-column grid */}
                          <div className="hidden md:grid grid-cols-3 gap-4">
                            {healthcareUseCases.map((useCase) => (
                              <UseCaseMiniCard
                                key={useCase.title}
                                useCase={useCase}
                              />
                            ))}
                          </div>

                          {/* Healthcare: Mobile carousel */}
                          <div className="md:hidden">
                            <Carousel opts={{ align: "start", dragFree: true }}>
                              <CarouselContent className="-ml-3">
                                {healthcareUseCases.map((useCase) => (
                                  <CarouselItem
                                    key={useCase.title}
                                    className="basis-[85%] pl-3"
                                  >
                                    <UseCaseMiniCard useCase={useCase} />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                            </Carousel>
                          </div>

                          {/* Healthcare disclaimer */}
                          <p className="text-[10px] text-muted-foreground/70 mt-4 italic">
                            This supports intake and routing and does not
                            replace clinical judgment.
                          </p>
                        </>
                      ) : isFinance ? (
                        <>
                          {/* Finance: Desktop 2x2 grid */}
                          <div className="hidden md:grid grid-cols-2 gap-4">
                            {financeUseCases.map((useCase) => (
                              <UseCaseMiniCard
                                key={useCase.title}
                                useCase={useCase}
                              />
                            ))}
                          </div>

                          {/* Finance: Mobile carousel */}
                          <div className="md:hidden">
                            <Carousel opts={{ align: "start", dragFree: true }}>
                              <CarouselContent className="-ml-3">
                                {financeUseCases.map((useCase) => (
                                  <CarouselItem
                                    key={useCase.title}
                                    className="basis-[85%] pl-3"
                                  >
                                    <UseCaseMiniCard useCase={useCase} />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                            </Carousel>
                          </div>
                        </>
                      ) : isLogistics ? (
                        <>
                          {/* Logistics: Desktop 3-column grid (3 top + 2 bottom) */}
                          <div className="hidden md:grid grid-cols-3 gap-4">
                            {logisticsUseCases.map((useCase) => (
                              <UseCaseMiniCard
                                key={useCase.title}
                                useCase={useCase}
                              />
                            ))}
                          </div>

                          {/* Logistics: Mobile carousel */}
                          <div className="md:hidden">
                            <Carousel opts={{ align: "start", dragFree: true }}>
                              <CarouselContent className="-ml-3">
                                {logisticsUseCases.map((useCase) => (
                                  <CarouselItem
                                    key={useCase.title}
                                    className="basis-[85%] pl-3"
                                  >
                                    <UseCaseMiniCard useCase={useCase} />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                            </Carousel>
                          </div>
                        </>
                      ) : isInsurance ? (
                        <>
                          {/* Insurance: Desktop 2-column grid */}
                          <div className="hidden md:grid grid-cols-2 gap-4">
                            {insuranceUseCases.map((useCase) => (
                              <UseCaseMiniCard
                                key={useCase.title}
                                useCase={useCase}
                              />
                            ))}
                          </div>

                          {/* Insurance: Mobile carousel */}
                          <div className="md:hidden">
                            <Carousel opts={{ align: "start", dragFree: true }}>
                              <CarouselContent className="-ml-3">
                                {insuranceUseCases.map((useCase) => (
                                  <CarouselItem
                                    key={useCase.title}
                                    className="basis-[85%] pl-3"
                                  >
                                    <UseCaseMiniCard useCase={useCase} />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                            </Carousel>
                          </div>
                        </>
                      ) : isRestaurants ? (
                        <>
                          {/* Restaurants: Desktop 2x2 grid */}
                          <div className="hidden md:grid grid-cols-2 gap-4">
                            {restaurantsUseCases.map((useCase) => (
                              <UseCaseMiniCard
                                key={useCase.title}
                                useCase={useCase}
                              />
                            ))}
                          </div>

                          {/* Restaurants: Mobile carousel */}
                          <div className="md:hidden">
                            <Carousel opts={{ align: "start", dragFree: true }}>
                              <CarouselContent className="-ml-3">
                                {restaurantsUseCases.map((useCase) => (
                                  <CarouselItem
                                    key={useCase.title}
                                    className="basis-[85%] pl-3"
                                  >
                                    <UseCaseMiniCard useCase={useCase} />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                            </Carousel>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Other industries: Desktop flex wrap */}
                          <div className="hidden md:flex md:flex-wrap gap-2">
                            {industry.useCases.slice(0, 3).map((useCase) => (
                              <span
                                key={useCase}
                                className="px-3 py-1.5 text-xs font-medium text-primary/70 bg-secondary/60 rounded-full border border-border/50 transition-colors duration-200 group-hover:bg-secondary group-hover:text-primary/90"
                              >
                                {useCase}
                              </span>
                            ))}
                          </div>

                          {/* Other industries: Mobile carousel */}
                          <div className="md:hidden">
                            <Carousel opts={{ align: "start", dragFree: true }}>
                              <CarouselContent className="-ml-2">
                                {industry.useCases
                                  .slice(0, 3)
                                  .map((useCase) => (
                                    <CarouselItem
                                      key={useCase}
                                      className="basis-auto pl-2"
                                    >
                                      <span className="px-3 py-1.5 text-xs font-medium text-primary/70 bg-secondary/60 rounded-full border border-border/50 transition-colors duration-200 group-hover:bg-secondary group-hover:text-primary/90 inline-block">
                                        {useCase}
                                      </span>
                                    </CarouselItem>
                                  ))}
                              </CarouselContent>
                            </Carousel>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default WhoWeWorkWithSection;
