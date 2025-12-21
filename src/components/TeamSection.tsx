import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Heart, Award, Users, Zap } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const teamMembers = [
  {
    name: 'Simone Zin',
    role: 'Co-Founder | Sales Director',
    bio: 'Started in the fashion industry in Milan, founded Digital Code Srl in 2016. Passionate about bridging technology with business growth.',
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    name: 'Matteo Arnaboldi',
    role: 'Co-Founder | Project Manager',
    bio: "A doctor who designs and deploys AI-driven workflows—from strategy to execution—so companies operate smoother, faster, and smarter.",
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  }
];

const coreValues = [
  {
    icon: Heart,
    title: 'Ethics',
    description: 'Acting responsibly with integrity, fairness, and respect in every interaction.'
  },
  {
    icon: Award,
    title: 'Professionalism',
    description: 'Delivering high-quality services with transparency and accountability.'
  },
  {
    icon: Users,
    title: 'Human-Centric',
    description: 'Placing people at the center, fostering an inclusive and supportive environment.'
  },
  {
    icon: Zap,
    title: 'AI as an Upgrade',
    description: 'Using AI to enhance businesses while maintaining the human touch.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.5, 0, 0, 1] as const }
  }
};

const TeamSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} id="team" className="py-32 md:py-40 px-6 bg-background relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.5, 0, 0, 1] }}
          className="block font-medium tracking-widest uppercase text-accent mb-8 text-center text-3xl"
        >
          Our Team
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.5, 0, 0, 1] }}
          className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-20"
        >
          We are a hub for AI enthusiasts, entrepreneurs, and innovators who understand AI's potential to reshape the future while keeping humanity at the center.
        </motion.p>

        {/* Team Members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-24"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="relative"
            >
              <div className="relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                <div className="group relative flex flex-col md:flex-row items-center gap-6 overflow-hidden rounded-xl border-[0.75px] border-border bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-accent/30 flex-shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-primary group-hover:text-glow transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className="text-accent text-sm font-medium mt-1 mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.5, 0, 0, 1] }}
          className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12"
        >
          Our Core Values
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {coreValues.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="group text-center p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
