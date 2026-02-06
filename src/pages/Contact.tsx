import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact Us</p>
            <h1 className="mt-2 font-heading text-5xl font-bold text-foreground">Get In Touch</h1>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">Calgary, Alberta, Canada</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a href="tel:403-993-6742" className="text-sm text-muted-foreground hover:text-primary transition-colors">403-993-6742</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:general@tuningfactory.ca" className="text-sm text-muted-foreground hover:text-primary transition-colors">general@tuningfactory.ca</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Mon–Fri: 9:00 AM – 6:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sat: 10:00 AM – 4:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sun: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 rounded-lg border border-border bg-muted flex items-center justify-center text-muted-foreground">
                <MapPin className="mr-2 h-5 w-5" /> Google Maps Embed – Calgary, AB
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg border border-border bg-gradient-card p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Name</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-muted border-border text-foreground" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Email</label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="bg-muted border-border text-foreground" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Phone</label>
                  <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-muted border-border text-foreground" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Message</label>
                  <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} className="bg-muted border-border text-foreground" />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
