import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, Star, Shield, Gauge, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const categories = [
  { name: "Engine & Performance", icon: "🔧", slug: "engine-performance" },
  { name: "Exhaust Systems", icon: "💨", slug: "exhaust" },
  { name: "Suspension & Coilovers", icon: "🏎️", slug: "suspension" },
  { name: "Wheels & Tires", icon: "🛞", slug: "wheels" },
  { name: "Brakes", icon: "🛑", slug: "brakes" },
  { name: "Tuning & Electronics", icon: "⚡", slug: "tuning" },
];

const featuredProducts = [
  { name: "BC Racing Coilovers", price: "$1,299.99", category: "Suspension", image: "🏎️" },
  { name: "Invidia N1 Exhaust", price: "$899.99", category: "Exhaust", image: "💨" },
  { name: "Cobb Accessport V3", price: "$749.99", category: "Tuning", image: "⚡" },
  { name: "StopTech Big Brake Kit", price: "$2,199.99", category: "Brakes", image: "🛑" },
];

const testimonials = [
  { name: "Mike R.", text: "Incredible work on my STI. The dyno results were exactly what they promised. True professionals!", rating: 5 },
  { name: "Sarah K.", text: "Best suspension setup I've ever had. The team really knows what they're doing. Highly recommend!", rating: 5 },
  { name: "James D.", text: "From ordering parts to installation, everything was seamless. These guys are the real deal.", rating: 5 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Calgary's Performance Specialists
            </p>
            <h1 className="mb-6 font-heading text-5xl font-bold leading-tight text-foreground md:text-7xl">
              Unleash Your <span className="text-gradient">Performance</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-muted-foreground">
              Premium performance parts, expert tuning services, and custom builds. 
              Trusted by enthusiasts across Canada.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button size="lg" className="bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider hover:bg-primary/90 glow-orange text-base px-8">
                  Shop Parts <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/book">
                <Button size="lg" variant="outline" className="border-primary/50 text-foreground font-heading font-bold uppercase tracking-wider hover:bg-primary/10 text-base px-8">
                  Book a Service
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-dark">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12 text-center">
            <motion.p variants={fadeUp} custom={0} className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Browse By Category
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-2 font-heading text-4xl font-bold text-foreground">
              Performance Parts
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {categories.map((cat, i) => (
              <motion.div key={cat.slug} variants={fadeUp} custom={i + 2}>
                <Link
                  to={`/shop?category=${cat.slug}`}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-gradient-card p-6 transition-all hover:border-primary/40 hover:glow-orange"
                >
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground">Shop now →</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">Best Sellers</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-foreground">Featured Products</h2>
            </div>
            <Link to="/shop" className="hidden text-sm font-semibold text-primary hover:underline md:inline-flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.name}
                whileHover={{ y: -4 }}
                className="group rounded-lg border border-border bg-gradient-card overflow-hidden transition-all hover:border-primary/40"
              >
                <div className="flex h-48 items-center justify-center bg-muted text-6xl">
                  {product.image}
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{product.category}</p>
                  <h3 className="mt-1 font-heading text-lg font-bold text-foreground">{product.name}</h3>
                  <p className="mt-2 font-heading text-xl font-bold text-primary">{product.price}</p>
                  <Button className="mt-4 w-full bg-primary text-primary-foreground font-heading font-semibold uppercase text-xs tracking-wider hover:bg-primary/90">
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-dark">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">Expert Services</p>
              <h2 className="mt-2 font-heading text-4xl font-bold text-foreground">Professional Tuning & Installation</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From ECU remapping and dyno tuning to full custom builds, our certified technicians deliver 
                results you can feel on the road and the track.
              </p>
              <ul className="mt-6 space-y-3">
                {["Performance Tuning & ECU Remapping", "Dyno Testing & Tuning", "Suspension Setup & Corner Balancing", "Turbo & Supercharger Installation", "Track & Motorsport Preparation"].map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-foreground">
                    <Wrench className="h-4 w-4 text-primary shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Link to="/services">
                  <Button className="bg-primary text-primary-foreground font-heading font-semibold uppercase tracking-wider hover:bg-primary/90">
                    View All Services
                  </Button>
                </Link>
                <Link to="/book">
                  <Button variant="outline" className="border-primary/50 text-foreground font-heading font-semibold uppercase tracking-wider hover:bg-primary/10">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Gauge, label: "Dyno Tested", value: "500+ HP Builds" },
                { icon: Star, label: "5-Star Rated", value: "100+ Reviews" },
                { icon: Shield, label: "Warranty", value: "On All Work" },
                { icon: Wrench, label: "Experience", value: "15+ Years" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border bg-gradient-card p-6 text-center">
                  <stat.icon className="mx-auto h-8 w-8 text-primary" />
                  <p className="mt-3 font-heading text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-foreground">What Our Customers Say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-lg border border-border bg-gradient-card p-6">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
                <p className="mt-4 font-heading font-bold text-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-dark">
        <div className="container text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">Get In Touch</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-foreground">Ready to Upgrade?</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Visit our shop in Calgary or contact us to discuss your build. We ship performance parts Canada-wide.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="tel:403-993-6742">
              <Button size="lg" className="bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider hover:bg-primary/90 glow-orange px-8">
                <Phone className="mr-2 h-5 w-5" /> Call Us
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary/50 text-foreground font-heading font-bold uppercase tracking-wider hover:bg-primary/10 px-8">
                Contact Form
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
