import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  { name: "Performance Tuning", desc: "Maximize your vehicle's power output with our comprehensive performance tuning packages tailored to your goals." },
  { name: "ECU Remapping", desc: "Custom ECU calibration to unlock hidden power, improve throttle response, and optimize fuel efficiency." },
  { name: "Dyno Tuning", desc: "State-of-the-art dyno testing and tuning to measure real power gains and ensure safe, reliable performance." },
  { name: "Suspension Installation & Setup", desc: "Professional coilover installation, corner balancing, and alignment for optimal handling and ride quality." },
  { name: "Wheel Alignment & Corner Balancing", desc: "Precision alignment and corner balancing services for street and track applications." },
  { name: "Brake Upgrades", desc: "Big brake kit installations, pad and rotor upgrades, and brake fluid flushes for maximum stopping power." },
  { name: "Exhaust Installation", desc: "Cat-back, turbo-back, and header installations. Custom exhaust fabrication available." },
  { name: "Engine Upgrades", desc: "Intake, intercooler, fuel system upgrades, and more to build serious power reliably." },
  { name: "Turbo / Supercharger Installation", desc: "Forced induction builds from bolt-on kits to fully custom turbo and supercharger setups." },
  { name: "Vehicle Diagnostics", desc: "Advanced diagnostic scanning and troubleshooting to identify and resolve performance issues." },
  { name: "General Performance Maintenance", desc: "Oil changes, fluid flushes, and maintenance services using premium performance-grade products." },
  { name: "Custom Builds", desc: "Full custom build projects from mild street upgrades to dedicated race car builds." },
  { name: "Track & Motorsport Preparation", desc: "Complete track prep including safety equipment, setup optimization, and race-day support." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" as const },
  }),
};

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicesBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container relative z-10 py-16">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">What We Do</p>
          <h1 className="mt-2 font-heading text-5xl font-bold text-foreground md:text-6xl">Our Services</h1>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Expert automotive performance services backed by years of experience and a passion for speed.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                variants={fadeUp}
                custom={i}
                className="group rounded-lg border border-border bg-gradient-card p-6 transition-all hover:border-primary/40"
              >
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Ready to get started? Book your appointment today.</p>
            <Link to="/book">
              <Button size="lg" className="bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider hover:bg-primary/90 glow-orange px-8">
                Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
