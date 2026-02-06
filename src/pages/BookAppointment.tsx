import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { toast } from "sonner";

const serviceOptions = [
  "Performance Tuning",
  "ECU Remapping",
  "Dyno Tuning",
  "Suspension Installation & Setup",
  "Wheel Alignment & Corner Balancing",
  "Brake Upgrades",
  "Exhaust Installation",
  "Engine Upgrades",
  "Turbo / Supercharger Installation",
  "Vehicle Diagnostics",
  "General Performance Maintenance",
  "Custom Builds",
  "Track & Motorsport Preparation",
];

const BookAppointment = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", vehicleYear: "", vehicleMake: "", vehicleModel: "", date: "", time: "", notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Appointment request submitted! We'll confirm your booking shortly.");
    setForm({ name: "", email: "", phone: "", service: "", vehicleYear: "", vehicleMake: "", vehicleModel: "", date: "", time: "", notes: "" });
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-2xl">
          <div className="mb-10 text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">Schedule Service</p>
            <h1 className="mt-2 font-heading text-5xl font-bold text-foreground">Book an Appointment</h1>
            <p className="mt-3 text-muted-foreground">Fill out the form below and we'll confirm your appointment.</p>
          </div>

          <div className="rounded-lg border border-border bg-gradient-card p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Full Name *</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-muted border-border text-foreground" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Phone *</label>
                  <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="bg-muted border-border text-foreground" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Email *</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="bg-muted border-border text-foreground" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Service Required *</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  required
                  className="w-full rounded-md border border-border bg-muted px-3 py-2 text-sm text-foreground"
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Vehicle Year</label>
                  <Input value={form.vehicleYear} onChange={(e) => setForm({ ...form, vehicleYear: e.target.value })} placeholder="2022" className="bg-muted border-border text-foreground" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Make</label>
                  <Input value={form.vehicleMake} onChange={(e) => setForm({ ...form, vehicleMake: e.target.value })} placeholder="Subaru" className="bg-muted border-border text-foreground" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Model</label>
                  <Input value={form.vehicleModel} onChange={(e) => setForm({ ...form, vehicleModel: e.target.value })} placeholder="WRX STI" className="bg-muted border-border text-foreground" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Preferred Date *</label>
                  <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required className="bg-muted border-border text-foreground" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Preferred Time</label>
                  <Input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="bg-muted border-border text-foreground" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Additional Notes</label>
                <Textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={4} placeholder="Any specific details about your vehicle or service needs..." className="bg-muted border-border text-foreground" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider hover:bg-primary/90 glow-orange">
                Submit Booking Request
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookAppointment;
