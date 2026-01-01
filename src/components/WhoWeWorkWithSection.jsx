import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { usePerformance } from "../hooks/usePerformance";
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

const industriesData = [
  {
    title: "Real Estate",
    subtitle:
      "Smart property insights, automated lead handling, and seamless tenant management.",
    useCases: realEstateUseCases,
  },
  {
    title: "Finance & Accounting",
    subtitle:
      "Reliable reporting, cash visibility, and controlled spending—without manual chasing.",
    useCases: financeUseCases,
  },
  {
    title: "Healthcare",
    subtitle:
      "AI-powered patient intake, smart routing, and streamlined clinic operations.",
    useCases: healthcareUseCases,
    disclaimer:
      "This supports intake and routing and does not replace clinical judgment.",
  },
  {
    title: "Logistics & Supply Chain",
    subtitle: "Control, speed, and visibility across orders, routes, and operations.",
    useCases: logisticsUseCases,
  },
  {
    title: "Insurance",
    subtitle: "Faster submissions, better market visibility, and cleaner operations.",
    useCases: insuranceUseCases,
  },
  {
    title: "Restaurants",
    subtitle:
      "WhatsApp orders to reservations and feedback—run smoother with less manual work.",
    useCases: restaurantsUseCases,
  },
];

const UseCaseMiniCard = ({ useCase }) => (
  <div className="p-6 rounded-xl bg-secondary/50 border border-border/40 h-full hover:bg-secondary/70 transition-colors duration-300">
    <h4 className="text-lg font-bold text-primary mb-3 leading-tight">
      {useCase.title}
    </h4>
    <p className="text-sm text-primary font-medium leading-relaxed mb-4">
      {useCase.description}
    </p>
    <p className="text-sm text-accent font-semibold">
      <span className="font-bold">Outcomes:</span> {useCase.outcomes.join(" • ")}
    </p>
  </div>
);

const IndustryCard = ({ industry, index, isInView, performanceTier, isLowEnd }) => {
  // Adaptive animation settings
  const getAnimationDuration = () => {
    if (isLowEnd) return 0;
    if (performanceTier === "medium") return 0.5;
    return 0.7;
  };

  const getDelay = () => {
    if (isLowEnd) return 0;
    if (performanceTier === "medium") return index * 0.08;
    return index * 0.1;
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: getAnimationDuration(),
        delay: getDelay(),
        ease: [0.5, 0, 0, 1],
      },
    },
  };

  const getGridCols = (count) => {
    if (count === 2) return "md:grid-cols-2";
    if (count === 3) return "md:grid-cols-3";
    if (count === 4) return "md:grid-cols-2 lg:grid-cols-4";
    if (count === 5) return "md:grid-cols-2 lg:grid-cols-3";
    return "md:grid-cols-2";
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full group"
    >
      <div className="relative rounded-2xl border border-border bg-background overflow-hidden">
        <GlowingEffect
          spread={80}
          glow={true}
          disabled={isLowEnd}
          performanceTier={performanceTier}
          proximity={100}
          inactiveZone={0.01}
          borderWidth={1}
        />

        <div className="relative z-10 p-6 md:p-8">
          {/* Header */}
          <div className="mb-2">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1">
              {industry.title}
            </h3>
            <p className="text-base text-primary font-semibold leading-relaxed max-w-2xl text-justify md:text-base">
              {industry.subtitle}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-accent/50 via-accent/20 to-transparent mb-2" />

          {/* Use Cases Label */}
          <span className="text-sm font-semibold tracking-wider uppercase text-accent mb-3 block">
            Use Cases
          </span>

          {/* Desktop Grid */}
          <div
            className={`hidden md:grid ${getGridCols(industry.useCases.length)} gap-5`}
          >
            {industry.useCases.map((useCase) => (
              <UseCaseMiniCard key={useCase.title} useCase={useCase} />
            ))}
          </div>

          {/* Mobile Carousel - disable dragFree on low-end */}
          <div className="md:hidden">
            <Carousel opts={{ align: "start", dragFree: !isLowEnd }}>
              <CarouselContent className="-ml-4">
                {industry.useCases.map((useCase) => (
                  <CarouselItem key={useCase.title} className="basis-[85%] pl-4">
                    <UseCaseMiniCard useCase={useCase} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Disclaimer if exists */}
          {industry.disclaimer && (
            <p className="text-xs text-muted-foreground/70 mt-6 italic">
              {industry.disclaimer}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const WhoWeWorkWithSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { performanceTier, isLowEnd, prefersReducedMotion } = usePerformance();

  // Adaptive animation settings
  const getAnimationDuration = () => {
    if (isLowEnd || prefersReducedMotion) return 0;
    if (performanceTier === "medium") return 0.4;
    return 0.6;
  };

  return (
    <section
      ref={ref}
      className="py-32 md:py-40 px-6 bg-secondary/30 relative overflow-hidden"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{
              duration: getAnimationDuration(),
              ease: [0.5, 0, 0, 1],
            }}
            className="block font-medium tracking-widest uppercase text-accent mb-8 text-3xl"
          >
            Industries we serve
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{
              duration: getAnimationDuration(),
              delay: isLowEnd ? 0 : 0.1,
              ease: [0.5, 0, 0, 1],
            }}
            className="text-xl sm:text-2xl leading-relaxed text-primary font-bold max-w-3xl mx-auto"
          >
            We partner with forward-thinking organizations across diverse
            industries to implement AI-driven solutions.
          </motion.p>
        </div>

        {/* Industry Cards - Full Width Stack */}
        <div className="flex flex-col gap-8">
          {industriesData.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              industry={industry}
              index={index}
              isInView={isInView}
              performanceTier={performanceTier}
              isLowEnd={isLowEnd}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWithSection;
