import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Wrench, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const values = [
  { icon: Wrench, title: "Expert Technicians", desc: "Our certified team brings 15+ years of hands-on experience with performance vehicles." },
  { icon: Shield, title: "Quality Parts Only", desc: "We source from trusted brands and never cut corners. Every part meets our quality standards." },
  { icon: Trophy, title: "Proven Results", desc: "Hundreds of successful builds from daily drivers to championship-winning race cars." },
  { icon: Users, title: "Enthusiast Community", desc: "We're car enthusiasts first. We understand your passion because we share it." },
];

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">About Us</p>
            <h1 className="mt-2 font-heading text-5xl font-bold text-foreground">Driven by Performance</h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Tuning Factory was born from a simple passion: making cars faster, better, and more exciting to drive.
              Based in Calgary, Alberta, we've grown into one of Western Canada's most trusted performance shops,
              serving enthusiasts from coast to coast.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're building a weekend track weapon, a head-turning street machine, or just want your daily
              driver to feel alive — we have the parts, knowledge, and hands-on expertise to make it happen.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg border border-border bg-gradient-card p-6 text-center"
              >
                <v.icon className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider hover:bg-primary/90 glow-orange px-8">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
